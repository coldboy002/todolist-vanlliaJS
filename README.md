## TODOLIST APP
## Feature:
- add todo
- remove todo
- edit todo
## Getting started
### Json-server:
1. Install Node.js
2. Install JSON Server
```md
npm install -g json-server
```
3. Create a db.json file with some data
```json
{
  "todos": [
    {
      "id": 1,
      "content": "Go to bed"
    },
    {
      "id": 2,
      "content": "Watch TV"
    },
    {
      "id": 3,
      "content": "Read book"
    }
  ]
}
```
4. Start JSON Server
```md
json-server --watch db.json
```

### browsersync 
1. Install Node.js
2. Install Browsersync
```md
npm install -g browser-sync
```
3. Start Browsersync
```md
browser-sync start --server --files "*.css"
```