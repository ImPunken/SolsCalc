function setCookie(name, value) {
    localStorage.setItem(name, value);
}

function getCookie(name) {
    return localStorage.getItem(name) || "";
}

function saveFormInputs() {
    const formElements = document.querySelectorAll("#rarity-form input, #rarity-form select");
    formElements.forEach(element => {
        if (element.type === "checkbox") {
            localStorage.setItem(element.id, element.checked);
        } else {
            localStorage.setItem(element.id, element.value);
        }
    });
}

function loadFormInputs() {
    const formElements = document.querySelectorAll("#rarity-form input, #rarity-form select");
    formElements.forEach(element => {
        const value = localStorage.getItem(element.id);
        if (value !== null) {
            if (element.type === "checkbox") {
                element.checked = value === "true";
            } else {
                element.value = value;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadFormInputs();
    saveFormInputs();
});