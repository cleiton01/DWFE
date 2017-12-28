function makeGrid() {

    let getInputHeight, getInputWidth, cellTable;

    let family2 = $('<div id="1"><h1>Hello</h1></div>');

    console.log("TESTE");

    getInputHeight = $('#input_height').val();
    getInputWidth =  $('#input_width').val();

    console.log("This is the height: "+getInputHeight);
    console.log("This is the width: "+getInputWidth);

    cellTable = $('#pixel_canvas');

    for ( let tableWidth = 0; tableWidth <= getInputWidth; tableWidth++){
        family2.insertAfter(cellTable);
    }


    var vali1;

    vali1 = $('#pixel_canvas');
    vali1.append('<img src="http://placepuppy.it/200/300">');
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";



}

