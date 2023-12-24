let header = document.querySelector("header");
let btn = document.querySelector("button");
let bi = document.querySelector(".bi");

btn.addEventListener("click", () => {
    if (bi.classList.contains("bi-sun")) {
        header.classList.add("tun");
        header.classList.remove("kun");
        bi.classList.remove("bi-sun")
        bi.classList.add("bi-moon")
    } else {
        header.classList.remove("tun");
        header.classList.add("kun");
        bi.classList.remove("bi-moon")
        bi.classList.add("bi-sun")
    }
});