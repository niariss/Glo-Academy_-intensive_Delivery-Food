const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


//1 day

//всплывающее окно авторизации

const buttonAuth = document.querySelector('.button-auth'); // кнопка авторизации
const modalAuth =  document.querySelector('.modal-auth'); // скрытый элемент css логин/пароль
const closeAuth =  document.querySelector('.close-auth'); //кнопка выход (крестик) 
const logInForm = document.querySelector('#logInForm'); //id формы введения логина и пароля
const loginInput = document.querySelector('#login'); // id окна введения логина
const userName = document.querySelector('.user-name'); //скрытый spane отображене логина
const buttonOut = document.querySelector('.button-out'); // скрытая кнопка выйти, активация после авторизации

let login = localStorage.getItem('gloDelivery'); //переменная при вводе авторизации


function toogleModalAuth() {
  modalAuth.classList.toggle('is-open'); //отключение/подключение класса

}

function authorized() {

  function logOut() {
    login = null;  //логин пуст, постая строка - ложь
    localStorage.removeItem('gloDelivery');
    buttonAuth.style.display = ''; //возврат к норме прописанной в сss
    userName.style.display = ''; //возврат к норме прописанной в сss
    buttonOut.style.display = ''; //возврат к норме прописанной в сss
    buttonOut.addEventListener('click', logOut);
    checkAuth(); //вызов функции проверки авторизаци
  }

    userName.textContent = login;

    buttonAuth.style.display = 'none'; // при авторизации кнопка ищезает. класс/стили css/ свойства / присваивание
    userName.style.display = 'inline';
    buttonOut.style.display = 'block'; 

    buttonOut.addEventListener('click', logOut);

   
  }
 

function notAuthorized() {

   function logIn(event) {
   event.preventDefault();
   login = loginInput.value;

   localStorage.setItem('gloDelivery', login);

   toogleModalAuth();  //отключение/подключение класса
buttonAuth.removeEventListener('click', toogleModalAuth); //открывается по клику на кнопку войти
closeAuth.removeEventListener('click', toogleModalAuth); // закрыие по клику на крестик
logInForm.removeEventListener('sumbit', logIn);
logInForm.reset();
checkAuth(); //вызов функции проверки авторизации
}
 buttonAuth.addEventListener('click', toogleModalAuth); //открывается по клику на кнопку войти
closeAuth.addEventListener('click', toogleModalAuth); // закрыие по клику на крестик
logInForm.addEventListener('sumbit', logIn); 
}

function checkAuth(){                   
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }                                            //если логин - правда, то авторизация, если - ложь, то не авторизация
}

checkAuth();

