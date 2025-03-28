document.getElementById("navbutton").addEventListener("click", function () {
    let content = document.getElementById("dropdown");
    
    if (content.style.height === "0px" || content.style.height === "") {
        content.style.height = "200px"; // Expand to full content height
    } else {
        content.style.height = "0px"; // Collapse
    }
});