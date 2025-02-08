package com.example.ShelfSaver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// RestController flag indicates that this class is ready for use by Spring MVC to handle web requests
// It combines @Controller and @ResponseBody, 2 annotations that result in web requests returning data rather than a view
@RestController
public class ShelfSaverController {
    // Map '/' to the index() method
    @GetMapping("/")
    /**
     * When invoked from a browser or by using curl on the command line, the method returns pure text
     * @return String to be returned when the controller is invoked from browser or the command line
     */
    public String index() {
        return "Hello, World!\n";
    }
}
