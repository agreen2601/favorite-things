const container = document.getElementById("container")

document.getElementById("saveToWishlist").addEventListener("click", event => {

    const thing = document.getElementById("thing").value
    const place = document.getElementById("place").value

    container.innerHTML += `
        <section>
            <h1>I can purchase ${thing} at ${place}</h1>
        </section>
    `
})