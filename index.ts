const userForm=document.querySelector(".user-form") as HTMLFormElement;
console.log(userForm);

const userName=document.querySelector("#name") as HTMLInputElement;

const userEmail=document.querySelector("#email") as HTMLInputElement;

const userFeedback=document.querySelector("#feedback") as HTMLTextAreaElement;

const userCountry=document.querySelector("#country") as HTMLSelectElement;
// console.log(userName);

userForm.addEventListener("submit",(event:Event)=>{
    event.preventDefault();
    const data={
        username:userName.value,
        useremail:userEmail.value,
        usercountry:userCountry.value,
        userfeedback:userFeedback.value,
    };
    console.log(data);
})