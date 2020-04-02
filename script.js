const BMIfunctions = (htFt, htIn, wt) => {
    if ((htFt != "") && (htIn != "") && (wt != "")) {
        htIn = parseFloat(htIn);
        htFt = parseFloat(htFt);
        var kg = wt * .45;
        var totalwt = (htFt * 12) + htIn;
        var meter = totalwt * 0.025;
        var meter = meter * meter;
        var bmi = (kg / meter).toFixed(1);
        
        if ((bmi < 18.5) && (bmi > 0)) {
             return "underweight";
        } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
            //Normal Weight
           return "normal";
        } else if ((bmi >= 25) && (bmi <= 29.9)) {
            //Overweight
            return "overweight";
        } else if ((bmi >= 30)) {
            //Obese
            return "obese";
        } else {
            //Dead
            return "dead";
        }
    } else {
        return "error";
    }
}

const RetireFunctions = (currentAge, annualSal, percentS, savingsG) => {
        var yearlyUserSaved;
        var startingSaved = 0;
        if ((currentAge !== "") && (annualSal !== "") && (percentS !== "") && (savingsG !== "")) {
            if (currentAge <= 0) {
                return 'not alive';
            } else {
                if (percentS < '1') {
    
                } else {
                    percentS = percentS / 100;
                }
    
                do {
                    yearlyUserSaved = annualSal * percentS;
                    yearlyCompSaved = yearlyUserSaved * .35;
                    startingSaved = startingSaved + yearlyUserSaved + yearlyCompSaved;
                   
                    if (startingSaved > savingsG) {
                        return "You will be able to achieve your goal!";
                    } else {
                        currentAge++;
                    }
                } while ((startingSaved <= savingsG) && (currentAge != 101));
            }
        } else {
            return "Please complete all inputs";
        }
    }

module.exports = { BMIfunctions, RetireFunctions };