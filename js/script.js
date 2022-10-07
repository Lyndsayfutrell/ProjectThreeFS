//Variables
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const otherField = document.getElementById("other-job-role");
const jobField = document.getElementById("title");
const shirtColor = document.getElementById("color");
const shirtColorOption = document.querySelectorAll("#color option");
const shirtDesign = document.getElementById("design");
const activityFieldset = document.getElementById("activities");
const activityTotal = document.getElementById("activities-cost");
let total = 0;
const checkBoxes = document.querySelectorAll('input[type=checkbox]');
const paymentOption = document.getElementById("payment");
const creditPayment = document.getElementById("credit-card");
const bitcoinPayment = document.getElementById("bitcoin");
const paypalPayment = document.getElementById("paypal");
const form = document.querySelector("form");
const ccYear = document.getElementById("exp-year");
const ccNum = document.getElementById("cc-num");
const ccZip = document.getElementById("zip");
const ccCvv = document.getElementById("cvv");

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

//Payment option functionality

paypalPayment.setAttribute('hidden', '');
bitcoinPayment.setAttribute('hidden', '');

paymentOption.addEventListener("change", e=> {
    paymentType = e.target.value;
    if (paymentType === "credit-card") {
        creditPayment.removeAttribute('hidden', '');
        paypalPayment.setAttribute('hidden', '');
        bitcoinPayment.setAttribute('hidden', '');
    } else if (paymentType === "paypal") {
        creditPayment.setAttribute('hidden', '');
        paypalPayment.removeAttribute('hidden', '');
        bitcoinPayment.setAttribute('hidden', '');
    } else if (paymentType === "bitcoin") {
        creditPayment.setAttribute('hidden', '');
        paypalPayment.setAttribute('hidden', '');
        bitcoinPayment.removeAttribute('hidden', '');
    }
})

//Form validation
//functions

function validateName() {
    if(nameField.value === "") {
        nameField.classList.add("error");
        return false;
    }
    return true;
}

function validateEmail() {
    const value = email.value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = emailRegex.test(value);
    if(emailTest) {
        return true;
    }
    emailField.classList.add("error");
    return false;
}

// function validateActivities() {
//     if () {

//     }
//     return true;
// }

function validatePayment() {
    let arr = [];
    const ccNumValue = ccNum.value;
    const ccNumRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    arr += ccNumRegex.test(ccNumValue);
    const ccZipValue = ccZip.value;
    const ccZipRegEx = /^[0-9]{5}$/;
    arr += ccZipRegEx.test(ccZipValue);
    arr += ccYear.value === "Select Year";
    const ccCvvValue = ccCvv.value;
    const ccCvvRegEx = /^[0-9]{3}$/;
    arr += ccCvvRegEx.test(ccCvvValue);

    if(paymentOption.value === "credit-card" || paymentOption.value === "select method") {
    
    if(!ccNumRegex.test(ccNumValue)) {
        ccNum.classList.add("error")
    } 
    if (!ccZipRegEx.test(ccZipValue)){
        ccZip.classList.add("error");
    } 
    if(ccYear.value === "Select Year") {
        ccYear.classList.add("error");
    }
    if(!ccCvvRegEx.test(ccCvvValue)) {
        ccCvv.classList.add("error");
    }
    if(arr.includes(false)) {
        return false;
    }
}
    return true;

}

//Form event Listener

form.addEventListener("submit",e=> {
    let arr = [];
    arr += validateName();
    arr += validateEmail();
    // arr += ;
    arr += validatePayment();
    if(arr.includes(false)) {
        e.preventDefault();
    }
   
})




