git config user.name                            - Check username
git config --global user.name "Arun S"          - Set username

git config user.email
git config --global user.email "arun3050@gmail.com"

git init                                        - Initialize git to the folder

--------------------------------------------------------------------

git status

git add <filename>                              - Before Commit, add to Staging
git add .                                       - add all files to staging (before commit)

git commit -m "<Enter your message>"            - Commit the files

git branch                                      - Show all branch

git branch <branchName>                         - Create Branch
git branch TestServer

git branch -m <NewBranchName>                   - Rename Branch, From inside the branch

git branch -d <BranchName>                      - Delete Branch

git switch <ToBranchName>                   
git switch TestServer                           - Change current directory to desire branch

git switch main                                 - switch to Receiving branch to merge
git merge TestServer                            - Branch to be merged with.



-------------------------------------------------------------------------------

git remote -v

git remote add <name> <URL>
git remote add origin https://github.com/arunsathish/learning-git.git

git push <name> <branchName>
git push origin master

git clone https://github.com/arunsathish/learning-git.git

git pull origin main