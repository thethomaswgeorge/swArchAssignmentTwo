module.exports = {
    'First BMI Test Case'(browser) {
        browser.url('https://sw-qa-3.herokuapp.com/').waitForElementVisible('.nav-item').setValue("#height","5").setValue("#inches","8").setValue("#weight","150").click("button#submitBMIBtn").assert.containsText("#yourResults","Your Results: 23.4%");
    }
}