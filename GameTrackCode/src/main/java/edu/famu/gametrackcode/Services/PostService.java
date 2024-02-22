package edu.famu.gametrackcode.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.gametrackcode.Model.User;
import jdk.jfr.Category;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PostService {

    private Firestore db = FirestoreClient.getFirestore();

    private Post getPost(DocumentSnapshot doc) throws ExecutionException, InterruptedException {
        UserService userService = new UserService(db);
        User user = userService.getUserById(doc.getString("authorId"));

        ArrayList<Category> categories = new ArrayList<>();
        ArrayList<DocumentReference> refs = (ArrayList<DocumentReference>) doc.get("categoryId");
        for (DocumentReference ref : refs) {
            ApiFuture<DocumentSnapshot> catQuery = ref.get();
            DocumentSnapshot catDoc = catQuery.get();
            Category category = catDoc.toObject(Category.class);
            categories.add(category);
        }

        return new Post(
                doc.getId(),
                doc.getString("title"),
                doc.getString("content"),
                doc.getString("summary"),
                doc.getString("slug"),
                doc.getString("metaTitle"),
                doc.getBoolean("published"),
                doc.getBoolean("allowComments"),
                doc.getTimestamp("createdAt"),
                doc.getTimestamp("publishedAt"),
                (ArrayList<String>) doc.get("tags"),
                user,
                categories
        );
    }

    public ArrayList<Post> getPostsByUser(String userId) throws ExecutionException, InterruptedException {
        DocumentReference userRef = db.collection("Users").document(userId);
        Query query = db.collection("Posts").whereEqualTo("authorId", userRef);

        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        ArrayList<Post> posts = new ArrayList<>();
        for (QueryDocumentSnapshot doc : documents) {
            posts.add(getPost(doc));
        }

        return posts;
    }

    public ArrayList<Post> getPosts() throws ExecutionException, InterruptedException {
        Query query = db.collection("Posts");
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        ArrayList<Post> posts = new ArrayList<>();
        for (QueryDocumentSnapshot doc : documents) {
            posts.add(getPost(doc));
        }

        return posts;
    }

    public Post getPostById(String postId) throws ExecutionException, InterruptedException {
        DocumentReference postDoc = db.collection("Posts").document(postId);
        ApiFuture<DocumentSnapshot> future = postDoc.get();
        DocumentSnapshot doc = future.get();

        if (doc.exists()) {
            return getPost(doc);
        } else {
            return null;
        }
    }

    // Other methods...

}
