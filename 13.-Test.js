$(document).ready(function()
{
	var name = 'The Beatles';
	var madeArray = $.makeArray(name);

	console.log('Transformando un string');
	console.log('Tipo: ' + typeof(madeArray));
	console.log('¿Es Arreglo? ' + (madeArray instanceof Array? 'Si' : 'no'));
	console.log(madeArray);

	var madeArray = {
		band1: "The Beatles",
		band2: "Electric Light Orchestra",
		band3: "The Moody Blues",
		band4: "Radiohead",
	};

	madeArray = $.makeArray(madeArray);

	console.log('Transformando un objeto');
	console.log('Tipo: ' + typeof(madeArray));
	console.log('¿Es Arreglo? ' + (madeArray instanceof Array? 'Si' : 'no'));
	console.log(madeArray);

	var madeArray = 1;

	madeArray = $.makeArray(madeArray);

	console.log('Transformando un numero');
	console.log('Tipo: ' + typeof(madeArray));
	console.log('¿Es arreglo? ' + (madeArray instanceof Array? 'Si' : 'no'));
	console.log(madeArray);
});
