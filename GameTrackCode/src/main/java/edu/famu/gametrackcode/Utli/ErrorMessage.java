package edu.famu.gametrackcode.Utli;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class ErrorMessage {
    private String message, className, stackTrace;
}
