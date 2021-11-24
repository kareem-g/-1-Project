// Btn Click
const linkButton = document.querySelector("#captcha article button");
let adedd = true;
linkButton.onclick = async function() {
    adedd = true;
    let code = createCaptcha().toLowerCase();
    const { value: trueCaptcha } = await Swal.fire({
        title: 'Captcha',
        showCloseButton: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#0088FF',
        html: 
        `
        <div class="captcha">
            <article></article>
            <label for="captch-input">Write what you see</label>
            <input type="text" id="captch-input" maxlength="7" autocomplete="off">
            <p>Change image! <span>Change</span></p>
        </div>
        `,
        preConfirm: () => {
            return document.getElementById("captch-input").value.toLowerCase();
        }
    });
    // Check True Captcha Or False
    if (trueCaptcha === code) {
        let msg = 'success';
        let stats = 'A Point Has Been Added';
        getCheckBaneer(msg, stats);
        AddedPoint();
    }else{
        let msg = 'error';
        let stats = 'Error Captcha Try Agin 3>';
        getCheckBaneer(msg, stats);
    }
};
function AddedPoint(){
    // => Here Add Block Of Cod To Send Request To DB
    console.log("point++");
}
function getCheckBaneer(stats, msg){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({icon: stats, title: msg})
};
// Create Captcha Function
function createCaptcha(){
    const All   = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890#$&%!*";
    const limit = 6;
    let code  = [];
    for(let i = 0; i < limit; i++){
        const N = Math.floor(Math.random() * All.length) 
        code.push(All[N])
    }
    code = code.join("");
    // Create Canvas
    const canves = document.createElement("canvas");
    canves.width = '280';
    canves.height = '280';
    const ctx = canves.getContext("2d");
    // Add Captcha In Canvas
    const fonts = ["Georgia", "fantasy", "cursive"];
    let num = Math.floor(Math.random() * fonts.length);
    // Add Font
    ctx.font = "50px cursive";
    ctx.strokeText(code, 40, 150);
    // Html Retrn
    setTimeout(() => {
        const article = document.querySelector(".swal2-html-container article");
        article.innerHTML = '';
        article.appendChild(canves);
        // Change Captcha
        const button2 = document.querySelector(".swal2-html-container p span");
        adedd ? button2.addEventListener("click", () => {
            adedd = false;
            linkButton.click();
        }) : "";
    }, 0);
    return code;
};