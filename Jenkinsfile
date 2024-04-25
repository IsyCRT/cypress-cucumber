pipeline {
    agent any 
   // parameters {
    //    string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'ejecutar test')
    //    choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: 'Browser to run tests in')
    //}
    options {
        ansiColor('xterm')
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
                bat 'npm install'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                bat 'npx cypress run --browser chrome --spec cypress/e2e/tests/LoginRequest.cy.js'
            }
        }
    }
    post {
        always {
           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/test-results/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: 'Mi reporte de cypress'])
        }
    }
}