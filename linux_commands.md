#### Get version inforation ubuntu
> lsb_release -a

#### Check memory (RAM)
> free -m 
> free -g

#### Check memory (HDD)
> df -h

#### Get pid of nodejs 
> ps aux | grep node

#### Get only pid of nodejs
> ps aux | grep node | awk '{print $2}'

#### Kill all node process
> sudo killall node

#### Kill specific process using pid
> sudo kill -9 PID

#### list of process listen on specific port (5000)
> sudo lsof -i :5000

#### Search word in project/server
>  grep -r "6380" home/ubuntu/project/

#### List partitions linux/ubuntu
>  lsblk

#### Open file in vi editor 
>  VISUAL=vi crontab -e
