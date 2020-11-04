
Video : https://www.youtube.com/watch?v=OsHvD6EUAWM

Slide : https://www.slideshare.net/secret/gUdGDEiOIFdGhE


------------

#### cluster
- using pm2

####  compression

```javascript
var app = express() 
app.use(compression)  //again it load on nodejs server as main thread busy for compression.

```
It is better to use  **nginx**

#### conection pooling 

- This allow to reuse the connection.

```javascript
const http = require('http');
const keepAliveAgent = new http.Agent({ keepAlive: true, maxSockets : 24 });
options.agent = keepAliveAgent;
http.request(options, onResponseCallback);
```

#### set ulimit 
- max memory allocation for node proecess
- file size limit 

####  disk 
- Log rotation
- i/o operation should not in app.use('/')

####  memory profiling
- Performance panel of chrome tool

#### cpu profiling

```
node --prof app.js
```
https://blog.ghaiklor.com/profiling-nodejs-applications-1609b77afe4e

- npm package : 0x - https://www.npmjs.com/package/0x
