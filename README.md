# express-ts-template


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
