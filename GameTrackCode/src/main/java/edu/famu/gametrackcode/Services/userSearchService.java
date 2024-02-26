package edu.famu.gametrackcode.Services;

import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.WriteResult;
import edu.famu.gametrackcode.Model.userSearch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class UserSearchService {
    private final Firestore db;

    @Autowired
    public UserSearchService(Firestore db) {
        this.db = db;
    }

    public userSearch createUserSearch(userSearch userSearch) throws ExecutionException, InterruptedException {
        CollectionReference userSearches = db.collection("userSearches");
        WriteResult result = userSearches.document().create(userSearch).get();
        return userSearch; // Return the UserSearch with the ID generated by Firestore
    }

    public userSearch getUserSearch(String searchId) throws ExecutionException, InterruptedException {
        DocumentSnapshot documentSnapshot = db.collection("userSearches").document(searchId).get().get();
        return documentSnapshot.toObject(userSearch.class);
    }

    // Additional CRUD methods as needed
}
