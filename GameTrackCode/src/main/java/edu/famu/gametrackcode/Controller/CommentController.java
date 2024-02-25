package edu.famu.gametrackcode.Controller;

import edu.famu.gametrackcode.Model.Comment;
import edu.famu.gametrackcode.Services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        Comment createdComment = commentService.createComment(comment);
        return ResponseEntity.ok(createdComment);
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<Comment> getCommentById(@PathVariable String commentId) {
        Comment comment = commentService.getCommentById(commentId);
        return ResponseEntity.ok(comment);
    }

    @PutMapping("/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable String commentId, @RequestBody Comment comment) {
        Comment updatedComment = commentService.updateComment(commentId, comment);
        return ResponseEntity.ok(updatedComment);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable String commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.noContent().build();
    }
}
