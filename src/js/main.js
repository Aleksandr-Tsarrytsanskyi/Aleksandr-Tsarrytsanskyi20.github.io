document.addEventListener("DOMContentLoaded", function() {
    const call = document.querySelector("#call");
    const order = document.querySelector("#order");
    const userApi = document.querySelector("#userApi");
    const more = document.querySelector("#investments .more");
    const items = document.querySelectorAll(".item")
    const  closeForm  = document.querySelector("#call .close")
    const request = document.querySelector("#request");
    const hamburgerMenu = document.querySelector("#hamburger_menu");
    const topmenu = document.querySelector("#header .cell:nth-child(2)");
    const span1 = document.querySelector("#hamburger_menu .first_child");
    const span2 = document.querySelector("#hamburger_menu .last_shild");
    const span3 = document.querySelector("#hamburger_menu .center");
    console.log(span1, span2, span3);
    
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
        call.classList.add("hide_callback");
        call.classList.remove("show_callback");
    })

    hamburgerMenu.addEventListener("click", function() {
        topmenu.classList.toggle("show_hamburger")
        span1.classList.toggle("icon1")
        span2.classList.toggle("icon3")
        span3.classList.toggle("none")
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
