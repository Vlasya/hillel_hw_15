// Создать блок по центру экрана. При нажатии на стрелки – блок смещается в соответствующем направлении. Блок должен "упираться в экран", т.е. не может выйти за пределы экрана.
// 1) блок не вываливается за экран
// 2) при каждом "врезании" в стенку – блок отпрыгивает на step*2 пикселей в противоположном направлении.
// 3) При каждом отпрыгивании – по середине блока появляется надпись "БЭМС", которая исчезает через 2 секунды

let square=document.querySelector('.square');
// наш шаг
let step=20;
// Штучки для изменения стилей
let left=0;
let right=0;
let up=0;
let down=0;

// Двигалка
document.onkeydown=function(event){
	// Левая граница дива(совпадает с левой границей документа)
	let leftDoc=square.offsetLeft;
	// Верхняя дива(совпадает с правой границей документа)
	let upDoc=square.offsetTop;
	// Правая граница дива= левая+ширина квадратика
	let rightDoc=leftDoc+square.offsetWidth;
	// Нижняя граница дива=верхняя+высота квадратика
	let downDoc=upDoc+square.offsetHeight;

	if(event.code==="ArrowLeft"){
		square.style.left=left+'px';
		left-=step;
		// если левая граница дива <= левой границы документа
		if(leftDoc<=0){
			left=backTo(left);
			innerBom(square);
			deleteBom();
		}
	}

	if(event.code==="ArrowRight"){ 
		square.style.right=right+'px';
		right-=step;
		// Если правая граница дива >= ширины родителя дива
		if(rightDoc>=square.offsetParent.offsetWidth){
			right=backTo(right);
			innerBom(square);
			deleteBom();
		}
	}
	if(event.code==="ArrowUp"){
		square.style.top=up+'px';
		up-=step;
		// если верхняя граница дива <= верхней границы документа
		if(upDoc<=0){
			up=backTo(up);
			innerBom(square);
			deleteBom();
		}
	}
	
	if(event.code==="ArrowDown"){
		square.style.bottom= down+'px';
		down-=step;
		// если нижняя граница >= нижней границы документа
		if(downDoc>=window.innerHeight){
			down=backTo(down);
			innerBom();
			deleteBom();
		}
	}
	
}
// Изменяем шаг при отскакивании
function backTo(val){
	return val=val+step*2
	
}
// Удалялка текста
function deleteBom(){
	setTimeout(()=>{
		let innerP=document.querySelector('.innerP');
		if(innerP){
			innerP.remove();
		}
	
	},2000);
}
// Добавлялка текста
function innerBom(){
	square.innerHTML=`<p class='innerP'>БЭМС !</p>`
}












