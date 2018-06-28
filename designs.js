// the function should wait for the DOM tree to load
$(function(){
	
	//TODO: Select color input
	const colors = $("#colorPicker");
	
	//TODO: Select size input
	const rows = $("#inputHeight");
	const cols = $("#inputWeight");
	
	
	// When size is submitted by the user, call makeGrid()


$("#sizePicker").on("submit",function makeGrid(grid) {
	
	/* When the make grid function is called remove the previously existing table*/
	$("table tr").remove();
	
	//construct the grid by inserting <td> tags in a loop of <tr> tags and assigning them a class with every iteration
	let row = rows.val();
	let col = cols.val();
	for(var r=1; r<=row; r++){
		$("table").append('<tr></tr>');
		var c=1;
		while(c<=col){
			$("tr:last").append('<td></td>');
			$("td").attr("class", "gridCell");
			c++;
		}	
	}
	//TODO: keep the grid for manipulation
	//make the table stay visible even after the submission
	grid.preventDefault();
	
	//TODO: add interactiveness to the table cells
	//use jquery .css to manipulate the background color of a cell incase of a click event
	$(".gridCell").on("click",function(event){
		let color = colors.val();
			$(event.target).css("backgroundColor", color);
					})
	})
})
	//code is complete