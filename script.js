alert("JS Connected");
document.getElementById("studentForm").onsubmit
=function (e){
    e.preventDefault();

    let name =
    document.getElementById("name").value;
    let email =
    document.getElementById("email").value;
    let mobile =
    document.getElementById("mobile").value;
    let password =
    document.getElementById("password").value;

    if(name ===""){
        alert("Name required");
        return;
    }

    if(email ===""){
        alert("Email required");
        return;
    }
    if (mobile.length !==10){
        alert("Mobile must be 10 digits");
        return;
    }

    if (password.length<6){
        alert("Password minimum 6 characters");
        return;
    }
    alert("Registration Successful!");
    document.getElementById("studentForm").reset();
};