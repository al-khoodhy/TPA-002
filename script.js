
function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let fcontainer = document.getElementById("fcontainer");
    let container = document.getElementById("container");

    let bmi = weight/(height/100)**2;
    fcontainer.style.display = "flex";
    container.style.margin = 0;

    document.getElementById("information").style.display = "inline";
    document.getElementById("result").innerHTML = bmi.toFixed(1);
    document.getElementById("sub-1").innerHTML = "BMI: ";
    document.getElementById("sub-2").innerHTML = "BMI Category: ";
    document.getElementById("sub-3").innerHTML = "Condition: ";
    document.getElementById("information").style.backgroundColor = "#efeeb4";

    if (bmi < 18.5) {
      document.getElementById("category").innerHTML = "Underweight";
      document.getElementById("detail").innerHTML = "Nilai IMT di bawah 18,5 menandakan berat badan Anda kurang (underweight).";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById("category").innerHTML = "Normal weight";
      document.getElementById("detail").innerHTML = "Jika nilai indeks massa tubuh Anda 18.5 sampai 24.9, artinya Anda memiliki berat badan normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      document.getElementById("category").innerHTML = "Overweight";
      document.getElementById("detail").innerHTML = "Anda dianggap memiliki kelebihan berat badan, jika indeks massa tubuh (BMI) mencapai 25.0—29.9.";
    } else {
      document.getElementById("category").innerHTML = "Obesity";
      document.getElementById("detail").innerHTML = "Anda mengalami obesitas tingkat 1, jika BMI menunjukkan antara 30-34,9..";
    }
  }

  function calculateReset(){
    document.getElementById("information").style.display = "none";
  }