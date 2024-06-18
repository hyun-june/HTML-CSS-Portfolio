const Modal1 = new bootstrap.Modal(document.getElementById('Modal-1'));
const Modal2 = new bootstrap.Modal(document.getElementById('Modal-2'));
const Modal3 = new bootstrap.Modal(document.getElementById('Modal-3'));
const Modal4 = new bootstrap.Modal(document.getElementById('Modal-4'));
const Modal5 = new bootstrap.Modal(document.getElementById('Modal-5'));

const ModalClosebtn = document.querySelectorAll('.modal-closebtn');

let ModalList = [Modal1 , Modal2, Modal3, Modal4, Modal5];

 const closebtn = () => {
    ModalList.forEach(modal => modal.hide());
};

ModalClosebtn.forEach(buttons =>{
    buttons.addEventListener("click",closebtn)
})

const openModal1 = () => {
    Modal1.show();
}

const openModal2 = () => {
    Modal2.show();
}

const openModal3 = () => {
    Modal3.show();
}

const openModal4 = () => {
    Modal4.show();
}

const openModal5 = () => {
    Modal5.show();
}
