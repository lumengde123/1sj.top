#!/bin/bash

# 定义远程仓库 URL
remote_url="https://github.com/lumengde123/1sj.top.git"

# 1. 初始化本地 Git 仓库  
echo "Initializing local Git repository..."
git init  

# 2. 添加所有文件到 Git 仓库  
echo "Adding all files to the Git repository..."
git add .  

# 3. 创建初始提交  
echo "Creating initial commit..."
git commit -m "Initial commit"  

# 4. 切换分支为 main
echo "Switching branch to main..."
git branch -M main

# 5. 添加远程仓库  
echo "Adding remote repository..."
git remote add origin "$remote_url"

# 6. 推送本地代码到远程仓库  
echo "Pushing local code to remote repository..."
git push -u origin main

echo "Done!"
