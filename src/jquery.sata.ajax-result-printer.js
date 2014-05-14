(function ($) {

	$.fn.sataAjaxResultPrinter = function (options) {
		var $element = this;

		options = $.extend({}, $.fn.sataAjaxResultPrinter.defaults, options);
		options.success = options.success || function (data) {
			if (_.isString(data)) {
				$element.html($('<iframe></iframe>').attr('srcdoc', data));
			} else {
				$element.html(JSON.stringify(data, null, '\t'));
			}
		};
		options.error = options.error || function (data) {
			$element.html($('<iframe></iframe>').attr('srcdoc', data.responseText));
		};

		$.ajax(options);
	}

	$.fn.sataAjaxResultPrinter.defaults = {
	};

})(jQuery);