const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const Email = document.getElementById('email');
const Firstname = document.getElementById('fname');
const Lastname = document.getElementById('lname');
const Username = document.getElementById('uname');
const Password= document.getElementById('pwd');


const HttpRequest('method', 'url'){
    const xhr = new XMLHttpRequest();
    xhr.open('method', 'url');
    xhr.send();
    xhr.onerror = () => {
        window.alert('You encountered an error');
    }
    xhr.onload = () => {
        if (xhr.status == 200){
            window.location.href = 'success-page.html';
        }
    }
}
const Login = () => {
    HttpRequest('POST', 'https://secsoftintern.herokuapp.com/login', {
        Email;
        Password;
    });
};

const Register = () => {
    HttpRequest('POST', 'https://secsoftintern.herokuapp.com/register', {
        Firstname;
        Lastname;
        Username;
        Email;
        Password;
    });
};

registerBtn.addEventListener('click', Register);
loginBtn.addEventListener('click', Login);