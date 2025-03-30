document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.getElementById("dropdown");

    document.getElementById("navbutton").addEventListener("click", function () {
        if (dropdown.classList.contains("active")) {
            dropdown.style.height = "0px"; // Collapse smoothly
            dropdown.style.opacity = "0";  // Fade out
            dropdown.classList.remove("active");

            setTimeout(() => {
                dropdown.style.display = "none"; // Hide only after transition ends
            }, 300); // Matches CSS transition duration
        } else {
            dropdown.style.display = "flex"; // Show before expanding
            dropdown.style.height = dropdown.scrollHeight +100 + "px"; // Expand smoothly
            dropdown.style.opacity = "1";  // Fade in
            dropdown.classList.add("active");
        }
    });
});