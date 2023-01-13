package zq.admin.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

   @Bean
    public SecurityFilterChain chain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(a -> a.requestMatchers("/login", "/process-login").permitAll().shouldFilterAllDispatcherTypes(false).requestMatchers("/**").authenticated())
                .httpBasic(Customizer.withDefaults())
                .formLogin().loginPage("/login").loginProcessingUrl("/process-login").defaultSuccessUrl("/")
                .and().csrf().disable().build();
    }
//    @Bean
//    public SecurityFilterChain chain(HttpSecurity http) throws Exception {
//        return http.authorizeHttpRequests(a -> a.anyRequest().permitAll())
//                .httpBasic(Customizer.withDefaults())
//                .formLogin().loginPage("/admin/login").loginProcessingUrl("/admin/process-login").defaultSuccessUrl("/admin")
//                .and().csrf().disable().build();
//    }

    @Bean
    @Autowired
    public AuthenticationManager authenticationManager(HttpSecurity http, UserDetailsService service) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(service).and().build();
    }


}
