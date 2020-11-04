Create folder named script, and cd to that 

```sh
$ mkdir script 
$ cd script
```

Create script named autostart.sh using vi editor

```sh
$ vi autostart.sh
```

Add below code that start node application server

```sh
#!/bin/bash
sudo forever start /home/ubuntu/application/app.js
```

Give permission to created script 

```sh
$ sudo chmod 777 autostart.sh
$ sudo chown root:root autostart.sh
```

Add this created script to rc.local, open rc.local file

```sh
$ vi /etc/rc.local 
```

Add below code before exit 0 in rc.local 

```sh
sh /home/ubuntu/autostart.sh
```

Test script is working or not using below command 

```sh 
$ sudo reboot
```
