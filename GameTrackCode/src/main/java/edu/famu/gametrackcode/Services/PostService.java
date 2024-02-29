package edu.famu.gametrackcode.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import edu.famu.gametrackcode.Model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
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

    public Post createPost(Post post) throws ExecutionException, InterruptedException {
        DocumentReference docRef = db.collection("posts").document();
        // Set creation and update timestamps
        post.getCreationDate(Instant.now());
        post.getUpdateDate(Instant.now());
        // Generate and set post-ID
        post.getPostId(docRef.getId());
        docRef.set(post).get();
        return post;
    }

    public Post getPost(String postId) throws ExecutionException, InterruptedException {
        DocumentSnapshot documentSnapshot = db.collection("posts").document(postId).get().get();
        if (documentSnapshot.exists()) {
            return documentSnapshot.toObject(Post.class);
        } else {
            // Consider how you want to handle a non-existent post.
            // For example, throw a custom NotFoundException.
            throw new IllegalStateException("Post not found with ID: " + postId);
        }
    }

    public List<Post> getAllPosts() throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> querySnapshot = db.collection("posts").get();
        List<QueryDocumentSnapshot> documents = querySnapshot.get().getDocuments();
        List<Post> posts = new ArrayList<>();
        documents.forEach(doc -> posts.add(doc.toObject(Post.class)));
        return posts;
    }

    public Post updatePost(String postId, Post post) throws ExecutionException, InterruptedException {
        DocumentReference docRef = db.collection("posts").document(postId);
        // Update the updateTime to now
        post.getUpdateDate(Instant.now());
        docRef.set(post).get();
        return post;
    }

    public boolean deletePost(String postId) throws ExecutionException, InterruptedException {
        db.collection("posts").document(postId).delete().get();
        return true; // Or check for successful deletion if necessary
    }
}
