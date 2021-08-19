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
                sh 'npm i -g npm-audit-html'

                script {
                    def status_code = sh script: 'npm audit', returnStatus: true
                    if (status_code == 0) {
                        println('No critical vulnerabilities!')
                    } else {
                        println('Failed because of critical npm vulnerabilities!')
                        sh script: 'exit 1'
                    }
                }
            }
        }
    }
    post {
        always {
            sh 'npm audit --json | npm-audit-html'
            publishHTML target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: '.',
                    reportFiles: 'npm-audit.html',
                    reportName: 'npm vulnerabilities'
                ]
        }
    }
}