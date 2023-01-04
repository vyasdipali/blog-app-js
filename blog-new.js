function myfunc(event) {
    event.preventDefault();
    var Titletext = ((document.getElementById("Titletext") || {}).value) || "";
    var description = ((document.getElementById("description") || {}).value) || "";
    console.log("description:", description)
    console.log("Titletext:", Titletext)

    let name;

    let localStorageData = window.localStorage.getItem('blogData')
    if (localStorageData === null) {
        name = []
    } else {
        name = JSON.parse(localStorageData)
    }
    name.push(
        {
            id: Math.floor(Math.random() + name.length),
            Titletext: Titletext,
            description: description
        }
    )
    window.localStorage.setItem('blogData', JSON.stringify(name));
    console.log(localStorageData);

    document.getElementById("Titletext").value = ""
    document.getElementById("description").value = ""
    window.location.href = './blog.html';


}
// window.addEventListener("load", (element) => {
//     if (localStorage.getItem("matchid")) {
//         updatedata.JSON.parse(localStorage.getItem("matchid"));
//         console.log(updatedata);
//         document, getElementById("Titletext").value = updatedata.Titletext;
//         document.getElementById("description").value = updatedata.description;
//     }
// })
// let submit = document.getElementById("submit");
// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     let updateArr = {};
//     updateArr = JSON.parse(localStorage.getItem("matchid"));
//     let blogArray = [];
//     blogArray = JSON.parse(localStorage.getItem("blogDta")) || [];

//     let updateid = blogArray.findIndex((id) => id.id === updateArr.id);
//     console.log("index", updateid);
//     if (updateid === -1) return;
//     const blogTitle = document.getElementById(Titletext).value;
//     const blogdescription = document.getElementById(description).value;

//     blogArray[updateid].Titletext = blogTitle;
//     blogArray[updateid].blogdescription = blogdescription;

//     localStorage.removeItem("blogData");
//     localStorage.setItem("blogData", JSON.stringify(blogArray));

// })  