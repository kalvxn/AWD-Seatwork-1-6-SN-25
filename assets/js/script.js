function openGWAForm() {
    document.getElementById("gwa-popup").style.display = "flex";
}

function closeGWAForm() {
    document.getElementById("gwa-popup").style.display = "none";
}

function addCourse() {
    let courseInputs = document.querySelectorAll(".course-input");
    if (courseInputs.length < 10) {
        let newCourse = document.createElement("div");
        newCourse.classList.add("course-input");
        newCourse.innerHTML = `
            <input type="number" class="gwa-input grade" placeholder="Input 4-POINT GRADE">
            <input type="number" class="gwa-input unit" placeholder="Input number of Units">
        `;
        document.getElementById("grade-inputs").appendChild(newCourse);
    }
}

function removeCourse() {
    let courseInputs = document.querySelectorAll(".course-input");
    if (courseInputs.length > 3) {
        courseInputs[courseInputs.length - 1].remove();
    }
}

function calculateGWA() {
    let name = document.getElementById("student-name").value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    let grades = document.querySelectorAll(".gwa-input.grade");
    let units = document.querySelectorAll(".gwa-input.unit");

    let totalWeightedGrade = 0;
    let totalUnits = 0;

    for (let i = 0; i < grades.length; i++) {
        let grade = parseFloat(grades[i].value);
        let unit = parseFloat(units[i].value);

        if (isNaN(grade) || grade < 0.0 || grade > 4.0) {
            alert("Invalid grade entered. Please enter a number between 0.0 and 4.0.");
            return;
        }

        if (isNaN(unit) || unit <= 0) {
            alert("Invalid units entered. Please enter a positive number.");
            return;
        }

        totalWeightedGrade += grade * unit;
        totalUnits += unit;
    }

    if (totalUnits === 0) {
        alert("Total units cannot be zero.");
        return;
    }

    let gwa = totalWeightedGrade / totalUnits;

    const storedRecords = JSON.parse(localStorage.getItem("gwaRecords")) || [];
    storedRecords.push({ name, gwa });
    localStorage.setItem("gwaRecords", JSON.stringify(storedRecords));

    alert(`${name}, your GWA is: ${gwa.toFixed(2)}`);
    closeGWAForm();
}


