package edu.famu.gametrackcode.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;

public class Post {
    @DocumentId
    private String PostId;
    private String Title;
    private String content;
    private Timestamp creationDate;
    private Timestamp UpdateDate;
    private Timestamp DeleteDate;
    private String gameId;
    private String userId;

    // Constructors
    public Post() {
        // Firestore requires the existence of a no-argument constructor
    }

    public Post(String PostId, String Title, String content, Timestamp creationDate,
                Timestamp UpdateDate, Timestamp DeleteDate, String gameId, String userId) {
        this.PostId = PostId;
        this.Title = Title;
        this.content = content;
        this.creationDate = creationDate;
        this.UpdateDate = UpdateDate;
        this.DeleteDate = DeleteDate;
        this.gameId = gameId;
        this.userId = userId;
    }

    // Getters and setters
    public String getPostId() {
        return PostId;
    }

    public void setPostId(String postId) {
        PostId = postId;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Timestamp creationDate) {
        this.creationDate = creationDate;
    }

    public Timestamp getUpdateDate() {
        return UpdateDate;
    }

    public void setUpdateDate(Timestamp updateDate) {
        UpdateDate = updateDate;
    }

    public Timestamp getDeleteDate() {
        return DeleteDate;
    }

    public void setDeleteDate(Timestamp deleteDate) {
        DeleteDate = deleteDate;
    }

    public String getGameId() {
        return gameId;
    }

    public void setGameId(String gameId) {
        this.gameId = gameId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    // Additional methods like toString(), equals(), and hashCode() if necessary
}

