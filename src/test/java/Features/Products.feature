Feature: This feature is used to validate the products of the application

  Background: Open the application
    Given I have opened the application in web browser
  
  @Sanity
  Scenario Outline: Validate the products and its price with multiple test data
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click on the LOGIN button
   Then  Validate "<products>" and "<price>"

    Examples: 
      | products              | price  |
      | Sauce Labs Backpack   | $29.99 |
      | Sauce Labs Bike Light | $9.99  |
