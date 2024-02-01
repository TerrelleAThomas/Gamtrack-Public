package edu.famu.gametrackcode.Model;

import jakarta.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {

    @DocumentId

    private @Nullable String userId;
    private  String Fullname






}
