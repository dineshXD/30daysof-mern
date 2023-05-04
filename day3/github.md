Learn GIT AND GITHUB
git -> version control system basically maintaining the history of ur project but where? In github
github -> allows us to host git repository online so other people can share look, contribute basically service to manage git, e.g. github, bitbucket etc. github is one of the most popular.
repository -> basically just a folder where all the changed saved.

Basic commands of git
1)git init => initialize the empty git repository where all the history saved.
2)git status => git status is used to check what changes are not in the history of your project
3)git add => add the untracked files to staging area e.g. git add . for all the files, git add name.txt for individual files
4)git commit => commit the changes e.g. git commit -m "commited" -m for provide message
5)git restore => remove the added files which are added through git add cmd e.g git restore --staged filename.txt now u can check using git status
6)git log => history of ur project or commits
7)git reset => this cmd is used to get back to previous version of code or repository or removing a commit from the history of project. every commit has some id so basically using this id we can use this id to remove all the commits that done after that commit or all the id above commits will be removed.
e.g. git reset id
8)git stash => if u don't want to commit the changes also don't want to lose that changes then git stash is used it will reverse back to commited changes.
9)git stash pop => it will retrive the all the uncommited changes which we send the backstage using git stash
10)git stash clear => git stash saved the changes in somewhare but using this all the saved changes also deleted so u cannot retrive those now
11)git remote add origin repourl => we have all the commits in local now we want to push those changes to local to remote server like github so this cmd is used to connect with github repository that we made. origin is just a name to save repourl
12)git push url branchname => this cmd will push the local changes to remote repository e.g. git push origin(url saved with name origin) master(branchname)
13)git branch branchname => to create new branch
14)git checkout branchname => change the branch or switch the branch like from main to master etc. HEAD pointer points to branch so after changing the branch HEAD will point to that branch
15)git merge branchname => to merge the branches main branch
16)git fork => u cannot make directly to any one's account u have to fork it u can do whatever u want to do in ur account after forking
17)git clone => after forking use this cmd to work with that project in local environment e.g. git clone projecturl
18)git remote add upstream repourl => upstream means from where u from forked the repo so origin will be personal and upstream will be forked repo link
19)git rebase -i commitId => it will use to merge the all commits into single -i flag is for interactive then u can pick or sqaush so change pick to s commitid "message" so this will be merged into single commit whichever above this commits
why use different branches?
main branch used by people so that's why never commit changes directly to main branch so if our code contains some error so user will not be affected by this changes if we have separate branch. one pull request means one branch so whenever u make any commit or add feature in same branch it is difficult to review like 10 or 100 feature from single branch and discuss or review those feature. if u want to open different pull request but one branch can create only one pull request that's why different branch required

what is pull request?
u made the change in ur forked branch now u want to merge so request the changes to merge in main branch (real owner of repo) so this changes also other people can also see that so they will give some suggestions they will run some tests and some changes if required and last owner of repo will merge to main branch

need to force push?
whenever online repository contains commit that ur local repository doesn't then u need to force push

making forked project even with main project
1)git fetch --all --prune => --prune means that are deleted also fetched this will fetch all the changes
2)git reset --hard upstream/main
3)git push origin main0+1567

another option
1)git pull upstream main
2)git push origin main

merge conflicts need to be resolved manually
