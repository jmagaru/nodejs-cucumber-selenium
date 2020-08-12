Feature: Products List

    @Test1
    Scenario: Load the products list
        When we request the products list
        Then we should receive
            | name           | description                                |
            | Phone XL       | A large phone with one of the best screens |
            | Phone Mini     | A great phone with one of the best cameras |
            | Phone Standard | A standard phone, nothing fancy            |

    @Test2
    Scenario: Navigate to Hub Homepage
        Given User navigate to "https://web-team.outsystemscloud.com/ibsproject/LoginScreen"
        When User landed on the page
        Then User successfully landed on the page