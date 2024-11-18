#!/bin/bash

# 绑定 Git 用户名和邮箱
bind_git_user() {
    echo "Binding Git username and email..."
    read -p "Enter your Git username: " git_username
    read -p "Enter your Git email: " git_email

    git config --global user.name "$git_username"
    git config --global user.email "$git_email"

    echo "Git username and email have been set:"
    echo "Username: $git_username"
    echo "Email: $git_email"
}

# 初始化并推送到远程仓库
init_and_push_repo() {
    echo "Initializing and pushing local repository..."
    read -p "Enter the remote repository URL: " remote_url

    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin "$remote_url"
    git push -u origin main

    echo "Local repository initialized and pushed to $remote_url"
}

# 提交并推送更改
commit_and_push_changes() {
    echo "Committing and pushing changes..."
    git status
    read -p "Enter commit message: " commit_message
    git add .
    git commit -m "$commit_message"
    git push origin main

    echo "Changes pushed to remote repository."
}

# 检查远程仓库状态
check_remote() {
    if git remote -v | grep origin; then
        echo "Remote repository is already set:"
        git remote -v
    else
        echo "No remote repository found."
        read -p "Enter the remote repository URL: " remote_url
        git remote add origin "$remote_url"
        echo "Remote repository added."
    fi
}

# 拉取远程代码
pull_remote() {
    echo "Pulling latest code from remote repository..."
    git fetch origin
    git pull origin main
    echo "Local repository synchronized with remote."
}

# 显示主菜单
show_menu() {
    echo "Select a function to execute:"
    echo "1) Bind Git username and email"
    echo "2) Initialize and push repository to remote"
    echo "3) Commit and push changes"
    echo "4) Synchronize with remote repository"
    echo "5) Exit"
    read -p "Enter your choice (1-5): " choice
}

# 主循环
while true; do
    show_menu
    case $choice in
        1)
            bind_git_user
            ;;
        2)
            init_and_push_repo
            ;;
        3)
            commit_and_push_changes
            ;;
        4)
            check_remote
            pull_remote
            ;;
        5)
            echo "Exiting script. Goodbye!"
            break
            ;;
        *)
            echo "Invalid choice. Please try again."
            ;;
    esac
done
