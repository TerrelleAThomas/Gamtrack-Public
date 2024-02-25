package edu.famu.gametrackcode.Controller;

import edu.famu.gametrackcode.Model.userSearch;
import edu.famu.gametrackcode.Services.UserSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/usersearch")
public class userSearchController {
    private final UserSearchService userSearchService;

    @Autowired
    public userSearchController(UserSearchService userSearchService) {
        this.userSearchService = userSearchService;
    }

    @PostMapping
    public ResponseEntity<?> createUserSearch(@RequestBody userSearch userSearch) {
        try {
            userSearch createdUserSearch = userSearchService.createUserSearch(userSearch);
            return ResponseEntity.ok(createdUserSearch);
        } catch (ExecutionException | InterruptedException e) {
            return ResponseEntity.status(500).body("Error creating user search");
        }
    }

    @GetMapping("/{searchId}")
    public ResponseEntity<?> getUserSearch(@PathVariable String searchId) {
        try {
            userSearch userSearch = userSearchService.getUserSearch(searchId);
            if (userSearch != null) {
                return ResponseEntity.ok(userSearch);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (ExecutionException | InterruptedException e) {
            return ResponseEntity.status(500).body("Error retrieving user search");
        }
    }

    // Additional CRUD endpoints as needed
}

