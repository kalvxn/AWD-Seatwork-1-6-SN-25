function openGWAForm() {
    document.getElementById("gwa-popup").style.display = "flex";
}

function closeGWAForm() {
    document.getElementById("gwa-popup").style.display = "none";
}

function calculateGWA() {
    let name = document.getElementById("student-name").value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    let grades = [];
    let inputs = document.querySelectorAll(".gwa-input");

    for (let input of inputs) {
        let grade = parseFloat(input.value);
        if (isNaN(grade) || grade < 0 || grade > 100) {
            alert("Invalid grade entered. Please enter a number between 0 and 100.");
            return;
        }
        grades.push(grade);
    }

    let gwa = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    const storedRecords = JSON.parse(localStorage.getItem("gwaRecords")) || [];
    storedRecords.push({ name, gwa });
    localStorage.setItem("gwaRecords", JSON.stringify(storedRecords));

    alert(`${name}, your GWA is: ${gwa.toFixed(2)}`);
    closeGWAForm();
}