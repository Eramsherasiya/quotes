stage('Deploy to GitHub Pages') {
    steps {
        echo "🚀 Deploying to GitHub Pages..."
        withCredentials([usernamePassword(credentialsId: 'github-token', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS')]) {
            sh """
            git config user.name "Jenkins CI"
            git config user.email "ci-bot@example.com"
            git remote set-url origin https://$GIT_USER:$GIT_PASS@github.com/Eramsherasiya/quotes.git

            # Remove old folder if exists
            rm -rf /tmp/gh-pages

            # Force add worktree to avoid missing worktree error
            git worktree add -f /tmp/gh-pages gh-pages

            cp -r Jenkinsfile index.html script.js style.css test.txt /tmp/gh-pages/
            cd /tmp/gh-pages

            git add .
            git commit -m "Deploy from Jenkins build ${BUILD_NUMBER}" || echo "No changes to commit"
            git push origin gh-pages
            """
        }
    }
}
