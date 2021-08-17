Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('Test') {
            steps {
                sh 'npm i && npm run test'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}