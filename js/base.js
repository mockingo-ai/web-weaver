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
	editorHtml.focus();
	editorHtml.setOption("theme", "abcdef");
	if (window.localStorage != undefined && localStorage.getItem("html") != undefined) {
		editorHtml.setValue(localStorage.getItem("html"));
	} else {
		editorHtml.setValue("");
	}

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
	editorCss.setOption("theme", "abcdef");
	if (window.localStorage != undefined && localStorage.getItem("css") != undefined) {
		editorCss.setValue(localStorage.getItem("css"));
	} else {
		editorCss.setValue("");
	}

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
	editorJs.setOption("theme", "abcdef");
	if (window.localStorage != undefined && localStorage.getItem("js") != undefined) {
		editorJs.setValue(localStorage.getItem("js"));
	} else {
		editorJs.setValue("");
	}

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


	jQuery("#clearHtml").click(function(e) {
		editorHtml.setValue("");
	});

	jQuery("#clearCss").click(function(e) {
		editorCss.setValue("");
	});

	jQuery("#clearJs").click(function(e) {
		editorJs.setValue("");
	});

	window.addEventListener("beforeunload", function (e) {
		if (window.localStorage != undefined) {
			localStorage.setItem("html", editorHtml.getValue());
			localStorage.setItem("css", editorCss.getValue());
			localStorage.setItem("js", editorJs.getValue());
		}

		var confirmationMessage = "\o/";
		(e || window.event).returnValue = confirmationMessage; //Gecko + IE
		return confirmationMessage;                            //Webkit, Safari, Chrome
	});
});