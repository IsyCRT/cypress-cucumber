#!/usr/bin/env node
const rimraf = require('rimraf') //para crear/delete
 
const testResultsDir = './cypress/test-results'
 
rimraf(testResultsDir, () => {
 console.log('Deleted former test results.')
})