# Task2 Application Code Review Report

## Critical Issues Identified
**Performance**: Single persistent DB connection without pooling causes bottlenecks and potential connection exhaustion under load.
**Architecture**: Global variables (tn, uname, pu, dp) prevent horizontal scaling and create concurrency issues in multi-user scenarios.
**Security**: Missing authentication middleware, input validation, and SQL injection protection expose significant security vulnerabilities.
**Code Organization**: Monolithic structure with all logic in app.js violates separation of concerns and hampers maintainability.
**Resource Management**: Lack of proper connection lifecycle management and cleanup mechanisms leads to memory leaks and resource waste.