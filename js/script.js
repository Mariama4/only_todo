let BtnShowModal = document.querySelector('.todo__button');
let BtnCloseModal = document.querySelector('.button--close');
let BtnAddModal = document.querySelector('.button--add');
let modal = document.querySelector('.modal');

function ModalShow() {
    modal.classList.remove('modal');
    modal.classList.add('modal--active');

}

function ModalClose() {
    modal.classList.remove('modal--active');
    modal.classList.add('modal');

}

// function AddSpan () {
    // let ModalInputValue = 'test'
    // let Span = document.querySelector('li.todo__item').cloneNode(true);
    // let ul = document.querySelector('.todo__list');
    // document.ul.appendChild(Span);

// }

BtnShowModal.onclick = () => ModalShow();
BtnCloseModal.onclick = () => ModalClose();
// BtnAddModal.onclick = () => AddSpan();

