package edu.famu.gametrackcode.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseDirectMessage {

    @DocumentId

    protected @Nullable String messageId;
    protected @Nullable Timestamp CreatedAt;
    protected String content;
}
