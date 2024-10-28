document.addEventListener("DOMContentLoaded", function() {
    const call = document.querySelector("#call");
    const order = document.querySelector("#order");
    const userApi = document.querySelector("#userApi");
    
    order.addEventListener("click", function(event) {
        event.preventDefault();
        call.classList.add("show_callback")
    })

    userApi.addEventListener("submit", function(event) {
        event.preventDefault();
        document.location.assign("./request.html");
    })

})
