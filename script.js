const form = document.querySelector('.form-right');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const label = document.querySelector('#hiddenLabel');

function checkPassword() {
    if (password1.value === password2.value){
        label.hidden = true;
        password1.className = "";
        password2.className = "";
    }
    else {
        label.hidden = false;
        password1.className = "redLabel";
        password2.className = "redLabel";
    }

}

