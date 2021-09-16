

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();


$(function () {

    var inst = $('#demo-mobile-month-view').mobiscroll().eventcalendar({
        view: {
            calendar: { type: 'month' },
            agenda: { type: 'month' }
        },
        onEventClick: function (event, inst) {
            mobiscroll.toast({
                message: event.event.title
            });
        }
    }).mobiscroll('getInst');

    $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        inst.setEvents(events);
    }, 'jsonp');

});