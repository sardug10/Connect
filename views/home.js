
// Selecting elements for login-btn//

const loginbtn = document.getElementById('login');
const signbtn = document.querySelector('.signup');
const userBox = document.querySelector('.user');
const passBox = document.querySelector('.pass');
const logbtn = document.querySelector('.logbtn');

//selecting variables for signup-btn//

const mail = document.querySelector('.newmail');
const newuser = document.querySelector('.newuser');
const pass = document.querySelector('.newpass');
const pass2 = document.querySelector('.newpass2');
const signupbtn = document.querySelector('.signbtn')
homeMsg = document.querySelector('.back');

//selecting variables for message//

const message = document.querySelector('.message');
const msg = document.querySelector('.msg');
const list = document.querySelector('.msglist');



//to clear the input fields

logbtn.addEventListener('click',() =>{
    userBox.value = "";
    passBox.value = "";
});

signupbtn.addEventListener('click',() =>{
    mail.value = "";
    newuser.value = "";
    pass.value = "";
    pass2.value = "";
});

loginbtn.addEventListener('click', () =>{
    //loginbtn.style.opacity="0.0";
    signbtn.style.opacity="0.0";
    userBox.style.opacity="1.0";
    passBox.style.opacity="1.0";
    logbtn.style.opacity="1.0";
    homeMsg.style.opacity="1.0";
})

//creating event listener for sign-up btn//

signbtn.addEventListener('click',() => {
    loginbtn.style.opacity="0.0"
    loginbtn.style.marginTop="0%"
    signbtn.style.marginTop="0%"
    mail.style.opacity="1.0"
    newuser.style.opacity="1.0"
    pass.style.opacity="1.0"
    pass2.style.opacity="1.0"
    homeMsg.style.opacity="1.0";
    homeMsg.style.marginBottom="2rem"
    signupbtn.style.opacity="1.0";
})

//show the password message//
pass.onfocus = function(){
    message.style.opacity='1.0'
    msg.style.opacity='1.0'
    list.style.opacity='1.0'
}
//vanish the password message//
pass.onblur = function(){
    message.style.opacity='0.0'
    msg.style.opacity='0.0'
    list.style.opacity='0.0'
}
