var editor;

$(document).ready(function() {
	$("nav li").click(function(event) {
		$("nav li").removeClass("selected");
		$(event.target).addClass("selected");
		
		firt.sections[$(event.target).attr("data-section")]();
		
	});
	
	firt.sections.live();
	
    editor = ace.edit("code");
    editor.setTheme("ace/theme/textmate");
    
    var mode = require("ace/mode/html").Mode;
    editor.getSession().setMode(new mode());
	
	editor.getSession().on('change', function() {
		codeChanged = true;	
	});
	
	
	$("#chapter").change(changeChapter);
	
	$("#lesson").change(changeLesson);

	$("#validate").click(validateHTML5);
	
		
});

$(window).bind("beforeunload", function(event) {
	if(!confirm("If you close this page you will loose your changes. Are you sure?")) {
		event.preventDefault();
		return false;
	};	
});

$(document).ajaxError(function(e) {
	alert("It seems you have a security issue with your browser that prevents loading the file. Try loading this page through a web server, use Firefox or Safari");	
});

var firt = {
	sections: {
		overview: function() {
			firt.loadHTML("training/overview.html");
		},
		files: function() {
			firt.loadHTML("training/files.html");			
		},
		links: function() {
			firt.loadHTML("training/links.html");					
		}, 
		live: function() {
			$("#content").hide();
			$("#live").show();
			$("#btnPreview").click(function(e) {
				try {
					var iframe = $("#preview")[0].contentDocument;
					var content="";
					if ($("#mode").val()=="html") {
						content = editor.getSession().getValue();
					} if ($("#mode").val()=="jqm") {
						content = '<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>jQuery Mobile</title><script src="jquery.js"></script><link rel="stylesheet" type="text/css" href="jquery.mobile-1.0.css"><script src="jquery.mobile-1.0.js"></script><meta name="viewport" content="width=device-width,user-scalable=no"></head><body>' 
							+ 	editor.getSession().getValue() + "</body></html>";
					}
					iframe.open();
					iframe.writeln(content);
					iframe.close();
				} catch (e) {
					alert(e.message);
					alert("It seems you have a security issue with your browser that prevents the preview pane. Try loading this page through a web server, use Firefox or Safari");	
				}
			});
			completeChapters();

		},
		trainer: function() {
			firt.loadHTML("https://docs.google.com/document/d/1F_jj1xRMFdYctnUulHlOWYLa8mhh2MT69-4sGLDIFY8/edit");						
		}
	},
	loadHTML: function(html) {
		$("#content").html("<iframe src='" + html + "' width='90%' height='500' frameborder='0'></iframe>");
		$("#live").hide();
		$("#content").show();
	}
}


function completeChapters() {
	$("#chapter").html("");
	for (var i=0; i<chapters.length; i++) {
		$("#chapter").append($("<option>").val(i).html((i+1) + ": " + chapters[i].name).attr("data-index", i));
	}
}

var codeChanged = false;



function changeChapter(event) {
	if ((!codeChanged) || confirm("You will loose your changes. Do you want to continue?")) {
		codeChanged=false;
		$("#lesson").html("");	
		if ($(event.target).val()!="") {
			var chapter = chapters[$(event.target).val()];
			if (chapter.mode!=undefined) {
				$("#mode").val(chapter.mode);	
			}
			$("#lesson").html("");
			for (var i=0; i<chapter.lessons.length; i++) {
				$("#lesson").append($("<option>").val(i).html((i+1) + ": " + chapter.lessons[i].name).attr("data-index", i));
			}	
			$("#lesson").trigger('change');
		}
	}
}

function changeLesson(event) {
	if ((!codeChanged) || confirm("You will loose your changes. Do you want to continue?")) {
	
		var lesson;
		var chapter;
		try {
			chapter = chapters[$("#chapter").val()];
			lesson = chapter.lessons[$("#lesson").val()];
		} catch (e) {
			alert("Ups... something went wrong, try again");
			return;	
		}
		if (lesson.start==undefined) {
			// It starts empty
			editor.getSession().setValue("");	
		} else {
			$.get("data/" + chapter.folder + lesson.start, function(html) {
				editor.getSession().setValue(html);
				codeChanged = false;
	
			}, "text");
		}
		$("#live h3").html(lesson.description + ((lesson.file!=undefined) ? " <a href='javascript:solve()'>Solution</a>" : ""));
	}
}

function solve() {
	if ((!codeChanged) || confirm("Do you want to override your code with the solution?")) {
		var lesson;
		var chapter;
		try {
			chapter = chapters[$("#chapter").val()];
			lesson = chapter.lessons[$("#lesson").val()];
		} catch (e) {
			alert("Ups... something went wrong, try again");
			return;	
		}
		$.get("data/" + chapter.folder + lesson.file, function(html) {
				editor.getSession().setValue(html);
				codeChanged = false;

		}, "text");	
	}
	
}


function validateHTML5(){
	$.ajax('http://html5.validator.nu/?callback=?', {
		out: 'json',
		content: editor.getSession().getValue()
	}, function(data) {
		var result = 'valid';
		$.each(data.messages, function(){
			if (this.type == 'error'){
				result = 'invalid';
			}else if (this.type == 'non-document-error'){
				result = 'not validated';
			}else if (this.type == 'info' && this.subtype == 'warning'){
				result = 'warning';
			}
		});
		alert(result);	
	});
};
