document.addEventListener("DOMContentLoaded", function() {
    const call = document.querySelector("#call");
    const order = document.querySelector("#order");
    const userApi = document.querySelector("#userApi");
    const more = document.querySelector("#investments .more");
    const items = document.querySelectorAll(".item")
    items.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            call.classList.add("show_callback")
        })
    });

    order.addEventListener("click", function(event) {
        event.preventDefault();
        call.classList.add("show_callback")
        disabledScroll();
    })

    userApi.addEventListener("submit", function(event) {
        event.preventDefault();
        document.location.assign("./request.html");
    })

    function disabledScroll() {
        document.body.style.cssText = `
        overflow: hidden;
        position: relative;
        height: 100vh;
        width: 100vw
        `
    }

})
