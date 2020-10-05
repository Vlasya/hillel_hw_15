// Создать блок по центру экрана. При нажатии на стрелки – блок смещается в соответствующем направлении. Блок должен "упираться в экран", т.е. не может выйти за пределы экрана.
// 1) блок не вываливается за экран
// 2) при каждом "врезании" в стенку – блок отпрыгивает на step*2 пикселей в противоположном направлении.
// 3) При каждом отпрыгивании – по середине блока появляется надпись "БЭМС", которая исчезает через 2 секунды

let square=document.querySelector('.square');

let step=20;

let left=0;
let right=0;
let up=0;
let down=0;


document.onkeydown=function(event){
	let leftDoc=square.offsetLeft;
	let upDoc=square.offsetTop;
	let rightDoc=leftDoc+square.offsetWidth;
	let downDoc=upDoc+square.offsetHeight;

	if(event.code==="ArrowLeft"){
		square.style.left=left+'px';
		left-=step;
		if(leftDoc<=0){
			left=backTo(left);
			innerBom(square);
			deleteBom();
		}
	}

	if(event.code==="ArrowRight"){ 
		square.style.right=right+'px';
		right-=step;
		if(rightDoc>=square.offsetParent.offsetWidth){
			right=backTo(right);
			innerBom(square);
			deleteBom();
		}
	}
	if(event.code==="ArrowUp"){
		square.style.top=up+'px';
		up-=step;
		if(upDoc<=0){
			up=backTo(up);
			innerBom(square);
			deleteBom();
		}
	}
	
	if(event.code==="ArrowDown"){
		square.style.bottom= down+'px';
		down-=step;
		if(downDoc>=window.innerHeight){
			down=backTo(down);
			innerBom();
			deleteBom();
		}
	}
	
}

function backTo(val){
	return val=val+step*2
	
}
function deleteBom(){
	setTimeout(()=>{
		let innerP=document.querySelector('.innerP');
		if(innerP){
			innerP.remove();
		}
	
	},2000);
}
function innerBom(){
	square.innerHTML=`<p class='innerP'>БЭМС !</p>`
}












