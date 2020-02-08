$(document).ready(function() {
    $("#bmiApp").on("click",function() {
        $("#bmiDisplay").removeClass("hidden");
        $("#retireDisplay").addClass("hidden");
        $("#height").focus();
    });
    $("#retireApp").on("click", function() {
        $("#bmiDisplay").addClass("hidden");
        $("#retireDisplay").removeClass("hidden");
    });
    $("#exitApp").on("click",function() {
        $("#darkCover").removeClass("hidden");
    })
});

function calculateBMI() {
    var htFt = parseFloat(document.getElementById('height').value);
    var htIn = parseFloat(document.getElementById('inches').value);

    var wt   = document.getElementById('weight').value;

    if((htFt != "") && (htIn != "") && (wt != "")) {
        var kg   = wt * .45;
        var totalwt= (htFt * 12) + htIn;
        var meter= totalwt * 0.025;
        console.log("Meters: "+meter);
        console.log("Height inches: " +totalwt);
        var meter = meter *meter;
        var bmi   = (kg/meter).toFixed(1);
        $("#yourResults").removeClass("hidden");
        document.getElementById("yourFinalResults").innerText = bmi+'%';
    
        if((bmi < 18.5) && (bmi > 0)) {
            document.getElementById("customMessage").innerText = 'You are currently underweight';
        }else if((bmi >= 18.5) && (bmi <= 24.9)) {
            //Normal Weight
            document.getElementById("customMessage").innerText = 'You are currently normal weight';
        }else if((bmi >= 25) && (bmi <= 29.9)){
            //Overweight
            document.getElementById("customMessage").innerText = 'You are currently Overweight';
        }else if((bmi >= 30)) {
            document.getElementById("customMessage").innerText = 'You are currently Obese';
            //Obese
        }else {
            document.getElementById("customMessage").innerHTML = 'You are currently <i class="fas fa-skull-crossbones"></i>';
            //Dead
        }
    } else {
        alert("Please complete all the inputs");
    }
}
function calculateRetirement() {
    var currentAge = document.getElementById('currentAge').value;
    var annualSal  = document.getElementById('annualSalary').value;
    var percentS   = document.getElementById('percentSaved').value;
    var savingsG   = document.getElementById('savingsGoal').value;
    var yearlyUserSaved;
    var startingSaved = 0;
    if((currentAge != "") && (annualSal != "") && (percentS != "") && (savingsG != "")) {

        if(percentS < '1') {

        }else {
            percentS = percentS / 100;
        }
    
        do{
            yearlyUserSaved = annualSal * percentS;
            yearlyCompSaved = yearlyUserSaved * .35;
            startingSaved = startingSaved + yearlyUserSaved + yearlyCompSaved;
            $('#retirementTable tr:last').after('<tr><td>'+currentAge+'</td><td>$'+yearlyUserSaved+'</td><td>$'+yearlyCompSaved+'</td><td>$'+startingSaved+'</td></tr>');
            console.log('Year: '+currentAge+' Currently Saved: $'+startingSaved+'  Savings goal: $'+savingsG);
            if(startingSaved > savingsG) {
                $("#displayRetireResults").append("<b>You will achieve your savings goal at age "+currentAge+" with a total of $"+startingSaved+" saved!</b>");
                
            } else {
                currentAge++;
            }
        }while((startingSaved <= savingsG)&& (currentAge != 101));
        if((startingSaved < savingsG) && (currentAge == '101')) {
            $("#displayDeath").removeClass("hidden");
            console.log("You are dead");
        }else {
            $("#displayRetireResults").removeClass("hidden");
            alert("You will achieve your savings goal at age "+currentAge+" with a total of $"+startingSaved+" saved!");
            
        }
    } else {
        alert("Please complete all the inputs");
    }
}