function signupform() {
      
    document.getElementById("signupForm").style.display = "block";

    document.getElementById("loginForm").style.display  = "none";

}

function loginform() {

    document.getElementById("signupForm").style.display = "none";

    document.getElementById("loginForm").style.display  = "block";

}
function loginPage() {
      
    document.getElementById("login").style.display = "block";

    document.getElementById("success").style.display  = "none";

}

function regPage() {

    document.getElementById("login").style.display = "none";

    document.getElementById("sucess").style.display  = "block";

}
/* function sucessPage(){
    let success = document.getElementById("sucess");
    let username = document.getElementById("username").value;

    // ✅ Create element
    const el = document.createElement('p');

    // ✅ Add classes to element
    el.classList.add('bg-red', 'text-md');

    // ✅ Add text content to element
    el.textContent = username;

    // ✅ Or set the innerHTML of the element
    // el.innerHTML = `<span>One, two, three</span>`;

    // ✅ add element to DOM
    /* const box = document.getElementById('box'); 
    success.appendChild(el);
} 
*/
/* const signup = document.getElementById("signup");
signup.addEventListener('click', ()=>{
    
        let success = document.getElementById("sucess");
        let username = document.getElementById("username").value;
    
        // ✅ Create element
        const el = document.createElement('p');
    
        // ✅ Add classes to element
        el.classList.add('bg-red', 'text-md');
    
        // ✅ Add text content to element
        el.textContent = username;
    
        // ✅ Or set the innerHTML of the element
        // el.innerHTML = `<span>One, two, three</span>`;
    
        // ✅ add element to DOM
        /* const box = document.getElementById('box'); 
        success.appendChild(el);
    
}); */