document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#pillarBtn").addEventListener("click",
    function pillarBtn(){
        document.querySelector("#newsTab").classList.add('d-none');
        document.querySelector("#pillarTab").classList.remove('d-none');
        document.querySelector("#pillarTab").classList.add('d-block');
        if(document.querySelector("#newsBtn").classList.contains('invisible')){
            document.querySelector("#newsBtn").classList.remove('invisible');
            document.querySelector("#newsBtn").classList.add('visible')
        }
        document.querySelector(".news-slider").classList.add('d-none');
        document.querySelector(".pillar-slider").classList.remove('d-none');
        document.querySelector("#pillarCounter").classList.remove('d-none');
        document.querySelector("#pillar-controls").classList.remove('d-none');
        document.querySelector("#newsCounter").classList.add('d-none');
        document.querySelector("#news-controls").classList.add('d-none');
    })

    document.querySelector("#newsBtn").addEventListener("click",
    function newsBtn(){
        document.querySelector("#pillarTab").classList.add('d-none');
        document.querySelector("#newsTab").classList.remove('d-none');
        document.querySelector("#newsTab").classList.add('d-block');
        document.querySelector("#newsBtn").classList.add('invisible');
        document.querySelector("#newsBtn").classList.remove('visible');
        document.querySelector(".pillar-slider").classList.add('d-none');
        document.querySelector(".news-slider").classList.remove('d-none');
        document.querySelector("#pillarCounter").classList.add('d-none');
        document.querySelector("#pillar-controls").classList.add('d-none');
        document.querySelector("#newsCounter").classList.remove('d-none');
        document.querySelector("#news-controls").classList.remove('d-none');
    })
});