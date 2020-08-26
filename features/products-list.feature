Feature: Products List

    @Test2
    Scenario: Navigate to Hub Homepage
        When User navigate to 'https://web-team.outsystemscloud.com/ibsproject/LoginScreen'
        When User landed on the page
        Then User successfully landed on the page

    @Test3
    Scenario: Verify the Page Elements on Prepaid Login Block
        When User navigate to 'https://web-team.outsystemscloud.com/ibsproject/LoginScreen'
        Then Page element 'btnLogin1' is displayed
