document.addEventListener("DOMContentLoaded", function() { 
    const call = document.querySelector("#call");
    const userApi = document.querySelector("#userApi");

    call.classList.add("show_callback1")

    userApi.addEventListener("submit", function(event) {
        event.preventDefault();
        document.location.assign("./request.html");
    })
})