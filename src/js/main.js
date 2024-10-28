document.addEventListener("DOMContentLoaded", function() {
    const call = document.querySelector("#call");
    const order = document.querySelector("#order");
    const userApi = document.querySelector("#userApi");
    const more = document.querySelector("#investments .more");
    const items = document.querySelectorAll(".item")
    const  closeForm  = document.querySelector("#call .close")
    const request = document.querySelector("#request");
    items.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            disabledScroll();
            call.classList.add("show_callback")
        })
    });

    order.addEventListener("click", function(event) {
        event.preventDefault();
        call.classList.add("show_callback")
        call.classList.remove("hide_callback");
        disabledScroll();
    })

    userApi.addEventListener("submit", function(event) {
        event.preventDefault();
       
        call.style.display = "none"
        request.classList.add("show_request");
    })

    closeForm.addEventListener("click", function() {
        anabladeScroll();
        call.classList.remove("show_callback");
        call.classList.add("hide_callback");
    })

    function disabledScroll() {
        document.body.style.cssText = `
        overflow: hidden;
        position: relative;
        height: 100vh;   `
    }

    function anabladeScroll() {
        document.body.style.cssText = `
        overflow: visible;
        position: relative;
        height: 100vh;   
        `
    }

})
