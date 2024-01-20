package edu.famu.gametrackcode.Security;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collections;


public class FirebaseAuthenticationProvider implements AuthenticationProvider {
    public FirebaseAuthenticationProvider(FirebaseAuth firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
    }

    public FirebaseAuthenticationToken authenticate(Authentication authentication) {
        String token = (String) authentication.getCredentials();
        try {
            FirebaseToken decodedToken = firebaseAuth.verifyIdToken(token);
            String uid = decodedToken.getUid();
            UserDetails userDetails = User.builder()
                    .username(uid)
                    .password("")
                    .authorities(Collections.singleton(new SimpleGrantedAuthority("USER")))
                    .build();
            return new FirebaseAuthenticationToken(userDetails, token);
        } catch (FirebaseAuthException e) {
            throw new UsernameNotFoundException("User not found");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return FirebaseAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
