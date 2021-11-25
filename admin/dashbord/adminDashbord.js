const linkInput  = document.querySelector("#Admin .addLink input:nth-of-type(1)");
const codeInput  = document.querySelector("#Admin .addLink input:nth-of-type(2)");
const AddLinkBtn = document.querySelector("#Admin .addLink button");
const boxLinks   = document.querySelector("#Admin .addLink .tap");
AddLinkBtn.addEventListener("click", () =>{
    linkInput.value === "" || codeInput.value === "" ? 
    Swal.fire('Ops!','Please Write Password & Code','error')
     : codeInput.value.length < 6 ?
    Swal.fire('Ops!','The Code More Than 6 Letter And Numbers','error')
     : afterValidate(linkInput.value, codeInput.value);
});
// afterValidate Function
function afterValidate(link, code){
    SendData(link, code); // => (DB)
    Swal.fire('Success!','The New Link Is Added','success');
    newLinkAdd(link);
}
// Function SendData
function SendData(link, code){
    // Send In (DB)
    console.log(link, code);
};


// Create Link Column Function
function newLinkAdd(link){
    boxLinks.innerHTML += `<div class="col"><p>${link}</p><p><i class="far fa-trash-alt"></i></p></div>`;
    const deletBtn = document.querySelectorAll("#Admin .nett .addLink .tap .col p:nth-of-type(2)");
    deletBtn.forEach(btn => addEventListenerfun(btn, 'The New Link Has Been Deleted', btn.parentElement));
};
// Deleted Link
const deletBtn = document.querySelectorAll("#Admin .nett .addLink .tap .col p:nth-of-type(2)");
deletBtn.forEach(btn => addEventListenerfun(btn, 'The New Link Has Been Deleted', btn.parentElement));
// Bouns Sec
const bounsBtn = document.querySelector("#Admin .bouns .input button");
const bounsinp = document.querySelector("#Admin .bouns .input input");
const bounsText= document.querySelector("#Admin .nett article > p span");
bounsBtn.addEventListener("click", ()=> {
    value = +bounsinp.value;
    if(value === "" || value == NaN || value <= 0){
        Swal.fire('Ops!','Sorry Put Valid Bound','error');
    }else{
        Swal.fire('Success!','Bound Have Been Update','success');
        bounsText.textContent = value; // => Get (DB)
        sendBouns(value); // => Send To (DB)
    }
});
// Send Bouns
function sendBouns(newBound){
    // => Send To (DB)
    console.log(newBound);
}
// Add EventListener Functions
function addEventListenerfun(btn, msg, parent) {
    btn.addEventListener("click", async function (){
        const { value: Ansar } = await Swal.fire({
            icon: 'question',
        title: `Are You Sure?`,
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#0088FF',
        cancelButtonAriaLabel: 'Thumbs down',
        preConfirm: () => this.Ansar
    });
    if(Ansar){
        Swal.fire('Success!',msg,'success');
        parent.remove();
        // => DeletIn (DB) function
    }
    })
};
// WithDrawlButtons
const Agredd    = document.querySelectorAll("#Admin #tableRequests .col p:nth-of-type(3) span:nth-of-type(1)");
const notAgredd = document.querySelectorAll("#Admin #tableRequests .col p:nth-of-type(3) span:nth-of-type(2)");
notAgredd.forEach(btn => {
    addEventListenerfun(btn, 'The Withdrawl Has Been Rejected', btn.parentElement.parentElement);
    // => Send In (DB) Rejected Withdrawl
});
Agredd.forEach(btn => {
    addEventListenerfun(btn, 'The Withdrawl Has Been Accepted', btn.parentElement.parentElement);
    // => Send In (DB) Accepted Withdrawl
});
