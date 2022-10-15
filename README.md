# express-ts-template


## Initial project structure

```
📦project
 ┣ 📂src
 ┃  ┣ 📂controllers
 ┃  ┃  ┣ 📜index.ts
 ┃  ┣ 📂entities
 ┃  ┃  ┣ 📜index.ts
 ┃  ┣ 📂enums
 ┃  ┃  ┣ 📜HttpHeaders.ts
 ┃  ┃  ┣ 📜HttpStatus.ts
 ┃  ┃  ┣ 📜index.ts
 ┃  ┣ 📂errors
 ┃  ┃  ┣ 📜BadRequestError.ts
 ┃  ┃  ┣ 📜CustomError.ts
 ┃  ┃  ┣ 📜DatabaseConnectionError.ts
 ┃  ┃  ┣ 📜ForbiddenError.ts
 ┃  ┃  ┣ 📜InternalServerError.ts
 ┃  ┃  ┣ 📜NotFoundError.ts
 ┃  ┃  ┣ 📜RequestValidationError.ts
 ┃  ┃  ┣ 📜ServiceUnavailableError.ts
 ┃  ┃  ┣ 📜UnauthorizedError.ts
 ┃  ┃  ┣ 📜index.ts
 ┃  ┣ 📂middlewares
 ┃  ┃  ┣ 📜ErrorHandler.ts
 ┃  ┃  ┣ 📜RequestValidator.ts
 ┃  ┃  ┣ 📜index.ts
 ┃  ┣ 📂routes
 ┃  ┃  ┣ 📜index.ts
 ┃  ┣ 📜app.ts
 ┃  ┣ 📜ormconfig.ts
 ┃  ┗ 📜index.ts
 ┣ 📂node_modules
 ┣ 📜.dockerignore
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜Dockerfile
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
 ```
