function render_events(response) {
	$.get('/templates/event.mustache', function(template) {
	  $('ul#events_list').html('');
		var events = response.query.results.event;
		if(!events.forEach) {
			events = [events];
		};
	  events.forEach(function(event) {
	    $('ul#events_list').append(Mustache.to_html(template, event));
	  });
	});
};

$(function() {
	$('.photos a').lightBox();

	$('.select-on-focus').live('focus', function() {
	  var input = this;
	  window.setTimeout(function() {
	    input.select();
	  }, 1);
	});
});

$(function() {
	$('button.modal-close').click(function() {
		$('div.modal-backdrop').hide();
		$('div.modal').hide();
	});
});

