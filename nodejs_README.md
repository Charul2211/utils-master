## Nodejs 

#### set max memory - FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```sh
$ export NODE_OPTIONS=--max_old_space_size=3000
```

## Scaling 

- Horizontal scaling :  Add more machines  
	- Elastic load balance 

- Verical scaling : Increase capacity(CPU, RAM) of same machine

- Optimise: 

#1. Bandwidth : 1000 kb per page,100 qps per machine, 100 machine = 10gbbps 

Solution : compression

```
var app = express()
app.use(compression())
```
Here it take node server CPU cost to compress it, so it is better to do this at nginx. 

Reuest -> Elastic Load balance -> nginx -> PM2 -> Nodejs 

#2. Network profoling : 

- netstat - network tcp statistics 
- lsof - list of open file 

- keep-alive header : request to nodejs  

```
Object.assign(header, {
'compress': true
'connection': 'keep-alive',
'keep-alive': 'timeout=200'
})
```

- connection polling: Request from nodejs to other
 
```
const http = require('http');
fetch(url, {
 agent: new http.Agent({
	keepAlive: true,
	maxSockets: 24
 })
})
```

#3. Disk 

- disk operation should not be include in app.use 
- logs should not be in sync mode 

