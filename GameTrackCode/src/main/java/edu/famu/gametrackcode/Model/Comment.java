package edu.famu.gametrackcode.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;

public class Comment {
    @DocumentId
    private String commentId;
    private String content;
    private String postId;
    private String userId;
    private Timestamp creationDate;
    private Timestamp updateDate;
    private Timestamp deleteDate;

    // Constructors
    public Comment() {
        // Firestore requires the existence of a no-argument constructor
    }

    // Constructor with all fields
    public Comment(String commentId, String content, String postId, String userId,
                   Timestamp creationDate, Timestamp updateDate, Timestamp deleteDate) {
        this.commentId = commentId;
        this.content = content;
        this.postId = postId;
        this.userId = userId;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.deleteDate = deleteDate;
    }

    // Getters and setters
    // ... (generate getters and setters for all fields)
}
