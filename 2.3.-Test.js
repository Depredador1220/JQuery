$(document).ready(
	function()
	{
		var today = $("td.calendarToday");

		var setUpThisWeek = function()
		{
			$("table.calendarMonth td").removeClass(
				'calendarYesterday ' + 'calendarTomorrow ' + 
				'calendarEarlierThisWeek ' + 
				'calendarLaterThisWeek ' + 
				'calendarThisWeek');

			var yesterday = today.prev('td');

			if(!yesterday.length)
			{
				var lastWeek = today.parent('tr')
				.prev('tr');

				if(lastWeek.length)
				{
					yesterday = lastWeek.children('td').eq(6);
				}
			}

			if(yesterday.length)
			{
				yesterday.addClass('calendarYesterday');
			}

			var tomorrow = today.next('td');

			if(!tomorrow.length)
			{
				var nextWeek = today.parent('tr')
				.next('tr');

				if(nextWeek.length)
				{
					tomorrow = nestWeek.children('td').eq(0);
				}
			}

			if(tomorrow.length)
			{
				tomorrow.addClass('calendarTomorrow');
			}

			var laterThisWeek = today.nextAll('td');

			if(laterThisWeek.length)
			{
				laterThisWeek.addClass('calendarLaterThisWeek');
			}

			var earlierThisWeek = today.prevAll('td');

			if(earlierThisWeek.length)
			{
				earlierThisWeek.addClass('calendarEarlierThisWeek');
			}

			today.siblings('td')
			.addClass('calendarThisWeek');			
		};

		var selectedDay = null;

		$('table.calendarMonth td')
		.not('td.calendarLastMonth, td.calendarNextMonth')
		.click(
			function()
			{
				if(selectedDay && selectedDay.length)
				{
					selectedDay
					.removeClass('calendarDaySelected')
					.parent('tr')
					.removeClass('calendarWeekSelected');
				}

				var day = $(this);
				selectedDay = day;

				selectedDay
				.addClass('calendarDaySelected')
				.parent('tr')
				.addClass('calendarWeekSelected');

				day.parents('table.calendarMonth')
				.find('span.calendarDay')
				.text(day.text() + ', ');
			})
		.dblclick(
			function()
			{
				today.removeClass('calendarToday');
				today = $(this);
				today.addClass('calendarToday');
			});

		setUpThisWeek();
	});
