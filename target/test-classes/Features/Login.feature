Feature: This feature is used to design the login page of the application

  Background: Open the application
    Given I have opened the application in web browser
  @Sanity @Regression
  Scenario Outline: Validate the successful login with multiple test data
    When I enter the username "<username>"
    And I enter the password "<password>"
    And I click on the LOGIN button
    Then I should land in the home page

    Examples: 
      | username   | password |
      | standard_user | secret_sauce  |
      | problem_user | secret_sauce  |

  Scenario Outline: Validate the negative login with multiple test data
    When I enter the username "<username>"
    And I enter the password "<password>"
    And I click on the LOGIN button
    Then I should get the error message "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | username   | password |
      | abc@gm.com | secretsauce  |
      | sri@gm.com | secretsauce |
