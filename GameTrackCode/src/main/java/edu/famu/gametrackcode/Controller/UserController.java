package edu.famu.gametrackcode.Controller;

import com.google.api.client.util.Value;
import edu.famu.gametrackcode.Model.User;
import edu.famu.gametrackcode.Services.UserService;
import edu.famu.gametrackcode.Utli.ErrorMessage;
import edu.famu.gametrackcode.Utli.ResponseWrapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Value("${response.status}")
    private int statusCode;
    @Value("${response.name}")
    private String name;
    private Object payload;
    private ResponseWrapper response;
    private static final String CLASS_NAME = "UsersService";
    public UserController(UserService userService) {
        this.userService = userService;
        payload = null;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String,Object>> getUsers(
            @RequestParam(name="field",required = false, defaultValue = "") String field,
            @RequestParam(name="value",required = false, defaultValue = "") String value)
    {
        try {
            payload = userService.getUsers(field,value);
            statusCode = 200;
            name = "users";
        } catch (ExecutionException | InterruptedException e) {
            payload = new ErrorMessage("Cannot fetch users from database", CLASS_NAME,
                    e.getStackTrace().toString());
        }

        response = new ResponseWrapper(statusCode, name, payload);
        return response.getResponse();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Map<String,Object>> getUser(@PathVariable(name = "userId") String id){
        payload = new User();
        try {
            payload = userService.getUserById(id);
            statusCode = 200;
            name = "user";
        } catch (ExecutionException | InterruptedException e) {
            payload = new ErrorMessage("Cannot fetch user with id" + id + " from database", CLASS_NAME,
                    e.getStackTrace().toString());
        }
        response = new ResponseWrapper(statusCode, name, payload);
        return response.getResponse();
    }
    @GetMapping("/email/{email}")
    public ResponseEntity<Object> getUserByEmail(@PathVariable String email) {
        try {
            User user = userService.getUserByEmail(email);
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            // Log the exception for debugging purposes
            logger.error("Error while fetching user details by email", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching user details by email");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable(name="id") String id, @RequestBody Map<String,Object> updateValues){
        try {
            userService.updateUser(id, updateValues);
            statusCode = 201;
            return ResponseEntity.ok("Updated");
        } catch (Exception e){
            logger.error("Error updating user");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating user");
        }
    }
}
