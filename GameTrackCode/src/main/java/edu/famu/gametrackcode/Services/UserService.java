package edu.famu.gametrackcode.Services;


import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import edu.famu.gametrackcode.Model.User;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {
    private final Firestore db;

    public UserService(Firestore db) {
        this.db = db;
    }

    private boolean doesFieldExist(String field) throws ExecutionException, InterruptedException {
        //field can not be empty
        if (field.isEmpty())
            return false;
        //get reference
        CollectionReference collectionReference = db.collection("Users");
        ApiFuture<QuerySnapshot> future = collectionReference.limit(1).get();
        QuerySnapshot querySnapshot = future.get();

        //return if no document
        if (querySnapshot.isEmpty()) {
            return false;
        }
        //
        DocumentSnapshot docSnap = querySnapshot.getDocuments().get(0);
        return docSnap.contains(field);
    }

    public ArrayList<User> getUsers(String searchField, String value) throws ExecutionException, InterruptedException {
        //get query of users
        Query query = db.collection("Users");
        //apply
        if (doesFieldExist(searchField)) {
            query = query.whereGreaterThanOrEqualTo(searchField, value)
                    .whereLessThan(searchField, value + "\uf8ff");
        }
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        ArrayList<User> users = new ArrayList<>();
        for (QueryDocumentSnapshot doc : documents)
            users.add(doc.toObject(User.class));
        return users;
    }

    public User getUserById(String id) throws ExecutionException, InterruptedException {
        if (id == null || id.isEmpty()) {
            throw new IllegalArgumentException("User id must be a non-empty string");
        }
        DocumentReference doc = db.collection("Users").document(id);
        ApiFuture<DocumentSnapshot> future = doc.get();
        return future.get().toObject(User.class);
    }

    public String createUser(User user) throws ExecutionException, InterruptedException {
        user.setCreatedAt(Timestamp.now());
        //user.setLastLogin(Timestamp.now());

        ApiFuture<DocumentReference> future = db.collection("Users").add(user);
        DocumentReference userRef = future.get();

        return userRef.getId();
    }

    public void updateUser(String id, Map<String, Object> updateValues) {
        String[] allowed = {"email", "firstName", "lastName","isActive"};
        List<String> list = Arrays.asList(allowed);
        Map<String, Object> formattedValues = new HashMap<>();

        for (Map.Entry<String, Object> entry : updateValues.entrySet()) {
            String key = entry.getKey();
            if (list.contains(key))
                formattedValues.put(key, entry.getValue());
        }

        DocumentReference userDoc = db.collection("Users").document(id);
        userDoc.update(formattedValues);
    }

    public void deleteUser(String userId) {
        DocumentReference userDoc = db.collection("Users").document(userId);
        userDoc.delete();
    }

    public DocumentReference getUserDocByEmail(String email) throws ExecutionException, InterruptedException {
        CollectionReference usersCollection = db.collection("Users");
        Query query = usersCollection.whereEqualTo("email", email).limit(1);
        ApiFuture<QuerySnapshot> future = query.get();
        try {
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            if (!documents.isEmpty()) {
                System.out.println("not empty!");
                return documents.get(0).getReference();
            } else {
                System.out.println("WTF!");
            }
        } catch (InterruptedException | ExecutionException e) {
            // Log and handle the exception appropriately
            e.printStackTrace();
        }
        return null; // User not found
    }

    public String getUserIdByEmail(String email) throws ExecutionException, InterruptedException {
        CollectionReference usersCollection = db.collection("Users");
        Query query = usersCollection.whereEqualTo("email", email).limit(1);
        ApiFuture<QuerySnapshot> future = query.get();
        return future.get().getDocuments().get(0).getId();
    }
    public User getUserByEmail(String email) throws ExecutionException, InterruptedException {
        CollectionReference usersCollection = db.collection("Users");
        Query query = usersCollection.whereEqualTo("email", email).limit(1);
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        if (!documents.isEmpty()) {
            // Assuming email is unique, there should be at most one user
            return documents.get(0).toObject(User.class);
        }
        return null; // User not found
    }
}
