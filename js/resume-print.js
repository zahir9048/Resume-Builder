document.addEventListener("DOMContentLoaded", function () {
    var resumeData = localStorage.getItem("resumeData");
    if (resumeData) {
        var data = JSON.parse(resumeData);
        // Populate the fields with data
        document.getElementById("nameField").innerText = data.name;
        document.getElementById("ageField").innerText = data.age;
        document.getElementById("fatherNameField").innerText = data.fatherName;
        document.getElementById("addressField").innerText = data.address;
        document.getElementById("schoolField").innerText = data.school;
        document.getElementById("collegeField").innerText = data.college;
        document.getElementById("universityField").innerText = data.university;
        // Populate the skills list
        var skillsArray = data.skills.split(",");
        var skillsList_1 = document.getElementById("skillsField");
        skillsArray.forEach(function (skill) {
            var li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList_1.appendChild(li);
        });
        // Populate the work experience list
        var workExpArray = data.workExp.split(",");
        var workExpList_1 = document.getElementById("workExpField");
        workExpArray.forEach(function (work) {
            var li = document.createElement("li");
            li.textContent = work.trim();
            workExpList_1.appendChild(li);
        });
        // Set the image source if available
        if (data.image) {
            var userImage = document.getElementById("userImage");
            userImage.src = data.image;
        }
    }
    // Add event listener for "Save As PDF" button
    var savePdfButton = document.querySelector('button[type="button"]');
    savePdfButton.addEventListener("click", function () {
        // Trigger the print dialog
        window.print();
    });
});
