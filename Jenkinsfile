pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 5000:5000'
        } 
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            } 
        }
        stage('Test') {
            steps {
                sh './index.js'
            }
        }
        stage('Deliver') {
            steps {
                sh './index.js'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './index.js'
            }
        }
    }
}
