pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/Eramsherasiya/quotes.git'
        GIT_BRANCH = 'main'
        GIT_CREDENTIALS = 'github-token'   // Jenkins credential ID
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${GIT_BRANCH}",
                    url: "${GIT_REPO}",
                    credentialsId: "${GIT_CREDENTIALS}"
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed (static website: HTML, CSS, JS)'
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic checks...'
                sh 'ls -l'
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                echo '🚀 Deploying to GitHub Pages...'
                sh '''
                    git config user.name "Jenkins CI"
                    git config user.email "ci-bot@example.com"

                    # Create a temporary worktree for gh-pages
                    git fetch origin gh-pages || true
                    git worktree add /tmp/gh-pages gh-pages || git checkout --orphan gh-pages

                    # Copy site files
                    rm -rf /tmp/gh-pages/*
                    cp -r * /tmp/gh-pages/

                    cd /tmp/gh-pages
                    git add .
                    git commit -m "Deploy from Jenkins build $BUILD_NUMBER" || echo "No changes to commit"
                    git push origin gh-pages
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 Website deployed successfully to GitHub Pages!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
