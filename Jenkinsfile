pipeline {
    agent any 
    parameters {
        string(name: 'SPEC', defaultValue: '', description: 'Cypress/e2e/**/**')
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: 'Browser to run tests in')
    }
    options {
        ansicolor('xterm')
    }
    stages {
        stage('build') {
            steps {
                echo "building the project"
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js and Cypress dependencies
                sh 'npm install'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                sh 'npx cypress run --browser $BROWSER --spec $SPEC'
            }
        }
    }
     post {
        always {
           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/test-results/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
}