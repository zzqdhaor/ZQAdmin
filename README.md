# ZQAdmin
ZQAdmin enables you to access your server's files and terminal easily via browser.  Powered by SpringBoot and Vue.js.
## How to use:
1. Clone this repo.
2. Config it.
3. Build the frontend:
``` 
cd frontend
npm install
npm run build
```
4. While build is done, copy files from /frontend/dist to /backend/src/main/resources/static.
5. Build the backend:
```
cd backend
mvn package
```
6. Once mvn is finished, you can find the .jar file in /backend/target.
7. Run it!
```
java -jar ${filename}.jar
```

## How to config:
The config file is located at /backend/application.properties.
The "zq.admin.ssh-username" is required. It is same to your server's ssh username.
While this done, you can continue to build.

## Screenshots:
![Login Page](/screenshots/1.png)
![Status](/screenshots/2.png)
![Files](/screenshots/3.png)
![Terminal](/screenshots/4.png)
