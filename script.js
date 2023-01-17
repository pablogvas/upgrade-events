var button = document.getElementById("btnToClick");
button.addEventListener("click", function(event) {
    console.log(event);
});

const focus = document.querySelector("#input1");
focus.addEventListener("focus", function() {
    console.log(this.value);
});


const input = document.querySelector("#input2");
input.addEventListener("input", function() {
    console.log(this.value);
});