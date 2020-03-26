//	Responsive Tabs v1.4, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	=======================================================================================

	// Tabs function
		function responsiveTabs() {
			// Tabs functionality
				$('.responsive-tabs').each(function(e) {
					// Hide all tab panels except for the first
						$('.responsive-tabs-panel').not(':first').hide();

					// Add active statuses to first tab and show display
						$('li', this).removeClass('active');
						$('li:first-child', this).addClass('active');
						$('.responsive-tabs-panel:first-child').show();

					// Tab clicked
						$('li', this).click(function(e) {
							// Prevent the anchor's default click action
								e.preventDefault();

							// Corresponding tabs panel
								var panel = $('a', this).attr('href');

							// Remove active statuses to other tabs
								$(this).siblings().removeClass('active');

							// Add active status to this tab
								$(this).addClass('active');

							// Hide other tab panels
								$(panel).siblings().hide();

							// Showing the clicked tabs' panel
								$(panel).fadeIn(400);
						});

					// Responsive
						if ($(window).width() < 768)
							$('.responsive-tabs-panel').show();
				});

			// Panel link functionality
				$('.responsive-tabs-content .responsive-tabs-panel .responsive-tabs-panel-link').on('click', function(e) {
					// Corresponding tabs panel
						var panel = $(this).attr('href');

					// Remove active statuses to other tabs
						$(this).parents('.responsive-tabs-content').siblings('.responsive-tabs').find('a[href=' + panel + ']').parent().siblings().removeClass('active');

					// Add active status to this tab
						$(this).parents('.responsive-tabs-content').siblings('.responsive-tabs').find('a[href=' + panel + ']').parent().addClass('active');

					// Hide other tab panels
						$(panel).siblings().hide();

					// Showing the clicked tabs' panel
						$(panel).fadeIn(400);

					// Prevent the anchor's default click action
						e.preventDefault();
				});
		}

	$(document).ready(function() {
		responsiveTabs();

		$('.responsive-tabs li a').each(function() {
			var	tabID = $(this).attr('href');
			var	tabTitle = $(this).html();

			$(tabID + ' .responsive-tab-title').prepend('<p><strong>' + tabTitle + '</strong></p>');
		});
	});

	$(window).resize(function() {
		responsiveTabs();
	});