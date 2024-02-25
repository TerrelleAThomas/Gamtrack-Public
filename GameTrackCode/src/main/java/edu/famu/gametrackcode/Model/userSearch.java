package edu.famu.gametrackcode.Model;


import com.google.cloud.firestore.annotation.DocumentId;

import java.util.List;

public class userSearch {
    @DocumentId
    private String searchId;
    private String userId;
    private List<String> resultUserIds; // Assuming this is a list of user document references

    // Constructors
    public userSearch() {
        // Firestore requires the existence of a no-argument constructor
    }

    public userSearch(String searchId, String userId, List<String> resultUserIds) {
        this.searchId = searchId;
        this.userId = userId;
        this.resultUserIds = resultUserIds;
    }

    // Getters and setters
    public String getSearchId() {
        return searchId;
    }

    public void setSearchId(String searchId) {
        this.searchId = searchId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<String> getResultUserIds() {
        return resultUserIds;
    }

    public void setResultUserIds(List<String> resultUserIds) {
        this.resultUserIds = resultUserIds;
    }

    // Additional methods like toString(), equals(), and hashCode() if necessary
}

