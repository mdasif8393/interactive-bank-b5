const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', ()=> {
    const email = document.getElementById('email-input').value;
    console.log(email);

    const password = document.getElementById('password-input').value;
    console.log(password);
    
    if(email === 'bap@bap.com' && password === 'bap'){
        window.location.href = 'banking.html'
    }
})