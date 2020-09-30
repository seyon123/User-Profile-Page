// 0,1 or space
const getRandomNum = () => Math.random() < 0.4 ? '0' : Math.random() < 0.66 ? '1' : ' ';

createBgNumbers();
setInterval(changeNumbers, 2000);

// create a random grid of 0,1, or space for background
function createBgNumbers() {
	const size = 50;
	const row = Math.ceil(window.innerWidth / size);
	const col = Math.ceil(window.innerHeight / size);
	
	for(let i=0; i<row; i++){
		for(let j=0; j<col; j++){
			const num = document.createElement('div');
			num.classList.add('num');
			num.style.left = `${i * size}px`;
			num.style.top = `${j * size}px`;
			num.innerHTML =`<span>${getRandomNum()}</span>`;
			num.style.color = Math.random() < 0.4 ? '#fff' : '#2f3542';
			document.body.appendChild(num);
		}
	}
}

function changeNumbers() {
	const nums = document.querySelectorAll('.num');
	
	nums.forEach(num => {
		num.innerHTML =`<span>${getRandomNum()}</span>`;
		num.style.color = Math.random() < 0.4 ? '#fff' : '#8E61E2';
	});
}