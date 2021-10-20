const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")


setTimeout(() => {
    message.style.display= "none";
    message = "";
    }, 5000);

close.addEventListener("click", function(){
    message.style.display = "none";
    message = "";
});
