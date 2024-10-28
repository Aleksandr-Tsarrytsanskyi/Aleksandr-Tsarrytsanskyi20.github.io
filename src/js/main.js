document.addEventListener("DOMContentLoaded", function() {
    const callback = document.querySelector(".callback input[type='submit']");
    const call = document.querySelector("#call");
    const order = document.querySelector("#order");
    const userApi = document.querySelector("#userApi");
    
    callback.addEventListener("click", function(event) {
        event.preventDefault();
    })
    order.addEventListener("click", function(event) {
        event.preventDefault();
        call.classList.add("show_callback")
    })

    userApi.addEventListener("submit", function(event) {
        event.preventDefault();
        document.location.assign("./request.html");
    })

})
