# Notes

## npm

```
npm start
```

is equivalent for

```
npm run start
```

### Installing

```
npm install nodemon
```

adds a local dependency for nodemon

`-D` or `--save-dev` saves a local dependeny

```
npm -g install nodemon
```

installs nodemon globally for node.

## VSC

### Debugging

To lunch a debugger select a file and go to `Debug` > `Start Debuging`

To make the debugger restart after editing file use a specific config:

```json
"configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/index.js",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "console": "integratedTerminal"
    }
  ]
```

To read more go to: https://code.visualstudio.com/docs/nodejs/nodejs-debugging
