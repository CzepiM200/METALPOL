const form=document.getElementById("contact-from"),mainForm=document.getElementById("main-contact-from");function submitFooter(e){e.preventDefault(),fetch("https://formsubmit.co/marcin.czepiela@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:form.elements.email.value,message:form.elements.message.value})}).then(()=>{alert("Wiadomość została wysłana")}).catch(()=>{alert("Błąd wysyłania wiadomości")})}function submitMain(e){e.preventDefault(),fetch("https://formsubmit.co/marcin.czepiela@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({shop:form.elements.shop.value,email:form.elements.email.value,name:form.elements.name.value,message:form.elements.message.value})}).then(()=>{alert("Wiadomość została wysłana")}).catch(()=>{alert("Błąd wysyłania wiadomości")})}form&&form.addEventListener("submit",submitFooter),mainForm&&mainForm.addEventListener("submit",submitMain);