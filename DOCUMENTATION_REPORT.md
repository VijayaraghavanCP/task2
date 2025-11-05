# Task2 - Journey Booking Management System Documentation

## Project Overview
Task2 is a Node.js web application designed for journey/booking management with a simple form-based interface for ticket booking and display functionality.

## Architecture & Component Analysis
**Framework Stack:** Express.js + EJS templating + MySQL database integration
**Structure Pattern:** Simple MVC-like architecture with direct database coupling and global state management through application variables.

## Key Components & Data Flow
1. **app.js (Main Server)** → Handles routing, database operations, and form processing with global variables for state persistence
2. **Frontend Layer** → Static HTML forms (homepage.html) collect user input which flows through Express middleware to MySQL database operations and EJS template rendering (datapage.ejs)

## Dependencies & Configuration
Core dependencies include Express.js 4.18.1 for web framework, MySQL 2.18.1 for database connectivity, EJS 3.1.8 for server-side templating, and body-parser 1.20.0 for form data processing with nodemon for development workflow.