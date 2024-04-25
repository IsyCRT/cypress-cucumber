const report = require ('multiple-cucumber-html-reporter')

report.generate({
    jsonDir:'cypress/test-results/cucumber-json',
    reportPath: 'cypress/cucumber-html-report',
    metadata:{
        browser:{
            name: 'chrome',
            version: '120'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData:{
        title: 'Run info',
        data:[ //datos del proyecto
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'March'},
            {label: 'Execution End Time', value: 'March'}
        ]
    }
});
