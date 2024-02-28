package edu.famu.gametrackcode.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.protobuf.util.Timestamps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.text.ParseException;

import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseComment {

    @DocumentId

    protected @Nullable String CommentId;
    protected @Nullable Timestamp CreationDate;
    protected @Nullable Timestamp DeleteDate;
    protected @Nullable Timestamp UpdateDate;
    protected String content;



}

