document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#pillarBtn").addEventListener("click",
    function pillarBtn(){
        document.querySelector("#newsTab").classList.add('d-none');
        document.querySelector("#pillarTab").classList.remove('d-none');
        document.querySelector("#pillarTab").classList.add('d-block');
        if(document.querySelector("#newsBtn").classList.contains('d-none')){
            document.querySelector("#newsBtn").classList.remove('d-none');
        }
        document.querySelector("#newsSlider").classList.add('d-none');
        document.querySelector("#pillarSlider").classList.remove('d-none');
    })

    document.querySelector("#newsBtn").addEventListener("click",
    function newsBtn(){
        document.querySelector("#pillarTab").classList.add('d-none');
        document.querySelector("#newsTab").classList.remove('d-none');
        document.querySelector("#newsTab").classList.add('d-block');
        document.querySelector("#newsBtn").classList.add('d-none');
        document.querySelector("#pillarSlider").classList.add('d-none');
        document.querySelector("#newsSlider").classList.remove('d-none');
    })
});