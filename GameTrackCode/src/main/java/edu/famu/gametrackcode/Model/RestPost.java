package edu.famu.gametrackcode.Model;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.ArrayList;

@Data
@NoArgsConstructor
public class RestPost extends BasePost {
    private DocumentReference authorId;
    private ArrayList<DocumentReference> categoryId;

    public RestPost(String postId, String title, String content, String summary, String slug, String metaTitle, boolean published, boolean allowComments, Timestamp createAt, Timestamp publishedAt, ArrayList<String> tags, DocumentReference authorId, ArrayList<DocumentReference> categoryId) {
        super(postId, title, content, summary, slug, metaTitle, published, allowComments, createAt, publishedAt, tags);
        this.authorId = authorId;
        this.categoryId = categoryId;
    }

    public void setAuthorId(String authorId) {
        Firestore db = FirestoreClient.getFirestore();
        this.authorId = db.collection("User").document(authorId);
    }

    public void setCategoryId(ArrayList<String> categoryId) {
        Firestore db = FirestoreClient.getFirestore();
        this.categoryId = new ArrayList<>();

        for(String cat : categoryId) {
            this.categoryId.add(db.collection("Category").document(cat));
        }
    }


}
