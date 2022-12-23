function myfunc(e) {
    e.preventDefault();
    var email = ((document.getElementById("email") || {}).value) || "";
    var password = ((document.getElementById("password") || {}).value) || "";
    console.log("password:", password)

    let name;

    let localStorageData = window.localStorage.getItem('Register')
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
    window.localStorage.setItem('Register', JSON.stringify(name));
    console.log(localStorageData);

    

}
