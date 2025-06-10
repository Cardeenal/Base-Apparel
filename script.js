document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // prevent actual form submission

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let mail = document.getElementById("email").value;
    console.log(mail);
    let message = document.getElementById("text");
   
    if (regex.test(mail)){
        message.innerHTML = "Submission successful"
    }else {
        message.innerHTML = "Submission unsuccesful"
    }
});
