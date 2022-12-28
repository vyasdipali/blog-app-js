


function myfunc(e) {
// alert()
    e.preventDefault();
    toastr.success('Login to the success', {timeOut: 5000})
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

    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""

}
