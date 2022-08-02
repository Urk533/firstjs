function gitEx(){
	alert("Github is essential for programmer");
}

function gitLoad(){
	var elm = document.getElementById('circle');
	elm.addEventListener('click', gitEx);
}
document.addEventListener('DOMContentLoaded', gitLoad);