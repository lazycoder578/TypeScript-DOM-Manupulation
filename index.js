var userForm = document.querySelector(".user-form");
console.log(userForm);
var userName = document.querySelector("#name");
var userEmail = document.querySelector("#email");
var userFeedback = document.querySelector("#feedback");
var userCountry = document.querySelector("#country");
// console.log(userName);
userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = {
        username: userName.value,
        useremail: userEmail.value,
        usercountry: userCountry.value,
        userfeedback: userFeedback.value
    };
    console.log(data);
});
