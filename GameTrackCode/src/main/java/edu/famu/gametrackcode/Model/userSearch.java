package edu.famu.gametrackcode.Model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class userSearch extends BaseUsersearch {

    private String userId;
    private List<String> resultUserId; // List of string references (user IDs)

    public userSearch(String userId, List<String> resultUserId) {
        super(); // Call the constructor of BaseUsersearch if it exists and requires to be called
        this.userId = userId;
        this.resultUserId = resultUserId;
    }

    // Other methods and logic can go here
}
