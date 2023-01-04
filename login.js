function myfunc(event) {
    event.preventDefault();
    var email = ((document.getElementById("email-login") || {}).value) || "";
    var password = ((document.getElementById("password-login") || {}).value) || "";

    let name;
    let registerData = JSON.parse(window.localStorage.getItem('Register'))
    console.log("registerData", registerData);

    for (let index = 0; index < registerData.length; index++) {
        const registerEmail = registerData[index].email;
        const registerPassword = registerData[index].password;

        let localStorageData = window.localStorage.getItem('Login')
        if (localStorageData === null) {
            name = []
        } else {
            name = JSON.parse(localStorageData)
        }
        name.push(
            {
                email: email,
                password: password
            }
        )
        if (registerEmail === email && registerPassword === password) {
            window.localStorage.setItem('Login', JSON.stringify(name));
            toastr.success('Login to the success', {timeOut: 5000})

            window.location.href='./blog.html';

        }
        else {
           toastr.error('Somthing went wrong')
        }
    document.getElementById("email-login").value=""
    document.getElementById("password-login").value=""
    }   
}






