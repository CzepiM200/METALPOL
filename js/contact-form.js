const form = document.getElementById('contact-from');
const mainForm = document.getElementById('main-contact-from');

function submitFooter(event) {
    event.preventDefault();
    fetch("https://formsubmit.co/marcin.czepiela@gmail.com", {
    // fetch("https://formsubmit.co/" + form.elements['shop'].value, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: form.elements['email'].value,
            message: form.elements['message'].value
        })
    })
        .then(() => {
            alert("Wiadomość została wysłana")
        })
        .catch(() => {
            alert("Błąd wysyłania wiadomości")
        });
}


function submitMain(event) {
    event.preventDefault();
    fetch("https://formsubmit.co/marcin.czepiela@gmail.com", {
        // fetch("https://formsubmit.co/" + form.elements['shop'].value, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            shop: form.elements['shop'].value,
            email: form.elements['email'].value,
            name: form.elements['name'].value,
            message: form.elements['message'].value
        })
    })
        .then(() => {
            alert("Wiadomość została wysłana")
        })
        .catch(() => {
            alert("Błąd wysyłania wiadomości")
        });
}

form.addEventListener('submit', submitFooter);
mainForm.addEventListener('submit', submitMain);