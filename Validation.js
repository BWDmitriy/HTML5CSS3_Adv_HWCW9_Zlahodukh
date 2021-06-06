window.addEventListener("load", init, false);

function init() {
    pizza.userName.onchange = nameOnChange;
    pizza.userTel.onchange = userTelOnChange;
    pizza.userAddress.onchange = userAddressOnChange;
    pizza.onsubmit = onsubmitHandler;
};

function validate(elem, pattern) {
    let res = elem.value.search(pattern);
    if (res == -1) elem.className = "inputDesign invalid";
    else elem.className = "inputDesign valid";
}

function nameOnChange() {
    let pattern = /\S/;
    validate(this, pattern);
}

function userTelOnChange() {
    let pattern = /\+38\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}/i;
    validate(this, pattern);
}

function userAddressOnChange() {
    let pattern = /[A-Za-zА-Яа-яЁё0-9,.\-\s]+/;
    validate(this, pattern);
}


function onsubmitHandler() {

    let invalid = false;
    let submCheck = document.getElementById('submCheck');
    let telCheck = document.getElementById('telCheck');
    for (let i = 0; i < pizza.elements.length; ++i) {
        let e = pizza.elements[i];
        if (e.type == "text" && e.onchange) {
            e.onchange();
            if (e.className == "inputDesign invalid") invalid = true;
            if (pizza.userTel.className == "inputDesign invalid") {
                telCheck.innerHTML = "Correct number pattern: +38(000)111-11-11";
            }
            if (pizza.userTel.className != "inputDesign invalid") {
                telCheck.innerHTML = "";
            }
        }
    }
    if (invalid) {
        submCheck.innerHTML = "Fill everything!";
        return false; 
    };
}
