document.addEventListener('DOMContentLoaded', function () {
    let slide1 = document.getElementById("slide1")
    window.addEventListener('scroll', function () {
        let scroll = window.scrollY
        if (scroll <= slide1.offsetTop + slide1.offsetHeight) {
            document.getElementById('topnavbar').classList.remove("visible");
            document.getElementById('topnavbar').classList.add("invisible");
        } else {
            document.getElementById('topnavbar').classList.remove("invisible");
            document.getElementById('topnavbar').classList.add("visible");
        }
    })
});