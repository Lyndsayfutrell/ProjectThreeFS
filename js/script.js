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
            checkBoxes[i].addEventListener("focus", e=>{
                cbFocusEvent(e.target);
            })
            checkBoxes[i].addEventListener("blur", e=> {
                cbBlurEvent(e.target);
            })
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
        nameField.parentElement.classList.remove("valid");
        nameField.parentElement.classList.add("not-valid");
        nameField.parentElement.lastElementChild.style.display = "block";
        return false;
    }
    nameField.classList.remove("error");
    nameField.parentElement.classList.remove("not-valid");
    nameField.parentElement.classList.add("valid");
    nameField.parentElement.lastElementChild.style.display = "none";
    return true;
}

function validateEmail() {
    const value = email.value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailRegex2 = /.+\@/
    const emailTest = emailRegex.test(value);
    const emailTest2 = emailRegex2.test(value);
    if(emailTest) {
        emailField.classList.remove("error");
        emailField.parentElement.classList.remove("not-valid");
        emailField.parentElement.classList.add("valid");
        emailField.parentElement.lastElementChild.style.display = "none";
        return true;
    }
    if(emailTest2) {
        emailField.classList.add("error");
        emailField.parentElement.classList.remove("valid");
        emailField.parentElement.classList.add("not-valid");
        emailField.parentElement.lastElementChild.style.display = "block";
        emailField.parentElement.lastElementChild.innerHTML = "Email must have valid domain address";
        return false;
    }
    emailField.classList.add("error");
    emailField.parentElement.classList.remove("valid");
    emailField.parentElement.classList.add("not-valid");
    emailField.parentElement.lastElementChild.style.display = "block";
    emailField.parentElement.lastElementChild.innerHTML = "Email address must be formatted correctly";
    return false;
}

function validateActivities() {
    let arr = [];
    const activityBox = document.getElementById("activities");
   
   for (i=0;i<checkBoxes.length;i++) {
    arr += checkBoxes[i].checked;
   }
    if (arr.includes(true)) {
        activityBox.classList.remove("not-valid");
        activityBox.classList.add("valid"); 
        activityBox.lastElementChild.style.display = "none";    
        return true;
    }    
    activityBox.classList.add("not-valid"); 
    activityBox.classList.remove("valid");
    activityBox.lastElementChild.style.display = "block";  
    return false;
}

function validatePayment() {
    let arr = [];
    const ccNumValue = ccNum.value;
    const ccNumRegex = /^[0-9]{13,16}$/;
    arr += ccNumRegex.test(ccNumValue);
    const ccZipValue = ccZip.value;
    const ccZipRegEx = /^[0-9]{5}$/;
    arr += ccZipRegEx.test(ccZipValue);
    const ccCvvValue = ccCvv.value;
    const ccCvvRegEx = /^[0-9]{3}$/;
    arr += ccCvvRegEx.test(ccCvvValue);

    if(paymentOption.value === "credit-card" || paymentOption.value === "select method") {
    
        if(!ccNumRegex.test(ccNumValue)) {
            ccNum.parentElement.classList.add("not-valid");
            ccNum.parentElement.classList.remove("valid");
            ccNum.parentElement.lastElementChild.style.display = "block"; 
            ccNum.classList.add("error")
        } else {
            ccNum.parentElement.classList.add("valid");
            ccNum.parentElement.classList.remove("not-valid");
            ccNum.parentElement.lastElementChild.style.display = "none"; 
            ccNum.classList.remove("error")
        }
        if (!ccZipRegEx.test(ccZipValue)){
            ccZip.parentElement.classList.add("not-valid");
            ccZip.parentElement.classList.remove("valid");
            ccZip.parentElement.lastElementChild.style.display = "block"; 
            ccZip.classList.add("error");
        } else {
            ccZip.parentElement.classList.add("valid");
            ccZip.parentElement.classList.remove("not-valid");
            ccZip.parentElement.lastElementChild.style.display = "none"; 
            ccZip.classList.remove("error");
        }
        if(!ccCvvRegEx.test(ccCvvValue)) {
            ccCvv.parentElement.classList.add("not-valid");
            ccCvv.parentElement.classList.remove("valid");
            ccCvv.parentElement.lastElementChild.style.display = "block"; 
            ccCvv.classList.add("error");
        } else {
            ccCvv.parentElement.classList.add("valid");
            ccCvv.parentElement.classList.remove("not-valid");
            ccCvv.parentElement.lastElementChild.style.display = "none"; 
            ccCvv.classList.remove("error");
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
    arr += validateActivities();
    arr += validatePayment();
    if(arr.includes(false)) {
        e.preventDefault();
    }
   
})


//checkbox focus & blur functions

function cbFocusEvent(e) {
    e.parentNode.classList.add("focus");
}

function cbBlurEvent(e) {
    e.parentNode.classList.remove("focus");
}

//Real time validation
emailField.addEventListener("keyup",e=>{
    validateEmail();
})

//Select CC payment on page load
function paymentCC() {
    paymentOption.selectedIndex = 1;
}

paymentCC();
