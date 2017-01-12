var chapters = [
		
	 { name: "jQuery Mobile Advanced", 
	  folder: "jqm-adv/",
	  mode: "html", 	  
	  lessons: [
	 		{ name: "Mobile init event", description: "Use the mobileinit event", start: "basic.html" }, 
	 		{ name: "Page events", description: "Check all the page events", start: "basic.html" }, 
	 		{ name: "Gesture events", description: "Check the gesture events", start: "basic.html" }, 
	 		{ name: "Change defaults", description: "Change default values", start: "basic.html" }, 
	 		{ name: "Change page", description: "Change a page using JavaScript", start: "basic.html" }, 
	 		{ name: "Widget creation", description: "Create a button using JavaScript", start: "basic.html" }, 
	 		{ name: "Widget update", description: "Create a listview and a button that will add new elements", start: "basic.html" }, 
	 		{ name: "Custom theme", description: "Create your own theme using theme roller", start: "basic.html" }, 
	 		{ name: "Template for jQM plugin", description: "", start: "template.html" }, 
	 		{ name: "Dynamic Image plugin", description: "", start: "jquery.mobile.dynamic.image.js" }, 
	 		{ name: "Using plugins", description: "Use one external plugin", start: "basic.html" }, 
	 		{ name: "Forms Sample", description: "This is a form example", start: "forms.html" }, 
	 ]
	},{ name: "Mobile HTML5", 
	  mode: "html", 	
	  folder: "html5mobile/",
	  lessons: [
	 		{ name: "Icons", description: "Touch icons definition", start: "6.html" }, 
	 		{ name: "iOS Meta tags", description: "Meta tags for iOS webapps", start: "7.html" }, 
		 	{ name: "Geolocation", description: "Basic sample for geolocation access", start: "1.html" }, 
  ]
	},
	{ name: "HTML5 elements", 
	  folder: "html5-2/",
	  lessons: [
	 		{ name: "Elements from XHTML 1.1", description: "These are the elements that HTML5 inherits from HTML 4.01/XHTML 1", start: "1.html" }, 
	 		{ name: "New semantic elements", description: "Remove the divitis with header, footer, article, section, nav and aside", start: "2.html", file: "2s.html" }, 
	 		{ name: "Header groups", description: "Use the new hgroup element", start: "3.html", file: "3s.html" }, 
	 		{ name: "Text format", description: "Use the new time, mark and wbr new text elements", start: "4.html", file: "4s.html" }, 
	 		{ name: "Figures", description: "Use figure and figcaption in the following sample", start: "5.html", file: "5s.html" }, 
	 		{ name: "Other elements", description: "These elements will not be covered in detail", start: "6.html"}, 
	 		{ name: "EXERCISE", description: "Do the following exercise", start: "ex.html" }
	  ]
	},
	{ name: "HTML5 forms", 
	  folder: "html5-3/",
	  lessons: [
	 		{ name: "Text input types", description: "Use the new HTML5 input types on the following form", start: "1.html", file: "1s.html" }, 
	 		{ name: "New attributes", description: "Apply the attributes: placeholder, autocomplete, autofocus, required, max, min, readonly and step", start: "2.html", file: "2s.html" }, 
	 		{ name: "Validation and styles", description: "Use the pseudo-classes :required, :optional, :valid and :invalid", start: "3.html", file: "3s.html" }
	  ]
	},
	{ name: "CSS3 essentials", 
	  folder: "css3-1/",
	  lessons: [
	 		{ name: "Old selectors", description: "Summary of CSS 2.1 selectors", start: "1.html", file: "1s.html" }, 
	 		{ name: "New selectors", description: "Use the new CSS 3 selectors", start: "2.html", file: "2s.html" } ,
	 		{ name: "Pseudo-classes", description: "Use the new :nth-child pseudoclass", start: "3.html", file: "3s.html" }, 
	 		{ name: "Pseudo-elements", description: "Use the new pseudo-elements", start: "4.html" } 
	  ]
	},
	{ name: "CSS3 text transformations", 
	  folder: "css3-2/",
	  lessons: [
	 		{ name: "Columns", description: "Show the text in columns", start: "1.html", file: "1s.html" }, 
	 		{ name: "Ellipsis", description: "Use the text-overflow on the title", start: "2.html", file: "2s.html" } ,
	 		{ name: "Colors", description: "Apply transparency to the boxes using two different methods", start: "3.html", file: "3s.html" }, 
	 		{ name: "Text effects", description: "Use the new text effects styles", start: "4.html", file: "4s.html" },
	 		{ name: "Font face", description: "Use a custom font for the title", start: "5.html", file: "5s.html" } 
	  ]
	},
	{ name: "CSS3 box transformations", 
	  folder: "css3-3/",
	  lessons: [
	 		{ name: "Gradients", description: "There are samples of gradients", start: "1.html" }, 
	 		{ name: "Borders", description: "Apply rounded corners and border image to the divs", start: "2.html", file: "2s.html" } ,
	 		{ name: "Shadows", description: "Use box-shadow over the box", start: "3.html", file: "3s.html" }, 
	 		{ name: "Backgrounds", description: "These are multiple backgrounds", start: "4.html" },
	 		{ name: "CSS Transformations", description: "Apply CSS transformations to each box", start: "5.html", file:"5s.html" }, 
	 		{ name: "WebKit extensions", description: "These are webkit extensions: mask and reflect", start: "6.html" } 
	  ]
	},{ name: "CSS3 animations and transitions", 
	  folder: "css3-4/",
	  lessons: [
	 		{ name: "Transitions", description:"Make a fade in and move effect", start: "1.html", file: "1s.html" }, 
	 		{ name: "Transitions events", description: "Capture end of transition", start: "2.html", file: "2s.html" }, 
	 		{ name: "EXERCISE", description: "", start: "3.html" } ,
	 		{ name: "Animation basics", description: "Animate the box through the screen", start: "4.html",file: "4s.html" }, 
	 		{ name: "Animation advanced", description: "These are other properties for CSS3 animations", start: "5.html" },
	  ]
	},
	{ name: "CSS3 media queries", 
	  folder: "css3-5/",
	  lessons: [
	 		{ name: "Basics", description: "Basic media query template", start: "1.html" }, 
	 		{ name: "Orientation", description: "Orientation media queries", start: "2.html" } ,
	 		{ name: "Pixel ratio", description: "DPI media queries", start: "3.html" } 
	  ]
	},
	{ name: "HTML5 Offline APIs", 
	  folder: "html5offline/",
	  lessons: [
	 		{ name: "Web Storage", description: "Store a value in Local Storage", start: "1.html", file: "1s.html" }, 
	 		{ name: "SQL Storage", description: "This is a complete sample or a small CRUD", start: "2.html" } ,
	 		{ name: "AppCache", description: "This a template for an application cache", start: "3.html" }, 
	 		{ name: "AppCache events", description: "These are the events we can detect on Application Cache", start: "4.html" } 
	  ]
	},
	{ name: "HTML5 APIs", 
	  folder: "html5api/",
	  lessons: [
	 		{ name: "Geolocation", description: "Basic sample for geolocation access", start: "1.html" }, 
	 		{ name: "Workers", description: "Basic sample for Web Workers", start: "2.html" } ,
	 		{ name: "Network Information", description: "Basic sample for Network information API", start: "3.html" }, 
	 		{ name: "Canvas", description: "Basic sample for Canvas API", start: "4.html" }, 
	 		{ name: "SVG", description: "Basic sample for inline SVG", start: "5.html" } 
	  ]
	},
	{ name: "Mobile HTML5", 
	  folder: "html5mobile/",
	  lessons: [
	 		{ name: "Viewport", description: "Typical Viewport for mobile app", start: "1.html" }, 
	 		{ name: "Target Density", description: "Viewport for Android evices", start: "2.html" } ,
	 		{ name: "Mobile URI Schemes", description: "Some special URI-schemes", start: "3.html" }, 
	 		{ name: "Touch events", description: "Capture touch events", start: "4.html", file: "4s.html" }, 
	 		{ name: "Gesture events", description: "Capture gesture events to transform the output div", start: "5.html", file: "5s.html" }, 
	 		{ name: "Icons", description: "Touch icons definition", start: "6.html" }, 
	 		{ name: "iOS Meta tags", description: "Meta tags for iOS webapps", start: "7.html" }, 
	 		{ name: "Data URI", description: "Embedding images", start: "8.html" } 
	  ]
	}
]