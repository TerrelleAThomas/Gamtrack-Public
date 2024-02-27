package edu.famu.gametrackcode.Model;

import com.google.cloud.firestore.DocumentReference;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class RestGameTrack extends BaseGameTrack {
    private DocumentReference GameId;
    private DocumentReference userId;


}
