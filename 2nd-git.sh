#!/bin/bash

# 1. 检查本地仓库状态  
echo "Checking the status of the local repository..."
git status

# 2. 添加更改到 Git 仓库  
echo "Adding changes to the Git repository..."
git add .

# 3. 创建新的提交  
echo "Creating a new commit..."
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"

# 4. 推送更改到远程仓库  
echo "Pushing changes to the remote repository..."
git push origin main

echo "Done!"
