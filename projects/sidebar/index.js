let sidebarToggle=document.querySelector('.sidebar-toggle');
let sidebar=document.querySelector('.sidebar');
let sidebarClose=document.querySelector('.close-btn')

sidebarToggle.addEventListener("click",()=>{
if(sidebar.classList.contains("show-sidebar")){
    sidebar.classList.remove("show-sidebar")
}
else{
    sidebar.classList.add("show-sidebar")
    
}
})
sidebarClose.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar")
})