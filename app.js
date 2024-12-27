const signbtn = document.querySelector('.signup');
const desc = document.querySelector('#desc');
const head = document.querySelector('h1');
const log = document.querySelector('.logbtn');
const card =document.querySelector('.login');
function handleSignUpClick() {
    anime({
        targets: '#log',
        backgroundColor: '',
        easing: 'easeInOutQuad',
        translateX: "360px",
        duration: 750,
        opacity: [0, 0, 0, 1]
    });

    anime({
        targets: '#desc',
        backgroundColor: '',
        easing: 'easeInOutQuad',
        translateX: "-360px",
        duration: 750,
        opacity: [0,0, 0, 1]
    });
    desc.innerHTML = '<h2>Please <br> enter your <br> details to <br> Creat new account</h2><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>';
    head.textContent = 'Signup';
    log.textContent = 'Signup';
    signbtn.textContent = 'Login';
    signbtn.classList.add('active');
    card.setAttribute('style','border-radius: 0px 30px 30px 0px;');

    signbtn.removeEventListener('click', handleSignUpClick);
    signbtn.addEventListener('click', handleLoginClick);
}

function handleLoginClick() {
    anime({
        targets: '#log',
        easing: 'easeInOutQuad',
        translateX: "-3px",
        duration: 750,
        opacity: [0, 0, 0, 1]
    });

    anime({
        targets: '#desc',
        easing: 'easeInOutQuad',
        translateX: "3px",
        duration: 750,
        opacity: [0,0,0, 1]
    });

    desc.innerHTML = '<h2>Please <br> enter  your details to Login </h2><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/></svg>';
    card.setAttribute('style','border-radius: 30px 0px 0px 30px;');
    head.textContent = 'Login';
    log.textContent = 'Login';
    signbtn.textContent = 'Signup';
    signbtn.classList.remove('active');

    signbtn.removeEventListener('click', handleLoginClick);
    signbtn.addEventListener('click', handleSignUpClick);
}

signbtn.addEventListener('click', handleSignUpClick);
