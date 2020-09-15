$(document).ready(function()
{
	$('select#addressCountry').click(
			function()
			{
				$.getJSON(
						'Estados/' + this.value + '.json',
						function(json)
						{
							//Intercambio la bandera de la imagen
							$('div#addressCountryWrapper img').attr({
								alt: json.name,
								src: 'Banderas/' + json.iso2.toLowerCase() + '.png'
							});

							//Remueve todas las opciones
							$('select#addressState').empty();

							//Establece los estados
							$.each(
								json.states,
								function(id, state)
								{
									$('select#addressState').append(
										$('<option/>')
										.attr('value', id)
										.text(state)
										);
								});

							//Cambio el label
							$('label[for="addressState"]').text(
								json.label + ':');
						}
					);
			}
		);
	$('select#addressCountry').click();
});
