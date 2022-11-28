Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

    Scenario: I go to google and search for cucumber

      Given I go to URL "https://www.google.com"
      When I types "<term>" in "google-page"."searchInput"
      And I click "google-page"."btnSearch"
      Then URL should contain "<url_val>"

      Examples:
      | term        | url_val |           
      | cucumber.io | cucumber.io | 
      | playwright  | playwright |               