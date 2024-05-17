function showMore(moreTextId, btn) {
    var moreText = document.getElementById(moreTextId);

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btn.textContent = "READ LESS";
    } else {
        moreText.style.display = "none";
        btn.textContent = "READ MORE";
    }
}