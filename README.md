# express-ts-template

To start the project
 - Inside a development environment(watch mode)
```sh
$ npm run dev
```
 - Build the project and run in production
```sh
$ npm run build
$ npm start
```

## Simple guidelines
Remove or change the License, Code of conduct and Contributing.md (and maybe readme too) before you start using this template

## Initial project structure

### The home directory
```
📦project
 ┣ 📂src
 ┣ 📜.dockerignore
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜Dockerfile
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
 ```
- `package.json` & `package-lock.json` contains the information about the npm metadata of the project like depencies, version, author, runnable scripts etc.
- `tsconfig.json` contains the metadata about the typescript configuration for the project.
- `.eslintrc.json` contains the data about linting rules while using eslint.
- `.gitignore` describes which files to ignore when pushing the files to git.
- `Dockerfile` can be used to get a production ready container image of the project.
- `.dockerignore` tells which files to ignore while building the docker image.
- The `src` directory contains the source code of the project.

### The source directory

```
📂src
 ┣ 📂controllers
 ┣ 📂entities
 ┣ 📂enums
 ┣ 📂errors
 ┣ 📂middlewares
 ┣ 📂routes
 ┣ 📜app.ts
 ┣ 📜ormconfig.ts
 ┗ 📜index.ts
```
- `app.ts` contains the script to create the server. It exports an object named `app` that connects to all the routes and middlewares.
- `ormconfig.ts` is the configuration for typeorm. It exports a Datasource object that can be used to gnerate repositories for different Entities.
- `index.ts` contains data about connecting the server to a port, environment variables, etc.

### The enums directory

```
📂enums
 ┣ 📜HttpHeaders.ts
 ┣ 📜HttpStatus.ts
 ┗ 📜index.ts
```
- `HttpHeaders` contains some useful headers as enum. You may add more as per your project needs.
- `HttpStatus` contains some statuscodes returned by the server on certain responses.
- All the enums should be exported using the `index.ts` file. E.g. for a new file created `MyEnum.ts`, in the index.ts a new line should be added i.e. `export * from MyEnum.ts`

### The errors
```
📂errors
 ┣ 📜BadRequestError.ts
 ┣ 📜CustomError.ts
 ┣ 📜DatabaseConnectionError.ts
 ┣ 📜ForbiddenError.ts
 ┣ 📜InternalServerError.ts
 ┣ 📜NotFoundError.ts
 ┣ 📜RequestValidationError.ts
 ┣ 📜ServiceUnavailableError.ts
 ┣ 📜UnauthorizedError.ts
 ┗ 📜index.ts
```
- `CustomError.ts` exports an abstract class that extends the `Error` class. All the other files(except index.ts) exports an error class. All the newly created error should extend the `CustomError` class
- All the errors should be exported using the `index.ts` file. E.g. for a new file created `MyError.ts`, in the index.ts a new line should be added i.e. `export * from MyError.ts`

### The middlewares
```
📂middleware
 ┣ 📜ErrorHandler.ts
 ┣ 📜RequestValidator.ts
 ┗ 📜index.ts
```
Middlewares can be used to refactor the repeatative code at the starting of some routes. Especially useful for request validation, authorization etc.
- `ErrorHandler.ts` is used in the `app.ts` file inside the `src` folder. It basically a global error handler and helps to send response in a certain format.
- `RequestValidator.ts` is used to run validations on the requests.
- Similar to error and enums directory, here also all the middlewares should be exported from the index.ts file also.

### Entities
```
📂entities
 ┗ 📜index.ts
```
- Entities are database models. One object defines one row in that entity(table).
- While creating new entity, make sure that is exported from `index.ts` and also consumed in the `ormconfig.ts` in the constructor of the datasource. 
```ts
export const AppDataSource = new DataSource({
    ...
    entities: [UserEntity]
    ...
})
```
**To share some insights we have created the UserEntity class**

### Routes
```
📂routes
 ┗ 📜index.ts
```
- Routes are the Rest endpoints definitions along which uses certain controller(s) and middlewares with it according to specify the business logic and validations.
### Controllers
```
📂controllers
 ┗ 📜index.ts
```
- Controllers are plain business logics in the project. Routes consumes these controllers to map them to certain endpoints.

**To give an example how these routes and controllers are structured we have created Authentication routes as well. If you don't need to ue them, please delete those controllers and routes.**
