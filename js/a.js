const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('.open-modal-btn');
const fechar = document.querySelector('.fechar');

openModalBtn.addEventListener('click', () => {
modal.style.display = 'flex';
});

fechar.addEventListener('click', () => {
modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
if (e.target === modal) {
   modal.style.display = 'none';
}
});