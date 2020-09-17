## How to run locally

### `yarn`
### `yarn start`

Change api endpoind file: 'src/app/actions.js line 12 into 'localhost'
provide mongoDB config in .env file in root directory:
DB_PROTOCOL=mongodb+srv://
DB_USER=
DB_PASSWORD=
DB_HOST=cluster.xxx.mongodb.net
DB_CLUSTER=

Online example: http://www.adrianpiwowarczyk.com:8015/

Test with credentials: username/password or test/test or admin/123, registration works too

Client: [http://localhost:8015](http://localhost:8015)
Backend: [http://localhost:8016](http://localhost:8016)

Endpoints:<br>
http://localhost:8016/api/login (POST)<br>
http://localhost:8016/api/register (POST)

Tools:<br>
create-react-app to bootstrap project<br>
redux for state management<br>
jest & enzyme for testing<br>
mongoDB for database<br>
monk for mongoDB api<br>
dotenv for database configuration<br>
express for backend<br>
express-validator for backend form validation<br>
semantic-ui for frontend components<br>
concurrently & nodemon as development tools
