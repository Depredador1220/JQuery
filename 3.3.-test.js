$(document).ready(
	function()
	{
		$('button#documentAddClass').click(
			function(event)
			{
				event.preventDefault();

				$('table').addClass('johnLennonAlbums');
			}
		);

		$('button#documentHasClass').click(
			function(event)
			{
				event.preventDefault();

				if($('table').hasClass('johnLennonAlbums'))
				{
					alert('La <table> tiene la clase johnLennonAlbums');
				}				

				else
				{
					alert('La <table> no tiene la clase johnLennonAlbums');
				}
			}
		);

		$('button#documentRemoveClass').click(
			function(event)
			{
				event.preventDefault();

				$('table').removeClass('johnLennonAlbums');
			}
		);

		$('button#documentToggleClass').click(
			function(event)
			{
				event.preventDefault();

				$('table').toggleClass('johnLennonAlbums');
			}
		);
	}
);$(document).ready(
	function()
	{
		$('button#documentAddClass').click(
			function(event)
			{
				event.preventDefault();

				$('table').addClass('johnLennonAlbums');
			}
		);

		$('button#documentHasClass').click(
			function(event)
			{
				event.preventDefault();

				if($('table').hasClass('johnLennonAlbums'))
				{
					alert('La <table> tiene la clase johnLennonAlbums');
				}				

				else
				{
					alert('La <table> no tiene la clase johnLennonAlbums');
				}
			}
		);

		$('button#documentRemoveClass').click(
			function(event)
			{
				event.preventDefault();

				$('table').removeClass('johnLennonAlbums');
			}
		);

		$('button#documentToggleClass').click(
			function(event)
			{
				event.preventDefault();

				$('table').toggleClass('johnLennonAlbums');
			}
		);
	}
);
