const scrolling = document.querySelectorAll("[data-scroll]");

// Scrooling To
scrolling.forEach(btn => {
    btn.addEventListener("click", ()=> {
        const elment = document.getElementById(btn.getAttribute("data-scroll")).offsetTop;
        window.scrollTo({top:elment, behavior:"smooth"})
    });
});

// if(url.include('code=')){ =>>>>>>> TEST IF TRUE IN FORGET PASSWORD PAGE
//     const newPassword = `
//     <h2>Forget Password</h2>
//     <form autocomplete="off">
//     <label for="pass">New Password</label>
//     <input type="password" id="pass" required>
//     <p class="error-msg"></p>

//     <label for="pass">Repeat Password</label>
//     <input type="password" id="pass2" required>
//     <p class="error-msg"></p>
    
//     <button type="submit">CONFIRM</button>
//     </form>
//     `;
//     document.querySelector(".forgetpassword .form").innerHTML = newPassword;
// }