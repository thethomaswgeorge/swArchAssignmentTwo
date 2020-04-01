const functions = {
    calcBMI: function (htFt, htIn, wt) {

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
}

module.exports = functions;

function calculateBMITest(htFt, htIn, wt) {

    if ((htFt != "") && (htIn != "") && (wt != "")) {
        htIn = parseFloat(htIn);
        htFt = parseFloat(htFt);
        var kg = wt * .45;
        var totalwt = (htFt * 12) + htIn;
        var meter = totalwt * 0.025;
        console.log("Meters: " + meter);
        console.log("Height inches: " + totalwt);
        var meter = meter * meter;
        var bmi = (kg / meter).toFixed(1);
        $("#yourResults").removeClass("hidden");
        document.getElementById("yourFinalResults").innerText = bmi + '%';

        if ((bmi < 18.5) && (bmi > 0)) {
            document.getElementById("customMessage").innerText = 'You are currently underweight';
            return "underweight";
        } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
            //Normal Weight
            document.getElementById("customMessage").innerText = 'You are currently normal weight';
            return "normal";
        } else if ((bmi >= 25) && (bmi <= 29.9)) {
            //Overweight
            document.getElementById("customMessage").innerText = 'You are currently Overweight';
            return "overweight";
        } else if ((bmi >= 30)) {
            document.getElementById("customMessage").innerText = 'You are currently Obese';
            //Obese
            return "obese";
        } else {
            document.getElementById("customMessage").innerHTML = 'You are currently <i class="fas fa-skull-crossbones"></i>';
            //Dead
            return "dead";
        }
    } else {
        alert("Please complete all the inputs");
    }
}
function calculateBMI() {
    var htFt = document.getElementById('height').value;
    var htIn = document.getElementById('inches').value;
    console.log(htFt);
    console.log(htIn);

    var wt = document.getElementById('weight').value;

    if ((htFt != "") && (htIn != "") && (wt != "")) {
        htIn = parseFloat(htIn);
        htFt = parseFloat(htFt);
        var kg = wt * .45;
        var totalwt = (htFt * 12) + htIn;
        var meter = totalwt * 0.025;
        console.log("Meters: " + meter);
        console.log("Height inches: " + totalwt);
        var meter = meter * meter;
        var bmi = (kg / meter).toFixed(1);
        $("#yourResults").removeClass("hidden");
        document.getElementById("yourFinalResults").innerText = bmi + '%';

        if ((bmi < 18.5) && (bmi > 0)) {
            document.getElementById("customMessage").innerText = 'You are currently underweight';
        } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
            //Normal Weight
            document.getElementById("customMessage").innerText = 'You are currently normal weight';
        } else if ((bmi >= 25) && (bmi <= 29.9)) {
            //Overweight
            document.getElementById("customMessage").innerText = 'You are currently Overweight';
        } else if ((bmi >= 30)) {
            document.getElementById("customMessage").innerText = 'You are currently Obese';
            //Obese
        } else {
            document.getElementById("customMessage").innerHTML = 'You are currently <i class="fas fa-skull-crossbones"></i>';
            //Dead
        }
    } else {
        alert("Please complete all the inputs");
    }
}



function calculateRetirement() {
    $("#displayRetireResults").addClass("hidden");
    $("#displayDeath").addClass("hidden");
    var currentAge = document.getElementById('currentAge').value;
    var annualSal = document.getElementById('annualSalary').value;
    var percentS = document.getElementById('percentSaved').value;
    var savingsG = document.getElementById('savingsGoal').value;
    $("#displayRetireResults").html('<table id="retirementTable"><tr><th>Age</th><th>$ User Saved</th><th>$ Employer Matched</th><th>Current Total</th></tr></table>');
    var yearlyUserSaved;
    var startingSaved = 0;
    if ((currentAge != "") && (annualSal != "") && (percentS != "") && (savingsG != "")) {
        if (currentAge <= 0) {
            alert("You cannot save due to not being alive.");
        } else {
            if (percentS < '1') {

            } else {
                percentS = percentS / 100;
            }

            do {
                yearlyUserSaved = annualSal * percentS;
                yearlyCompSaved = yearlyUserSaved * .35;
                startingSaved = startingSaved + yearlyUserSaved + yearlyCompSaved;
                $('#retirementTable tr:last').after('<tr><td>' + currentAge + '</td><td>$' + yearlyUserSaved + '</td><td>$' + yearlyCompSaved + '</td><td>$' + startingSaved + '</td></tr>');
                console.log('Year: ' + currentAge + ' Currently Saved: $' + startingSaved + '  Savings goal: $' + savingsG);
                if (startingSaved > savingsG) {
                    $("#displayRetireResults").append("<b>You will achieve your savings goal at age " + currentAge + " with a total of $" + startingSaved + " saved!</b>");

                } else {
                    currentAge++;
                }
            } while ((startingSaved <= savingsG) && (currentAge != 101));
            if ((startingSaved < savingsG) && (currentAge == '101')) {
                $("#displayDeath").removeClass("hidden");
                $("#displayRetireResults").addClass("hidden");
                console.log("You are dead");
            } else {
                $("#displayRetireResults").removeClass("hidden");
                $("#displayDeath").addClass("hidden");
                alert("You will achieve your savings goal at age " + currentAge + " with a total of $" + startingSaved + " saved!");
            }
        }
    } else {
        alert("Please complete all the inputs");
    }
}