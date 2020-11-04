## How to start application server on reboot/restart ubuntu

#### User may create a startup-script by using PM2 auto-detection feature else he can even pass a particular initialization system name to the startup command. If a user is unaware of init system, then he may just execute pm2 startup command via command line without passing any arguments and let PM2 auto-detect.

```
 pm2 startup
```

#### Execute the generated command to daemonize PM2 and generate the system’s init script which is executed on boot. Execute the command that show as output of first above command

````
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
````

#### Start your application using pm2 
````
pm2 start index.js
````

#### Saving Processes to Restart on System Boot
The last simply involves saving the jobs to the start-up script and is done using the following command. 
````
pm2 save
````
