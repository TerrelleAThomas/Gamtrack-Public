package edu.famu.gametrackcode.Model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BasePost {
    protected @Nullable String PostId;
    protected @Nullable Timestamp DeleteDate;
    protected  String Title;
    protected  @Nullable Timestamp UpdateDate;
    protected String content;
    protected @Nullable Timestamp creationDate;
}
