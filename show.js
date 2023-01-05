window.addEventListener("load", (element) =>
{
    if (localStorage.getItem("showmore")) {
       const updatedata= JSON.parse(localStorage.getItem("showmore"));
       
       document.getElementById("Titletext").innerHTML=updatedata.Titletext;
        console.log("updatedata",updatedata.Titletext);
      
        document.getElementById("description").innerHTML=updatedata.description;
        console.log("updatedata",updatedata.description);

    }
}
)
