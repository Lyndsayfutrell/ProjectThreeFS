//Variables
const nameField = document.getElementById("name");
const otherField = document.getElementById("other-job-role");
const jobField = document.getElementById("title");
const shirtColor = document.getElementById("color");
const shirtColorOption = document.querySelectorAll("#color option");
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
        shirtColorOption[0].setAttribute('hidden', '');
        shirtColorOption[1].removeAttribute('hidden', '');
        shirtColorOption[2].removeAttribute('hidden', '');
        shirtColorOption[3].removeAttribute('hidden', '');
        shirtColorOption[4].setAttribute('hidden', '');
        shirtColorOption[5].setAttribute('hidden', '');
        shirtColorOption[6].setAttribute('hidden', '');

    } else if (value === "heart js") {
        shirtColor.removeAttribute('disabled', ''); 
        shirtColorOption[0].setAttribute('hidden', '');
        shirtColorOption[1].setAttribute('hidden', '');
        shirtColorOption[2].setAttribute('hidden', '');
        shirtColorOption[3].setAttribute('hidden', '');
        shirtColorOption[4].removeAttribute('hidden', '');
        shirtColorOption[5].removeAttribute('hidden', '');
        shirtColorOption[6].removeAttribute('hidden', '');
    } else {
        shirtColor.setAttribute('disabled', '');
    }
})




