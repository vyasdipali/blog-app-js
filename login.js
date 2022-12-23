    function myfunc(event) {
        event.preventDefault();
        var email = ((document.getElementById("email-login") || {}).value) || "";
        var password = ((document.getElementById("password-login") || {}).value) || "";
        console.log("password:", password)
        let name;

        let localStorageData = window.localStorage.getItem('name')
        if (localStorageData === null) {
            name = []
        } else {
            name = JSON.parse(localStorageData)
        }
        name.push(
            {                
                email:email,
                password:password
            }
        )
        window.localStorage.setItem('name', JSON.stringify(name));
        console.log(localStorageData);

        let emailData = window.localStorage.getItem('email')
    console.log("emailData",emailData)
    }

