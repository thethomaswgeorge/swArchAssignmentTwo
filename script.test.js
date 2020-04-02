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

test("BMI Calc: Checks BMI for if a user types in details for a person who has a negative BMI.  Should return: dead", () => {
    expect(BMIfunctions(1,2,-30)).toBe("dead");
});

test("Retirement Calc: Checks to see if someone 50 yrs old, $50,000 salary who saves 25% of it will meet their goal of 1 million dollars.  Should return: You are dead", () => {
    expect(RetireFunctions(50,50000,.25,1000000)).toBe("You are dead");
});

test("Retirement Calc: Checks to see if someone 0 years old, $10,000 salary who save 20% of it and their goal is 10,000.  Should return: not alive", () => {
    expect(RetireFunctions(0,10000,.2,10000)).toBe("not alive");
});

test("Retirement Calc: Checks to see if someone 25 years old, $10 salary who saves 50% of it and their goal is $20. Should return: You will be able to achieve your goal!", () => {
    expect(RetireFunctions(20,10,.5,20)).toBe("You will be able to achieve your goal!");
});

test("Retirement Calc: Checks to see if someone 98 years old, $10 salary who saves 50% of it and their goal is $20. Should return: You will be able to achieve your goal!", () => {
    expect(RetireFunctions(20,10,.5,20)).toBe("You will be able to achieve your goal!");
});

test("Retirement Calc: Checks to see if the user just inputs blanks for everything.  Should return: Please complete all inputs", () => {
    expect(RetireFunctions("","","","")).toBe("Please complete all inputs");
});

test("Retirement Calc: Checks to see if the user just inputs one number.  Should return: Please complete all inputs", () => {
    expect(RetireFunctions(20,"","","")).toBe("Please complete all inputs");
});

test("Retirement Calc: Checks to see if the user just inputs two numbers.  Should return: Please complete all inputs", () => {
    expect(RetireFunctions(20,10,"","")).toBe("Please complete all inputs");
});
test("Retirement Calc: Checks to see if the user just inputs three numbers.  Should return: Please complete all inputs", () => {
    expect(RetireFunctions(20,10,.5,"")).toBe("Please complete all inputs");
});

test("Retirement Calc: Someone 25 yrs old, $10 salary, saves 50%, goal is $20. Checks to see if the user uses a whole number for the percentage.  Should return: You will be able to achieve your goal!", () => {
    expect(RetireFunctions(20,10,50,20)).toBe("You will be able to achieve your goal!");
});