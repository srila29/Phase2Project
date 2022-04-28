$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Login.feature");
formatter.feature({
  "name": "This feature is used to design the login page of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the successful login with multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the LOGIN button",
  "keyword": "And "
});
formatter.step({
  "name": "I should land in the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsClass.i_have_opened_the_application_in_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login with multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsClass.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsClass.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsClass.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsClass.i_should_land_in_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsClass.i_have_opened_the_application_in_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login with multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter the username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsClass.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsClass.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsClass.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsClass.i_should_land_in_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});