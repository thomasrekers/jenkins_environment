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
                sh 'npm i -g npm-audit-html && npm audit --json | npm-audit-html && node test.js'

                // publishHTML target: [
                //     allowMissing: true,
                //     alwaysLinkToLastBuild: true,
                //     keepAll: true,
                //     reportDir: 'coverage',
                //     reportFiles: 'npm-audit.html',
                //     reportName: 'RCov Report'
                // ]
            }
        }
    }
    post {
        always {
            junit 'test-report.xml'
        }
    }
}