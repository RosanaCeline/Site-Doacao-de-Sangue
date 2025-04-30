const comments = document.querySelectorAll('.donor-comment');
const leftButtons = document.querySelectorAll('.arrow-button img[src*="left-arrow"]');
const rightButtons = document.querySelectorAll('.arrow-button img[src*="right-arrow"]');
let current = 0;

function showComment(index) {
comments.forEach((comment, i) => {
    comment.classList.toggle("active", i === index);
});
}


showComment(current); // mostra o primeiro

rightButtons.forEach(btn => {
btn.addEventListener('click', () => {
    current = (current + 1) % comments.length;
    showComment(current);
});
});

leftButtons.forEach(btn => {
btn.addEventListener('click', () => {
    current = (current - 1 + comments.length) % comments.length;
    showComment(current);
});
});

document.getElementById("schedule-button").addEventListener("click", function(event){
    alert("Visita agendada! Esperamos por você.")
})