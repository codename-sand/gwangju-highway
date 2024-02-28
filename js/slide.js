document.addEventListener("DOMContentLoaded", function () {
    var panel = document.querySelector(".slide_banner ul");
    var itemWidth = panel.children[0].offsetWidth;
    var itemLength = panel.children.length;
    var rollingId;

    function rollingStart() {
        var panel = document.querySelector(".slide_banner ul");
        var itemWidth = panel.children[0].offsetWidth;
        panel.style.width = itemWidth * panel.children.length + "px";
        panel.style.transition = "left 0.6s ease-in-out";
        panel.style.left = -itemWidth + "px";

        var firstChild = panel.querySelector("li:first-child");
        panel.appendChild(document.createElement("li")).innerHTML = firstChild.innerHTML;
        panel.removeChild(firstChild);

        setTimeout(function () {
            panel.style.transition = "";
            panel.style.left = 0;
        }, 600);
    }

    auto();

    rollingId = setInterval(function () { rollingStart(); }, 3000);

    panel.addEventListener("mouseover", function () {
        clearInterval(rollingId);
    });

    panel.addEventListener("mouseout", function () {
        rollingId = setInterval(function () { rollingStart(); }, 3000);
        auto();
    });

    function auto() {
        rollingId = setInterval(function () {
            start();
        }, 2000);
    }

    function start() {
        panel.style.width = itemWidth * itemLength + "px";
        var firstChild = panel.querySelector("li:first-child");
        panel.style.left = -itemWidth + "px";

        panel.appendChild(document.createElement("li")).innerHTML = firstChild.innerHTML;
        panel.removeChild(firstChild);
        panel.style.left = 0;
    }
});
