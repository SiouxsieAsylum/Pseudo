Top level: Three parts


1. Comment List: One part
  * CRUD Comment
  * Swap Comment Order

2. Code Editor: Two Views
	a. Comment Block View
		i. Comment
		  a. {
		  comment: {
		  		on: comment line number,
		  		codeStart: comment line number + 1 
		  		ends: 
			}
		}
		ii. Codemirror value(range can be accessed by line numbers?)
	b. Full Code Editor View
		i. Codemirror value (range can be accessed by line numbers?)
		ii. Comments will just be set as first few lines
		iii. Will update the mapper of line items on every content change 

So what are we looking at here statewise? 

{
	View: ["CommentList, CodeBlock, TextEditor,"]
	CommentArray: ["", "", ""],
	CommentLineMapper: {
		comment: {
			commentIndex: int,
			codeRange: [array of ints]
		},

	},
	Code: {Code[CodeMirror.getLine(int)] = i}  

}

--------------------------------------

Input Specs
	- Verification
		- Grammar
		- No Empty Comments
	- UI
		- Enter and leave animation
		- Delete button to delete
		- Grab and move
		- Stay at the scrollbottom when expanding past container

Codemirror Specs
	- Linting
		- A package for each mode?
	- Autoformatting
	- Catch errors?
	- REPL.it?
	- Codemirror mode selection
	- Smart Blocks
		- How to ask if blocks should be wrapped in other blocks
		- Were you trying to do X?

Saving specs
	- Users can download the file into their projects
	- Users can save files to the DB
	- Users can see a list of their pseudos 
		- When they nav to (like repl.it)
		- In their profile



















Reference of functionality:
[Get current Line Number Every Time Content Changes](https://stackoverflow.com/questions/53331776/code-mirror-get-current-line-number-every-time-content-changes) 
Handler for content change can handle following: 
	Determine if line changed was a comment line. If so, update the index of the comment in state
	If line edited is actual code, add to the comment index to code line number lineup indexes[commentIndex] = [codeIdx, codeIdx, codeIdx];
	That way we can cobble together the broken up version by mapping all the line numbers together and setting the codemirror values.


Things I'll need to research
https://github.com/JedWatson/react-codemirror
"The easiest way to use codemirror is to install it from NPM and **include it in your own React build process (using Browserify, Webpack, etc)**". << dunno what that last part means

