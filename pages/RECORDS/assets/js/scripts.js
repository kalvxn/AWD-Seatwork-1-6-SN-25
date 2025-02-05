document.addEventListener("DOMContentLoaded", () => {
    const recordsBody = document.getElementById("records-body");


    const storedRecords = JSON.parse(localStorage.getItem("gwaRecords")) || [];


    if (storedRecords.length > 0) {
        storedRecords.forEach(record => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${record.name}</td>
                <td>${record.gwa.toFixed(2)}</td>
            `;
            recordsBody.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="2">No records found.</td>`;
        recordsBody.appendChild(row);
    }
});