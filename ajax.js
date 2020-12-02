function buscaCep() {
	let inputCep = document.querySelector('input[id=cep]');
	let cep = inputCep.value.replace('-', '');
	let url = 'http://viacep.com.br/ws/' + cep + '/json';
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status = 200)
				preencheCampos(xhr.responseText);
				console.log(JSON.parse(xhr.responseText));
		}
	}
	xhr.send();
}

function preencheCampos(json) {

	var elemento_pai = document.getElementById('centro');
	var conteudo = document.createElement('textarea');
	conteudo.setAttribute("id", "resultado");
	conteudo.setAttribute("rows", "15");
	conteudo.setAttribute("cols", "50");
	var texto = document.createTextNode(json);
	conteudo.appendChild(texto);
	elemento_pai.appendChild(conteudo);


}