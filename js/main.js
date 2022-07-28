const psw = document.querySelector('#password');
const confPsw = document.querySelector('#confirm-password');
const errorMsg = document.querySelector('#error-match');

confPsw.addEventListener('input', () => {
    if (confPsw.value === psw.value) {
        psw.classList.remove('error');
        confPsw.classList.remove('error');
        errorMsg.style.display = 'none';
        
    } else {
        psw.classList.add('error');
        confPsw.classList.add('error');
        errorMsg.style.display = 'inline';
    }
});