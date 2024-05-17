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