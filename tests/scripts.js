module.exports = {
    'BMI Test Cases: '(browser) {
        browser.url('https://sw-qa-3.herokuapp.com/').waitForElementVisible('.nav-item').click("li#bmiApp").setValue("#height","5").setValue("#inches","8").setValue("#weight","150").click("button#submitBMIBtn").assert.containsText("#yourResults","Your Results: 23.4%");
    },
    'Retirement Calc Test Cases: '(browser) {
        browser.url('https://sw-qa-3.herokuapp.com/').waitForElementVisible('.nav-item').click("li#retireApp").setValue("#currentAge","25").setValue("#annualSalary","10").setValue("#percentSaved",".5").setValue("savingsGoal","20").click("button#submitRetireBtn").dismissAlert().assert.containsText("#retireBresults","You will achieve your savings goal at age 27 with a total of $20.25 saved!");
    },
    'Testing Exit: '(browser) {
        browser.url('https://sw-qa-3.herokuapp.com/').waitForElementVisible('.nav-item').click("li#exitApp").assert.cssProperty("#darkCover","display","block");
    }
}