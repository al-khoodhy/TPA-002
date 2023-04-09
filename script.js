
function handleGetFormData() {
    // mengambil referensi elemen input pada form
    const heightValue = document.getElementById("height").value;
    const weightValue = document.getElementById("weight").value;
  
    // membuat objek dataForm
    const dataForm = {
        height: heightValue,
        weight: weightValue
     };
  
     // mengembalikan nilai objek dataForm
     return dataForm;
  }

const dataCalculator = document.getElementById("form");
dataCalculator.addEventListener('submit', function(e){
    e.preventDefault();
    submit();
});


function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let fcontainer = document.getElementById("fcontainer");
    let container = document.getElementById("container");

    let bmi = weight / (height / 100) ** 2;
    fcontainer.style.display = "flex";
    container.style.margin = 0;

    document.getElementById("information").style.display = "inline";
    document.getElementById("result").innerHTML = bmi.toFixed(1);
    document.getElementById("sub-1").innerHTML = "Body Mass Index (BMI): ";
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

function calculateReset() {
    document.getElementById("information").style.display = "none";
    document.getElementById("warning").innerHTML= "";
}

function validateFormData(formData) {
    // Cek jika objek formData bernilai null

    if (formData.height !== "" && formData.weight !== "") {
        return true;
    }else {
        return false;
    }
   
}

function submit() {
    // event.preventDefault(); // untuk mencegah halaman di-refresh ketika form disubmit

    if (validateFormData(handleGetFormData())) {
        // jika validasi form berhasil, hapus teks di dalam div dengan id warning
        calculateBMI();
        document.getElementById("warning").innerHTML = "";

        // tambahkan kode Anda di sini untuk mengirim data ke server atau melakukan tindakan lainnya
    } else {
        // jika validasi form gagal, tampilkan pesan kesalahan di dalam div dengan id warning
        document.getElementById("warning").innerHTML = "Fill in the form above correctly!";
    }
}