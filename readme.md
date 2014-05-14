# Sata Ajax Result Printer

This is plugin for print result of ajax request. Either it html or json.

## Usage
It requires [jquery](https://github.com/jquery/jquery) and [underscore](https://github.com/jashkenas/underscore).

``` html
<!DOCTYPE html>
<html>
	<head>
		<!-- include jquery and underscore -->
		<script type="text/javascript" src="lib/jquery.min.js"></script>
		<script type="text/javascript" src="lib/underscore.js"></script>

		<!-- include jquery.sata.ajax-result-printer.js -->
		<script type="text/javascript" src="../lib/jquery.sata.ajax-result-printer.js"></script>

		<script type="text/javascript">
			$(function () {
				$('#load').change(function () {
					$('#result').sataAjaxResultPrinter({
						// here is you can specify any ajax options
						url: 'http://url-that-you-want-load.com'
					});
				});
			});
		</script>
	</head>
	<body>
		<button id="load">Load!</button>
		<!-- recommended use pre tag, because json results -->
		<pre id="result"></pre>
	</body>
</html>
```

By default will be filled options `success` and `error`.

The main part is here:

``` javascript
$('#result').sataAjaxResultPrinter({
	url: 'http://you-url.com'
});
```

It will load result of `http://you-url.com` to `#result`. In options you can specify any [ajax settings](http://api.jquery.com/jquery.ajax/).