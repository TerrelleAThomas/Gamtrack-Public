package edu.famu.gametrackcode.Utli;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc

public class RegistrationRequest {

    private String email;
    private String password;
    private @Nullable String displayName;



}
