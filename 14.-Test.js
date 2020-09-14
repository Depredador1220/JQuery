$(document).ready(function()
{
	var contextMenuOn = false;

	$(document).on(
			'contextmenu',
			function(event)
			{
				event.preventDefault();
				var contextMenu = $('div#contextMenu');
				contextMenu.show();

				var vpx, vpy;

				if(self.innerHeight)
				{
					vpx = self.innerWidth;
					vpy = self.innerHeight;
				}

				else if(document.documentElement && document.documentElement.clientHeight)
				{
					vpx = document.documentElement.clientWidth;
					vpy = document.documentElement.clientHeight;
				}

				else if(document.body)
				{
					vpx = document.body.clientWidth;
					vpy = document.body.clientHeight;
				}

				contextMenu.css({
					top: 'auto',
					right: 'auto',
					bottom: 'auto',
					left: 'auto'
				});

				if(contextMenu.outerHeight() > (vpy - event.pageY))
				{
					contextMenu.css('bottom', (vpy - event.pageY) + 'px');
				}

				else
				{
					contextMenu.css('top', event.pageY + 'px');
				}

				if(contextMenu.outerWidth() > (vpx - event.pageX))
				{
					contextMenu.css('right', (vpx - event.pageX) + 'px');
				}

				else
				{
					contextMenu.css('left', event.pageX + 'px');
				}
			}
		);

	$('div#contextMenu').hover(
			function()
			{
				contextMenuOn = true;
			},
			function()
			{
				contextMenuOn = false;
			}
		);

	$(document).mousedown(
			function()
			{
				if(!contextMenuOn)
				{
					$('div#contextMenu').hide();
				}
			}
		);
});
