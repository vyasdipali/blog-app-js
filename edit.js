window.addEventListener("load", (element) => {
    if (localStorage.getItem("matcheid")) {
        updatedata= JSON.parse(localStorage.getItem("matcheid"));
        console.log(updatedata);
        document.getElementById("Titletext").value = updatedata.Titletext;
        console.log("Titletext",Titletext);
        document.getElementById("description").value = updatedata.description;
    }
})

const updateArr = JSON.parse(window.localStorage.getItem("matcheid"));
const onClicckHandler = () => {
    var blogTitle = ((document.getElementById("Titletext") || {}).value) || "";
    console.log('blogTitle', blogTitle);

    var blogdescription = ((document.getElementById("description") || {}).value) || "";
    console.log("blogdescription", blogdescription)
    console.log("updateArr.id", updateArr.id);

    let blogArray = [];
    blogArray = JSON.parse(localStorage.getItem("blogData")) || [];


    const data = blogArray.map((blogdata) => {
        if (blogdata.id == updateArr.id) {
            return { ...blogdata, Titletext: blogTitle, description: blogdescription }
        } return blogdata
    }
    )
    localStorage.setItem("blogData", JSON.stringify(data))
    window.location.href = 'blog.html'
    console.log("data>>>", data);
    console.log("blogArray", blogArray);
}
