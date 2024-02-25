package edu.famu.gametrackcode.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import edu.famu.gametrackcode.Model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PostService {
    private final Firestore db;

    @Autowired
    public PostService(Firestore db) {
        this.db = db;
    }

    public String createPost(Post post) throws ExecutionException, InterruptedException {
        CollectionReference posts = db.collection("posts");
        WriteResult writeResult = posts.document().create(post).get();
        return writeResult.getUpdateTime().toString();
    }

    public Post getPost(String postId) throws ExecutionException, InterruptedException {
        return db.collection("posts").document(postId).get().get().toObject(Post.class);
    }

    public List<Post> getAllPosts() throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> querySnapshot = db.collection("posts").get();
        List<QueryDocumentSnapshot> documents = querySnapshot.get().getDocuments();
        List<Post> posts = new ArrayList<>();
        for (DocumentSnapshot document : documents) {
            posts.add(document.toObject(Post.class));
        }
        return posts;
    }

    public String updatePost(String postId, Post post) throws ExecutionException, InterruptedException {
        WriteResult writeResult = db.collection("posts").document(postId).set(post).get();
        return writeResult.getUpdateTime().toString();
    }

    public String deletePost(String postId) throws ExecutionException, InterruptedException {
        WriteResult writeResult = db.collection("posts").document(postId).delete().get();
        return writeResult.getUpdateTime().toString();
    }
}
