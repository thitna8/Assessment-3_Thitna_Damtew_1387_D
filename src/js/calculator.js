
let display = document.getElementById("display");

let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    
    if (button.classList.contains('equal')) {
        button.addEventListener("click", function() {
            try {
                
                display.value = eval(display.value);
            } catch (error) {
                
                display.value = "Error";
            }
        });
    }
   
    else if (button.id === 'clear') {
        button.addEventListener("click", function() {
            
            display.value = "";
        });
    }
    else {
        button.addEventListener("click", function() {
            let value = button.getAttribute("data-value");
            display.value += value;
        });
    }
});
