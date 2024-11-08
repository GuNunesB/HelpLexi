window.onscroll = function () {
    var btn = document.getElementById("btnTopo");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
};

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}