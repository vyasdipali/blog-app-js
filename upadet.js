window.addEventListener("load",(element)=>{
    if(localStorage.getItem("matchid")){
        updatedata.JSON.parse(localStorage.getItem("matchid"));
        console.log (updatedata);
        document,getElementById("Titletext").value=updatedata.Titletext;
        document.getElementById("description").value=updatedata.description;
    }
})
let submit= document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
        let updateArr={};
        updateArr=JSON.parse(localStorage.getItem("matchid"));
        let blogArray=[];
        blogArray=JSON.parse(localStorage.getItem("blogDta"))||[];  

        let updateid=blogArray.findIndex((id)=>id.id===updateArr.id);
        console.log("index",updateid);
        if(updateid=== -1)return;
        const blogTitle = document.getElementById(Titletext).value;
        const blogdescription = document.getElementById(description).value;

        blogArray[updateid].Titletext=blogTitle;    
        blogArray[updateid].blogdescription=blogdescription;

        localStorage.removeItem("blogData");
        localStorage.setItem("blogData",JSON.stringify(blogArray));
        window.location.href = './blog.html';
})