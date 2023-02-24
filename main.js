let id = (id) => document.getElementById(id);
let classes = classes => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email");
    password = id("password");
    form = id("form");

    errorMsg = classes("error");
    successIcon = classes("success-icon");
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevent submitting by default

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Invalid Email");
    engine(password, 2, "Password cannot be blank");
});

let engine = (id, serial, message) => { //id will target our id, serial will target our classes [error class, success and failure icons], message will print a message inside our .error class
    if (id.value.trim() === "") { //remove all extra white spaces
        errorMsg[serial].innerHTML = message; //trigger error smsg
        id.style.border = "2px solid red"; //trigger error border

        //icons
        failureIcon[serial].style.opacity = "1"; //show failure icon
        successIcon[serial].style.opacity = "0"; //hide failure icon
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}