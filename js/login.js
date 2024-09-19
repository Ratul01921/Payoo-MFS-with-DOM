document.getElementById('btn-login').addEventListener('click', function(event){
   event.preventDefault();
    // console.log('login button clicked')

    const phoneNumber =  document.getElementById('phone-number');
    const phnNum = phoneNumber.value;
    // console.log(phnNum);

    const passwordNumber = document.getElementById('password');
    const passNum = passwordNumber.value;
    // console.log(passNum);

    if(phnNum === '01921671587' && passNum === '1234'){
        console.log('you are logged in');
        window.location.href = './home.html'
    }
    else{
        alert('wrong phone number or password')
    }

})