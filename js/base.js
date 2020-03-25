jQuery(document).ready(function() {

	var editorHtml = CodeMirror.fromTextArea(document.getElementById("html-code-textarea"), {
		mode: "text/html",
		lineNumbers: true,
		matchBrackets: true,
		autoCloseTags: true,
		autoCloseBrackets: true,
		indentWithTabs: true,
		autocorrect: true,
		spellcheck: true,
		lineWrapping: true,
		styleActiveLine: true,
    	enableCodeFolding: true,
    	enableCodeFormatting: true,
    	autoFormatOnStart: true,
    	autoFormatOnModeChange: true,
    	autoFormatOnUncomment: true,
    	showAutoCompleteButton: true
	});
	editorHtml.setValue("");
	editorHtml.focus("");
	editorHtml.setOption("theme", "abcdef");

	var editorCss = CodeMirror.fromTextArea(document.getElementById("css-code-textarea"), {
		mode: "text/css",
		lineNumbers: true,
		matchBrackets: true,
		autoCloseTags: true,
		autoCloseBrackets: true,
		indentWithTabs: true,
		autocorrect: true,
		spellcheck: true,
		lineWrapping: true,
		styleActiveLine: true,
    	enableCodeFolding: true,
    	enableCodeFormatting: true,
    	autoFormatOnStart: true,
    	autoFormatOnModeChange: true,
    	autoFormatOnUncomment: true,
    	showAutoCompleteButton: true
	});
	editorCss.setValue("");
	editorCss.setOption("theme", "abcdef");

	var editorJs = CodeMirror.fromTextArea(document.getElementById("js-code-textarea"), {
		mode: "text/javascript",
		lineNumbers: true,
		matchBrackets: true,
		autoCloseTags: true,
		autoCloseBrackets: true,
		indentWithTabs: true,
		autocorrect: true,
		spellcheck: true,
		lineWrapping: true,
		styleActiveLine: true,
    	enableCodeFolding: true,
    	enableCodeFormatting: true,
    	autoFormatOnStart: true,
    	autoFormatOnModeChange: true,
    	autoFormatOnUncomment: true,
    	showAutoCompleteButton: true
	});
	editorJs.setValue("");
	editorJs.setOption("theme", "abcdef");

	jQuery("#renderBtn").click(function(e) {
		var htmlContent = editorHtml.getValue();
		var cssContent = editorCss.getValue();
		var jsContent = editorJs.getValue();

		var src = `
		    <html>
		      <head><style>${cssContent}</style></head>
		      <body>
		        ${htmlContent}
		        <script>${jsContent}</script>
		      </body>
		    </html>
	  	`;
	  	$("#frameRenderer").contents().find('body').html(src);
	});
});