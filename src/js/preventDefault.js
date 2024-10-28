document.addEventListener("DOMContentLoaded", function() { 
    const callback = document.querySelector(".callback input[type='submit']");

    callback.addEventListener("click", function(event) {
        event.preventDefault();
    })
})