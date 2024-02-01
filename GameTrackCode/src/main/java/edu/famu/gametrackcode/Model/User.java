package edu.famu.gametrackcode.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.security.Timestamp;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {

    @DocumentId

    private @Nullable String userId;
    private Timestamp createdAt;
    private String email;
    private String firstName;
    private String lastName;
    private String role;
    private String username;
    private boolean isActive;
    public boolean getIsActive() {
        return isActive;
    }


}
