
window.addEventListener("load", () => {
    showBlog();
});
function showBlog() {
    let blogData = [];
    blogData = JSON.parse(localStorage.getItem("blogData")) || [];
    console.log("blogData", blogData);
    let html = ""
    for (const iterator of blogData) {
        const description = iterator.description;
        console.log(description);
        const Titletext = iterator.Titletext;
        console.log(Titletext);
    }


    blogData.forEach((element, index) => {

        console.log("element", element)
        console.log("id", index);
        console.log("element...", element.id);;
        html +=
            ` <div class="second-para-div">
            <img src="./imgs/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg" alt="" class="pic-set">
          
                <p class="create-blog-line">${element.Titletext}</p>
                <p class="text">${element.description}</p>
                <div class="link-bolg">

        <a onclick='editfun(${element.id})'>Edit</a>

        <a onclick ='seemore(${element.id})'>Show more</a>
        <a onclick='deleteNote(${element.id})'>Delete</a>
    </div>  
        </div> `
    })
    let blogContainer = document.querySelector(".second-div");
    if (blogData.length !== 0) {
        blogContainer.innerHTML = html;
    }
    else {
        return;
    }
}
function deleteNote(index) {
    console.log("index",index);
    if (confirm("are you sure want to delet this blog") == true) {
        console.log("hi", index);
        let blogData = [];
        blogData = JSON.parse(localStorage.getItem("blogData"));
        if (localStorage.getItem("blogData") == null) {
            blogData = [];
        } else {
            blogData = JSON.parse(localStorage.getItem("blogData"));
        }
        let matcheid = blogData.findIndex((id)=>id.id ===index)
        console.log("matcheid",matcheid);
        blogData.splice(matcheid,1);
        localStorage.setItem("blogData", JSON.stringify(blogData));
        showBlog();
    }
    else {
        blogData();
    }
}
function editfun(element){
    let blogData=[];
    blogData=JSON.parse(localStorage.getItem("blogData"))||[];
    let matcheid= blogData.find((id)=>id.id===element);
    localStorage.setItem("matcheid",JSON.stringify(matcheid));
    window.location.href="./edit.html"       
}

function seemore(element) {
    // alert()
    let blogData=[];
    blogData=JSON.parse(localStorage.getItem("blogData"))||[];
    let showmore=blogData.find((id)=>id.id===element);
    localStorage.setItem("showmore",JSON.stringify(showmore));
    window.location.href="./show.html"
    
}
