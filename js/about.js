document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".knap.vismereknap");
    
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            showMore(`mereTekst${index + 1}`, button);
        });
    });
});

function showMore(mereTekstId, button) {
    var mereTekst = document.getElementById(mereTekstId);

    if (mereTekst.style.display === "none" || mereTekst.style.display === "") {
        mereTekst.style.display = "inline";
        button.textContent = "READ LESS";
    } else {
        mereTekst.style.display = "none";
        button.textContent = "READ MORE";
    }
}
