package com.example.ShelfSaver;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

/* @SpringBootApplication is a convenience annotation that adds the following:
		@Configuration: Tags the class as a source of bean definitions for the application context
		@EnableAutoConfiguration: Tells Spring Boot to start adding beans based on claspath settings, other beans, and varioius property settings
		@ComponentScan: Tells Spring Boot to look for other components, configurations, and services in the com/example package, letting it find the controllers
*/ 
@SpringBootApplication
public class ShelfSaverApplication {

	/**
	 * Uses Spring Boot's SpringApplication.run() method to launch an application
	 */
	public static void main(String[] args) {
		SpringApplication.run(ShelfSaverApplication.class, args);
	}

	/**
	 * Runs on start up
	 */
	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			System.out.println("Running the ShelfSaver Java Application...");
		};
	}

}
