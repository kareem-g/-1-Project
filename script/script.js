const scrolling = document.querySelectorAll("[data-scroll]");

// Scrooling To
scrolling.forEach(btn => {
    btn.addEventListener("click", ()=> {
        const elment = document.getElementById(btn.getAttribute("data-scroll")).offsetTop;
        window.scrollTo({top:elment, behavior:"smooth"})
    });
});
// Show List
const listBtn = document.querySelector("#login-nav.user-dash-board .user");
const list = document.querySelector("#login-nav.user-dash-board .user .opt");
if(listBtn !== null){
    listBtn.addEventListener("click", ()=> list.classList.toggle("acctive"));
}
window.addEventListener("click", e => {
    const btns = document.querySelectorAll(".user-dash-board .user > *");
    const tar = e.target;
    if(tar !== listBtn
         && tar !== btns[0] 
         && tar !== btns[1] 
         && tar !== btns[2] 
         && list !== null 
         ){
        list.classList.remove("acctive")
    }
});

async function GetPaswordPopup(){
const { value: password } = await Swal.fire({
    icon: 'question',
    title: `New Password`,
    html: 
            '<label for="swal-input1" class="swal2-input-label">Password</label>'
        + '<input type="password" id="swal-input1" class="swal2-input popuppassword">' 
        + '<label for="swal-input2" class="swal2-input-label">Repeat Password</label>'
        + '<input type="password" id="swal-input2" class="swal2-input popuppassword">',
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#0088FF',
        cancelButtonAriaLabel: 'Thumbs down',
    preConfirm: () => {
        return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
        ]
    }
})
password != undefined ? password.forEach(() => validat(password)) : "";
}

// Validat Function
let Send = true; // To Send One Password
function validat(...password){
    let newPassword = password[0][0];
    let re_Password = password[0][1];
    newPassword === '' ? Swal.fire('Error !','Password Is A Required Field','error')
    : newPassword.length < 8 ? Swal.fire('Error !','This Password Is Very Short, Chose The Strongest One','error')
    : newPassword.length > 25 ? Swal.fire('Error !','This Password Is Very Long, Shorten It','error')
    : newPassword !== re_Password ? Swal.fire('Error !','Passwords Is Not Matching','error')
    : sendResetPass(newPassword);
}

// Send Data Function
function sendResetPass(newPassword){
    if(Send){
        Swal.fire('Success','Password Has Been Changed.','success');
        Send = false;
        console.log(newPassword); // => Dont Touch Any - newPassword Is Finshed Value <=
                                  // password => This Send Tp DB
    }
}
// Get POP up
const popCall = document.querySelectorAll('[data-changepass="Change popup"]');
popCall.forEach(call => call.addEventListener("click", () => {
    GetPaswordPopup();
    Send = true;
}));
// Copy Button =>
const btn = document.querySelector("#net #referrals .input button");
if(btn != null){
    btn.addEventListener("click", ()=> {
    // Copy Text 
    const inputText = document.querySelector("#net #referrals .input input");
    navigator.clipboard.writeText(inputText.value);
    // Show Text Msg 
    const before = document.querySelector("#net button span:first-of-type");
    const after = document.querySelector("#net button span:last-child");
    before.style.display = 'block';
    after.style.display = 'block';
    setTimeout(()=> {before.style.display = 'none';after.style.display = 'none';},3000)
    })
}