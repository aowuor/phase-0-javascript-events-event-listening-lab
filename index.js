function addingEventListener(event) {
    let input = document.getElementById("input");
    input.addEventListener(event, function(){
        alert("I was clicked")
    })
}
addingEventListener("click")