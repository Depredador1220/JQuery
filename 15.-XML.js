$(document).ready(function()
{
	$('select#addressCountry').click(function()
	{
		$.get(
				'Estados/' + this.value + ".xml",

				function(xml)
				{
					//Hago el query XML con jQuery
					xml = $(xml);

					//Obtengo el valor ISO2 que use para el nombre de archivo de la bandera
					var iso2 = xml.find('iso2').text();

					//Intercambio la imagen de la bandera
					$('div#addressCountryWrapper img').attr({
						alt: xml.find('name'),
						src: 'Banderas/' + iso2.toLowerCase() + '.png'
					});

					//Remuevo todas las opciones
					$('select#addressState').empty();

					//Ajusto los estados
					xml.find('state').each(function()
					{
						$('select#addressState').append(
								$("<option/>")
								.attr('value', $(this).attr('id'))
								.text($(this).text())
							);
					});

					//Cambio el label
					$('label[for="addressState"]').text(
						xml.find('label').text() + ':');
				}, 
				'xml'
			);
	});

	$('select#addressCountry').click();
});
