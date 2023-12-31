let hideText_Btn = document.getElementById('hideText_Btn');

let hideText = document.getElementById('hideText');

hideText_Btn.addEventListener('click',toggleText);

function toggleText() {
    hideText.classList.toggle('show');

    if  (hideText.classList.contains('show')){
        hideText_Btn.innerHTML = 'Read less';
    }
    else{
        hideText_Btn.innerHTML = 'Read more...';
    }
}

document.getElementById("hideText_Btn").addEventListener("click", function() {
    var hideText = document.getElementById("hideText");
    hideText.style.display = (hideText.style.display === "none" || hideText.style.display === "") ? "block" : "none";
});