/**
 * Look up the specified or selected text using Van Dale.
 *
 * @title Van Dale
 */
(function vd() {
	var s = (<><![CDATA[%s]]></> + '').replace(/\u0025s/, '') || getSelection() + '' || prompt('Please enter your text:');
	if (s) {
		location = 'http://www.vandale.nl/opzoeken?lang=nn&pattern=' + encodeURIComponent(s);
	}
})();
