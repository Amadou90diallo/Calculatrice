
let resultat = document.getElementById('resultat');

let buttons = Array.from(document.getElementsByClassName('bouton'));

console.log(buttons);

buttons.map( bouton => {
	bouton.addEventListener('click', (e) => {
		switch(e.target.innerText){
			case 'C':
				resultat.innerText = 'Résult:';
				break;
			case '←':
				if (resultat.innerText) {
				    resultat.innerText = resultat.innerText.slice(0, -1);
				}
				break;
			case '=':
				try{
				   resultat.innerText = resultat.innerText +'  =  '+ eval(resultat.innerText);
				}catch{
				   resultat.innerText = 'Baayil roubé way' 
				}
				break;
			default:
				resultat.innerText += e.target.innerText;
		}
	});
});

