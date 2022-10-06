//Variables
const nameField = document.getElementById("name");
const otherField = document.getElementById("other-job-role");
const jobField = document.getElementById("title");
const shirtColor = document.getElementById("color");
const shirtDesign = document.getElementById("design");

//Focus name field on page load
nameField.focus();

//Show & Hide other job text field
otherField.style.display = "none";
jobField.addEventListener("change", e=> {
    const jobTitle = e.target.value;
    if (jobTitle === "other") {
        otherField.style.display = "";
    } else {
        otherField.style.display = "none";
    }
})

//T-shirt options

shirtColor.setAttribute('disabled', '');
shirtDesign.addEventListener("change", e=> {
    const value = e.target.value;
    if(value === "js puns") {
        shirtColor.removeAttribute('disabled', '');
    } else if (value === "heart js") {
        shirtColor.removeAttribute('disabled', ''); 
    } else {
        shirtColor.setAttribute('disabled', '');
    }
})




