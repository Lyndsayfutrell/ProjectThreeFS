//Variables
const nameField = document.getElementById("name");
const otherField = document.getElementById("other-job-role");
const jobField = document.getElementById("title");
const shirtColor = document.getElementById("color");
const shirtColorOption = document.querySelectorAll("#color option");
const shirtDesign = document.getElementById("design");
const activityFieldset = document.getElementById("activities");
const activityTotal = document.getElementById("activities-cost");
let total = 0;
const checkBoxes = document.querySelectorAll('input[type=checkbox]');

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

//Activity checkbox functionality

activityFieldset.addEventListener("change", e=> {
    const checkBoxName =e.target.getAttribute("name");
    const checkBoxDate = e.target.getAttribute("data-day-and-time");
    const cost = e.target.getAttribute("data-cost");
    const checked = e.target.checked;
    if (checked === true) {
        for (i=0;i<checkBoxes.length;i++) {
            if (checkBoxes[i].getAttribute("name") !== checkBoxName && checkBoxDate === checkBoxes[i].getAttribute("data-day-and-time")) {
                checkBoxes[i].setAttribute("disabled", "")
            }
        }
    total += (cost*1);
    activityTotal.innerHTML = `Total: $${total}`;
} else if(checked === false)  {
    for (i=0;i<checkBoxes.length;i++) {
        if (checkBoxes[i].getAttribute("name") !== checkBoxName && checkBoxDate === checkBoxes[i].getAttribute("data-day-and-time")) {
            checkBoxes[i].removeAttribute("disabled", "")
        }
    }
    total -= (cost*1);
    activityTotal.innerHTML = `Total: $${total}`;
}
})






