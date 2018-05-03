function hacerLogin(frm){
	let xhr = new XMLHttpRequest();
	let	url = 'http://localhost/pcw/practica02/rest/login/';

	let	fd = new FormData(frm);
	let loginFrm= document.getElementById("login");
  console.log(loginFrm.value);


		xhr.open('POST',url, true);

		xhr.onload=function(){

			let du=JSON.parse(xhr.responseText);

      console.log(du);

			if(du.RESULTADO =='OK'){
				sessionStorage['du']=xhr.responseText;
        window.location='http://localhost/pcw/practica02/index.html';
			}
			if(du.DESCRIPCION =='Login/password no correcto'){

				loginFrm.style.borderColor = '#F70000';

			}else{
				loginFrm.style.borderColor = '#4EF548';
			}
		}
		xhr.send(fd);

	return false;
}

function comprobarLogin(){
	if(sessionStorage.getItem("du")!=null){
		window.location='http://localhost/pcw/practica02/index.html';
	}
}

function logout(){
	sessionStorage.removeItem('du');
}

function menu(){
			if(sessionStorage.getItem("du")==null){ //Usuario no registrado
				let html= '';
					html += '<div class="barranavegacion">';
					html += '<nav id="barranavegacionid">';
					html += '<input type="checkbox"';
					html += '<label>';
					html += '<i class="fa fa-bars">';
					html += '</label>';
					html += '<ul>';
					html += '<li>';
					html += '<a href="index.html">'+"Inicio";
					html += '</a>';
					html += '</li>';
					html += '<li>';
					html += '<a href="login.html">'+"Log in";
					html += '</a>';
					html += '</li>';
					html += '<li>';
					html += '<a href="buscar.html">'+"Buscar";
					html += '</a>';
					html += '</li>';
					html += '<li>';
					html += '<a href="registro.html">'+"Registro";
					html += '</a>';
					html += '</li>';
					html += '</ul>';
					html += '</nav>';
					html += '</div>';
					document.getElementById('menujs').innerHTML = html;
			}else{
				let html= '';
					html += '<div class="barranavegacion">';
					html += '<nav id="barranavegacionid">';
					html += '<input type="checkbox"';
					html += '<label>';
					html += '<i class="fa fa-bars">';
					html += '</label>';
					html += '<ul>';
					html += '<li>';
					html += '<a href="index.html">'+"Inicio";
					html += '</a>';
					html += '</li>';
					html += '<li>';
					html += '<a href="nueva_entrada.html">'+"Nueva entrada";
					html += '</a>';
					html += '</li>';
					html += '<li>';
					html += '<a href="buscar.html">'+"Buscar";
					html += '</a>';
					html += '</li>';
					html += '<li>';
					html += '<a onClick="logout();" href="index.html">'+"Log out";
					html += '</a>';
					html += '</li>';
					html += '</ul>';
					html += '</nav>';
					html += '</div>';
					document.getElementById('menujs').innerHTML = html;
			}


		return false;  //Per a que no es recarregue la pag i puga vore el error
}
