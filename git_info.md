# GIT

What is Git - 

- Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.
- Techology indepedent i.e -> .net, nodejs
 
Why git tool only, why not svn?
- Makes branching and merging really easy
- Git tracks content rather than files
- Stashing is invaluable when you do "chaotic" development, 
  or simply want to fix a bug while you're still working on something else (on a different branch).

  
--------------------------------------------------------------


#### Download & Install: 

Official web site: https://git-scm.com/download/win

1. If you are using window operating system, download from above link and install. 

2. If you are using linux operating system, you can install using command,

   https://git-scm.com/book/en/v2/Getting-Started-Installing-Git


   
   
--------------------------------------------------------------



#### How to clone the git repository: 

#1. First approach - Using command line

command : git clone URL 
i.e     : ``` git clone git@11.11.11.11:/repo/test_git ```

#2. Second approach - Using command line

sourceTree -> clone -> Enter your repo URL -> okay



--------------------------------------------------------------



//This is create branch & checkout that created branch
1.  ``` git checkout -b branch-name ```

//To checkout branch 
2. git checkout branch-name

	in case if you want to push branch then immediate
	git push --set-upstream origin branch-name


//First we need to create branch, then we can see list branches
3. ``` git branch -a ```

//Delete the branch
4. ``` git branch -D branch-name ``` 

i.e

```
git branch develop
git checkout develop
```


--------------------------------------------------------------


//to view the changes
``` git diff ```

//to view the file name only where changes added
``` git diff --name-only ```



---------------------------------------------


#### Discard the changes:
```
git checkout .                    //to discard all changes
git checkout [some_dir|file.txt]  //to discard single file changes
```
---------------------------------------------


#### Add & commit file(s) to our branch:

git add filename
git commit -m "your message to commit"
git push origin branch-name

i.e
```
git add index.js
git commit -m "My First commit"
git push origin develop
```
--------------------------------------------------------


//Take lastest code
command: ``` git pull ```

// In case if you want to take lastest, and discard your changes.
command: git reset --hard origin/branch-name


-------------------------------------------------------------


#### Merge the branch:

- create some conflict using same line code changes 

Before merge, first we need to fetch.

command: ``` git fetch ```

1. Branch - Master
2. Branch - develop

You are in develop branch, you done your work. 
Let merge with master, 


command: git merge --no-ff origin/branch-name

--no-ff : Using --no-ff allows someone reviewing history to clearly see the branch you checked out to work on.

https://stackoverflow.com/questions/9069061/what-is-the-difference-between-git-merge-and-git-merge-no-ff



-----------------------------------------------------------------


#### Reach to specific commit number:

git log -3  //This will give commit details, we can copy the commit id as per need

``` git checkout <commit-id> ```


----------------------------------------------

git stash save "Message"

git stash list  //This will list stash with id, copy this id and paste when you need to reach at that place

//Before this, you need to commit your changes as per need.

git stash apply stash@(0)  // We reach at movement, but stash will not removed from list

// or    

git stash pop  //This will take last git stash id

//Check list again 


git stash drop stash-id   //If this is not required.

--------------------------------------------------------------------
#### we can add file that we do not want to upload in git repo, inside in .gitignore file.
.gitignore 
