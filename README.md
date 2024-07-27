# 推送到github：  
    # 1. 配置 Git 账户信息  
    git config --global user.name "你的用户名"  
    git config --global user.email "你的邮箱"  
  
    # 2. 进入项目目录  
    cd /path/to/your/project  
  
    # 3. 初始化本地 Git 仓库  
    git init  
  
    # 4. 添加所有文件到 Git 仓库  
    git add .  
  
    # 5. 创建初始提交  
    git commit -m "Initial commit"  
  
    # 6. 添加远程仓库  
    git remote add origin https://github.com/lumengde123/1sj.top.git  
  
    # 7. 推送本地代码到远程仓库  
    git branch -M main  
    git push -u origin main  


  
# 后续推送：  
    # 1. 检查本地仓库状态  
    git status  
  
    # 2. 添加更改到 Git 仓库  
    git add .  
  
    # 3. 创建新的提交  
    git commit -m "描述你的更改内容"  
  
    # 4. 推送更改到远程仓库  
    git push origin main  
  
# 改变仓库名后本地需要修改  
    # 1. 查看当前远程仓库 URL  
    git remote -v  
  
    # 2. 更新远程仓库 URL  
    git remote set-url origin https://github.com/yourusername/new-repo-name.git  
  
    # 3. 验证更新  
    git remote -v  
  
    # 4. 正常进行 push/pull 操作  
    git pull origin main  
    git push origin main  