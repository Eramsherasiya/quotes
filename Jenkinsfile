pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the code from GitHub
                checkout scm
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
                // Copy files to Jenkins workspace (or a web server)
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
