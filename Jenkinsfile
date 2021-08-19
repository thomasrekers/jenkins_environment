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

                script {
                    if (env.BRANCH_NAME == 'master') {
                        echo 'I only execute on the master branch'
                    } else {
                        echo 'I execute elsewhere'
                    }
                    def output = sh script: "npm audit", returnStdout: true
                    def summary = output.split("\n")[0] //get the summary from the last line
                    echo summary
                }

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
    // post {
    //     always {
    //         junit 'test-report.xml'
    //     }
    // }
}