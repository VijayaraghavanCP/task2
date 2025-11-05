# Code Review Report - Task2 Journey Booking System

## Critical Issues Identified (5 Key Points)

1. **Security Vulnerability:** Direct MySQL queries without parameterization expose the application to SQL injection attacks, particularly in user input handling sections.

2. **Architecture Concern:** Global variables usage for state management creates potential race conditions and makes the application non-scalable for concurrent users.

3. **Database Connection:** Missing connection pooling and proper error handling in MySQL database operations could lead to connection leaks and application crashes.

4. **Code Organization:** Single-file server architecture (app.js) lacks separation of concerns, making maintenance and testing difficult as the application grows.

5. **Error Handling:** Insufficient error handling throughout the application, particularly in database operations and form processing, reduces application reliability and user experience.