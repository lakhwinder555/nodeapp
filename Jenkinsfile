pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git branch: 'main', url: 'https://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@github.com/lakhwinder555/nodeapp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Optional: Run tests (if you have any test scripts defined)
                // Uncomment if you have tests
                // sh 'npm test'
                echo 'No tests to run'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the application
                echo 'Deploying application...'
                // If you have a deployment script, run it here
                // sh './deploy.sh'
            }
        }

        stage('Restart Application') {
            steps {
                // Stop any existing Node.js application
                echo 'Restarting application...'
                sh '''
                pkill -f "node index.js" || true
                nohup npm start &
                '''
            }
        }

        stage('App URL') {
            steps {
                // Output the application URL
                echo 'Application is running at: http://localhost:5000'
            }
        }
    }
}
