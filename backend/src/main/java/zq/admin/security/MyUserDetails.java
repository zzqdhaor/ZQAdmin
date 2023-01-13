package zq.admin.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import zq.admin.jdbc.Mapper;

import java.util.Collection;
import java.util.List;

public class MyUserDetails implements UserDetails {
    private final String username;

    private final Mapper mapper;

    private String password;

    public MyUserDetails(String username, Mapper mapper) {
        this.username = username;
        this.mapper = mapper;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getPassword() {
        if (password == null) {
            password = mapper.selectPassword(username);
        }
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
