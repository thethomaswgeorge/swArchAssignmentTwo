const functions = require('./script');

test("Checks BMI for someone 5'8'' and 150 lbs.  Should return: normal", () => {
    expect(functions.calcBMI(5,8,150)).toBe("normal");
});
test("Checks BMI for someone 5'8'' and 300 lbs.  Should return: obese", () => {
    expect(functions.calcBMI(5,8,300)).toBe("obese");
});
test("Checks BMI for if someone entered nothing.  Should return: error", () => {
    expect(functions.calcBMI('','','')).toBe("error");
});