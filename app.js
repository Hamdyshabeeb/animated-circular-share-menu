/**@type{HTMLUListElement|null} */
const menuList = document.querySelector('.menu-list');
/**@type{HTMLButtonElement|null} */
const menuControle = document.querySelector('.menu-controle');

menuControle.addEventListener('click', () => {
	menuList.classList.toggle('active');
});
