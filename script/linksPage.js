const links  = document.querySelectorAll("#linksPage p span")
const btns   = document.querySelectorAll("#linksPage article button");
// Open Wep Site
links.forEach(link =>{
    link.addEventListener("click", () =>{
       // window.location.href = "" // Here Put Api URLS in (DB)
       console.log("hi");
    })
});
// Check Code
btns.forEach(btn =>{
    btn.addEventListener("click", () =>{
        const input  = btn.previousElementSibling;
        if(
            input.value.length >= 6
            // && inputs.value = Code In DB 
        ){
            Swal.fire('Success!','Correct Code','success');
            addPoint() // DB
        }else{
            Swal.fire('Ops!','This Code Is Not Valid','error');
        }
    })
});
// Add Point Func
function addPoint(){
    // Swal.fire('Success','Password Has Been Changed.','success');
    // And Add Point
    console.log("points++");
}