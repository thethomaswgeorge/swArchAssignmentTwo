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
}