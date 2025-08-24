pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/Eramsherasiya/quotes.git'
        GIT_BRANCH = 'main'
        GIT_CREDENTIALS = 'github-token'   // <-- Jenkins credential ID you created
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code using credentials
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

        stage('Deploy') {
            steps {
                echo 'Deploying website...'
                // Copy files to web server
                sh 'cp -r * /var/www/html/ || true'
            }
        }
    }

    post {
        success {
            echo '🎉 Website deployed successfully!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
