const  { BMIfunctions, RetireFunctions } = require('./script');

test("BMI Calc: Checks BMI for someone 5'8'' and 150 lbs.  Should return: normal", () => {
    expect(BMIfunctions(5,8,150)).toBe("normal");
});
test("BMI Calc: Checks BMI for someone 5'8'' and 300 lbs.  Should return: obese", () => {
    expect(BMIfunctions(5,8,300)).toBe("obese");
});
test("BMI Calc: Checks BMI for if someone entered nothing.  Should return: error", () => {
    expect(BMIfunctions('','','')).toBe("error");
});
test("BMI Calc: Checks BMI for if someone 5'8'' and 10 lbs.  Should return: underweight", () => {
    expect(BMIfunctions(5,8,10)).toBe("underweight");
});
test("Bmi Calc: Checks BMI for some 5'2'' 159.5 lbs. Should return: overweight", () => {
    expect(BMIfunctions(5,2,159.5)).toBe("overweight");
});

test("Retirement Calc: Checks to see if someone 50 yrs old, 50,000 salary who saves .25% of it will meet their goal of 1 million dollars.  Should return: You are dead", () => {
    expect(RetireFunctions(50,50000,.25,1000000)).toBe("You are dead");
});

test("Retirement Calc: Checks to see if someone 0 years old, 10,000 salary who save .2% of it and their goal is 10,000.  Should return: not alive", () => {
    expect(RetireFunctions(0,10000,.2,10000)).toBe("not alive");
});