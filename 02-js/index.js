//document.querySelectorAll('li').forEach(el => el.onclick = event => event.target.classList.add('done'));

function toggleDone(element){
        element.classList.toggle('done')
}
document.querySelectorAll('li').forEach(function (el) {
    el.onclick = function(event) {
        toggleDone(event.target);
    }
});


