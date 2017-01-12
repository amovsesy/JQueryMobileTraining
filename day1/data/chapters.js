var chapters = [
	{ name: "HTML5 essentials", 
	  folder: "html5-1/",
	  lessons: [
	 		{ name: "Basic minimum template", description: "Write a minimum valid HTML5 file", file: "1.html" }, 
	 		{ name: "Typical template", description: "Write a valid HTML5 file with html, head and body elements", start: "1.html", file: "2s.html" } ,
	 		{ name: "Syntax rules", description: "Change this file to make a valid HTML5 file with different syntax rules", start: "3.html", file: "3s.html" } 
	  ]
	},
	{ name: "Mobile HTML5", 
	  mode: "html", 	
	  folder: "html5mobile/",
	  lessons: [
	 		{ name: "Viewport", description: "Typical Viewport for mobile app", start: "1.html" }, 
	 		{ name: "Mobile URI Schemes", description: "Some special URI-schemes", start: "3.html" }, 
	 		{ name: "Icons", description: "Touch icons definition", start: "6.html" }, 
	 		{ name: "iOS Meta tags", description: "Meta tags for iOS webapps", start: "7.html" } 
	  ]
	},
	{ name: "jQuery Mobile template",
	  folder: "jqm/",
	  mode: "html", 	  
	  lessons: [
	 		{ name: "Basic Template", description: "Create a page with header and footer", start: "1.html", file: "1s.html" },
	 		{ name: "EXERCISE", description: "Get a working basic template using local files", start: "basic.html" }, 
	 		{ name: "EXERCISE", description: "Get a working basic template using CDN", start: "basic.html" }, 
	  ]
	},
	{ name: "jQuery Mobile basics",
	  mode: "jqm", 
	  folder: "jqm/",
	  lessons: [
	 		{ name: "Color swatches", description: "Play with color schemes using data-theme attribute", start: "basic.html" }, 
	 		{ name: "Multipage document", description: "Create a multi-page document with navigation", start: "basic.html", file: "3s.html" }, 
	 		{ name: "Back button", description: "Add a back button using data-add-back-btn and customize it", start: "3s.html", file: "4s.html" }, 
	 		{ name: "Pre-fetching pages", description: "Use the boolean attribute data-prefetch", start: "4s.html" }, 
	 		{ name: "Caching pages", description: "Use data-dom-cache='true' on the page", start: "4s.html" }, 
	 		{ name: "EXERCISE", description: "Create a book template with four chapters. Full index in the home and next/previous on every page", start: "basic.html" }, 
	 		{ name: "External pages", description: "Try to load an external page", start: "basic.html" }, 
	 		{ name: "Absolute External pages", description: "Link to http://google.com", start: "basic.html", file: "6.html" }, 
	 		{ name: "Transitions", description: "Play with data-transition (check cheat-sheet)", start: "3s.html" }, 
	 		{ name: "Reverse transitions", description: "Use data-direction='reverse' on a link", start: "3s.html" }, 
	 		{ name: "Dialog", description: "Open a dialog using data-rel='dialog'", start: "3s.html", file: "dialog.html" }, 
	 		{ name: "Dialog", description: "Open a dialog using data-role='dialog'", start: "3s.html", file: "dialog2.html" }, 
	 		{ name: "Dialog", description: "Change themes of the dialog", start: "dialog.html" }, 
	 		{ name: "EXERCISE", description: "Create a dialog w/a question, if yes go to a third page if no close it", start: "basic.html" }, 
	  ]
	},
	{ name: "jQuery Mobile Toolbars", 
	  folder: "jqm-toolbars/",
	  mode: "jqm", 	  
	  lessons: [
	 		{ name: "Fixed position", description: "Create a fixed position toolbar", start: "1.html", file: "1s.html" }, 
	 		{ name: "Full-screen position", description: "Create a full-screen fixed position toolbar", start: "1s.html", file: "2s.html" }, 
	 		{ name: "Fixed position", description: "Create a fixed position toolbar", start: "1.html", file: "1s.html" }, 
	 		{ name: "Header buttons", description: "Add up to two links to the header", start: "1.html" }, 
	 		{ name: "EXERCISE", description: "Create a template with an 'add new...' button in the header opening a new page" }, 
	 		{ name: "Header normal links", description: "Create an non-button 'a' element", start: "1.html" }, 
	 		{ name: "Custom header", description: "Create your own design", start: "1.html" }, 
	 		{ name: "Footer buttons", description: "Add links to the header", start: "1.html" }, 
	 		{ name: "Navigation bar", description: "Create a navigation bar in the header and the footer", start: "1.html", file: "navbar.html" }, 
	 		{ name: "Navigation bar w/active button", description: "Use the class 'ui-btn-active' on a navbar item", start: "navbar.html" }, 
	 		{ name: "Persisted footer", description: "Use data-id to create a persisted footer between two pages", start: "navbar.html" }, 
	 		{ name: "EXERCISE", description: "Design a company's application using headers and persisted footer" }, 
	  ]
	}
,
	{ name: "jQuery Mobile Buttons", 
	  folder: "jqm-buttons/",
	  mode: "jqm", 	  
	  lessons: [
	 		{ name: "Button basics", description: "Create a button", start: "basic.html" }, 
	 		{ name: "Button inlining", description: "Create an inline button", start: "basic.html" }, 
	 		{ name: "Grouped buttons", description: "Create a group of buttons", start: "basic.html" }, 
	 		{ name: "Effects", description: "Remove shadows and rounded corners", start: "basic.html" }, 
	 		{ name: "Icons", description: "Play with icons data-icon inside buttons", start: "basic.html" }, 
	 		{ name: "Icon Positioning", description: "Play with icon positioning", start: "basic.html" }, 
	 		{ name: "EXERCISE", description: "Create a toolbar with 5 vertical grouped buttons with icons", start: "basic.html" }, 
	 		{ name: "EXERCISE", description: "Create a toolbar with 5 horizontal grouped buttons without text", start: "basic.html" }, 
	  ]
	}
,
	{ name: "jQuery Mobile UI", 
	  folder: "jqm-ui/",
	  mode: "jqm", 	  
	  lessons: [
	 		{ name: "Collapsible", description: "Create a collapsible-content", start: "basic.html" }, 
	 		{ name: "Accordeon", description: "Create an collapsible-content-set", start: "basic.html" }, 
	 		{ name: "Columns", description: "Create a group of buttons", start: "basic.html" }, 
	 		{ name: "EXERCISE", description: "Use columns to add three buttons in a row", start: "basic.html" }, 
	  ]
	}	
,
	{ name: "jQuery Mobile Listview", 
	  folder: "jqm-lists/",
	  mode: "jqm", 	  
	  lessons: [
	 		{ name: "Basics", description: "Create a simple list-view", start: "basic.html" }, 
	 		{ name: "EXERCISE", description: "Convert this code to a list-view", start: "ex1.html" }, 			
	 		{ name: "Interactivity", description: "Add 'a' elements to the list", start: "list2.html" }, 
	 		{ name: "Nested lists", description: "Add 'ul' elements to a 'li'", start: "list2.html" }, 
	 		{ name: "Double actions", description: "Add two 'a' elements to the list", start: "list2.html" }, 
	 		{ name: "Thumbnails", description: "Add an image with class='ui-li-thumb'", start: "list.html" }, 
	 		{ name: "Icons", description: "Add an image with class='ui-li-icon'", start: "list.html" }, 
	 		{ name: "Aside content", description: "Add an span with class='ui-li-aside'", start: "list.html" }, 
	 		{ name: "Count bubble", description: "Add an span with class='ui-li-count'", start: "list.html" }, 
	 		{ name: "Filter", description: "Add an span with class='ui-li-count'", start: "list.html" }, 
	 		{ name: "EXERCISE", description: "Create a menu list for a restaurant", start: "basic.html" }, 
	  ]
	}	
]