const emailAdd = document.getElementById('email-input')
const butaoAdd = document.getElementById('butao-click')
const emailError = document.getElementById('email-error')

butaoAdd.addEventListener("click", function(){
    const email = emailAdd.value;

    if(!isValidEmail(email)){
        emailError.style.display = 'block';
    }else{
        emailError.style.display = 'none';
        console.log('E-mail cadastrado' + email);
    }
});

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}