pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/html"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Eramsherasiya/quotes.git',
                    credentialsId: 'github-token'   // <-- create this in Jenkins credentials
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
                // rsync to deploy safely
                sh "sudo rsync -av --delete . ${DEPLOY_DIR}/"
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
