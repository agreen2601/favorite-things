const container = document.getElementById("container")

document.getElementById("saveToWishlist").addEventListener("click", event => {
    if (document.getElementById("thing").value === ""
        ||
        document.getElementById("place").value === "") {
    alert("Ya left a field blank ya dingus!")
} else {

    const thing = document.getElementById("thing").value
    const place = document.getElementById("place").value

    /*
    clears DOM if desired 
    container.innerHTML = ""
    */
    
    container.innerHTML += `
        <section>
            <h1>I can purchase ${thing} at ${place}</h1>
        </section>
    `
    document.getElementById("thing").value = "";
    document.getElementById("place").value = "";
    document.getElementById("thing").focus();
};
})