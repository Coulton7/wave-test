document.addEventListener("DOMContentLoaded", function () {
    var ids = [];

    function initArray() {
        var img = document.querySelectorAll(".img-bank img");
        img.forEach(div => {
            var src = div.getAttribute("src");
            ids.push.src;         
        });
    }

    function randomArray() {
        var tempIds = ids.slice();
        var myIds = [];
        for( var i = 0; i < 12; i++) {
            var randomId = (Math.floor(Math.random() * tempIds.length) + 1);

            var myId = tempIds[randomId - 1];

            myIds.push(myId);

            var pos = tempIds.indexOf(myId);

            tempIds.splice(pos, 1);
        }
        return myIds;
    }
    initArray();

    function changeSrc() {
        var result = randomArray();
        var cells = document.querySelectorAll(".gallery .col-2");
        var randomId = (Math.floor(Math.random() * cells.length));
        var cell = cells.item(randomId);

        cell.querySelectorAll("img:not([style*='display:none'])").forEach(index => {
            index.getAttribute("src", result[index]);
        });
        cells.getElementsByTagName("img").fadeToggle(1500);
    }

    setInterval(function() {
        changeSrc();
    }, 2000);
})