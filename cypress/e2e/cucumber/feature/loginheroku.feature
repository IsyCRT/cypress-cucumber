Feature: Login Functionality

Scenario: Login with valid credentials using data fixture
    Given User login from main page
    When User login with valid credentials
    Then The login has been successful
