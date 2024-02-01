package edu.famu.gametrackcode.Model;


import com.google.cloud.firestore.annotation.DocumentId;
import com.google.protobuf.util.Timestamps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.security.Timestamp;
import java.text.ParseException;
import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class BasePost {
    @DocumentId
    protected @Nullable String postId;
    protected String title;
    protected String content;
    protected String summary;
    protected String slug;
    protected String metaTitle;
    protected boolean published;
    protected boolean allowComments;
    protected @Nullable Timestamp createAt;
    protected @Nullable Timestamp publishedAt;
    protected ArrayList<String> tags;

    public boolean getPublished() {
        return published;
    }

    public boolean getAllowComments() {
        return allowComments;
    }

    public void setCreatedAt(String createdAt) throws ParseException {
        this.createAt = Timestamp.fromProto(Timestamps.parse(createdAt));
    }

    public void setPublishedAt(String publishedAt) throws ParseException {
        this.publishedAt = Timestamp.fromProto(Timestamps.parse(publishedAt));
    }