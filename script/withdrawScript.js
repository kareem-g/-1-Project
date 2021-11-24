const requestBtn = document.querySelector("#added .big-input button");
const requestInput = document.querySelector("#added .big-input input");
// Validation
requestBtn.addEventListener("click", async function (){
    if(ValidationWallet(requestInput.value)){
        const { value: Amount } = await Swal.fire({
            icon:'question',
            title:'Amount',
            inputLabel: 'Select The Withdrawl Amount',
            showCancelButton: true,
            showCloseButton: true,
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Confirm',
            confirmButtonColor: '#0088FF',
            cancelButtonAriaLabel: 'Thumbs down',
            input:'text',
            preConfirm: () => this.Amount
        });
        if(ValidationAmount(Amount)){
            Swal.fire("Success","The Draw Is Waiting For Review","success");
            sendWithdrawlRequest(Amount) // This Function Bottom (DB) 
        }else{
            Swal.fire("Ops!","Please Put The Valid Amount","error");
        }
    }else{
        Swal.fire("Ops!","Please Check Your Wallet","error");
    }
});
// Validation Function
function ValidationWallet(val) {
       if(
        val !== ""
        && val.length >= 10
        && true /* => Here Put Check In Wallet Adress API (DB) */ 
        ){
        return true
    }else{
        return false;
    }
}
function ValidationAmount(val) {
    if(val !== "" 
       && val > 0
       && isNaN(val) == false
       /*&& val > Here Put Loest Drawel (DB)*/
       && true /* => Here Put Check In Her Pont In (DB) >= amount*/
    ){
        return true
    }else{
        return false;
    }
}
// DB
function sendWithdrawlRequest(Amount){
    Amount = +Amount;
    console.log(Amount); //Here Put Block Of Code To Senf Request
};
