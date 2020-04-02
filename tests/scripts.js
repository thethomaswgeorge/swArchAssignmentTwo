module.exports = {
    'First BMI Test Case'(browser) {
        browser.url('https://sw-qa-3.herokuapp.com/').waitForElementVisible('.nav-item').assert.containsText("#retireApp","Retirement Calc");
    }
}