function myfunc(event) {
    //  alert();
    //  var a = (document.getElementById(Titletext))
    //  console.log(a)
    //  console.log("Hello world!");

    event.preventDefault();
        var Titletext = ((document.getElementById("Titletext") || {}).value) || "";
        var description = ((document.getElementById("description") || {}).value) || "";
        console.log("description:", description)
        console.log("Titletext",Titletext)
    
        let name;
    
        let localStorageData = window.localStorage.getItem('blog data')
        if (localStorageData === null) {
            name = []
        } else {
            name = JSON.parse(localStorageData)
        }
        name.push(
            {
                Titletext: Titletext,
                description: description
            }
        )
        window.localStorage.setItem('blog data', JSON.stringify(name));
        console.log(localStorageData);
     
        document.getElementById("Titletext").value = ""
        document.getElementById("description").value = ""
    }
    