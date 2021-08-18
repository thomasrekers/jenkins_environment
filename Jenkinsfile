pipeline {
    agent { docker { image 'node:14-alpine' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm i -g npm-audit-html && npm audit --json | npm-audit-html'
            }
        }
    }
    post {
        always {
            junit 'npm-audit.html'
        }
    }
}