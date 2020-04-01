const functions = require('./script');

test("Checks BMI for someone 5'8'' and 150 lbs.  Should return: normal", () => {
    console.log(functions);
    expect(functions.calcBMI(5,8,150)).toBe("normal");
});