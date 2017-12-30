
//
let sizePicker = $('#sizePicker');

//
let cellTable = $('#pixel_canvas');

// Set default color to draw.
let color = 'FFFFFF';

function makeGrid(event) {
    event.preventDefault();

    //create local variable
    let getInputHeight, getInputWidth;

    // start the value of the variable
    getInputHeight = $('#input_height').val();
    getInputWidth =  $('#input_width').val();


    console.log("This is the height: "+getInputHeight);
    console.log("This is the width: "+getInputWidth);


    // this code to remove the contect of the table if table is alredy created.
    cellTable.children().remove();


    // This code create a grid to draw

    let setRow, setColumn, row_;

    for ( let tableHeight = 0; tableHeight < getInputHeight; tableHeight++ ){
        let row_ = '';
        row_ +='<tr>'

        for ( let tableWidth = 0; tableWidth < getInputWidth; tableWidth++ ){
            row_ += ('<td></td>');
        }
        cellTable.append( row_ + '</tr>' );
    }

}

// This code change de color used to draw on the panel.
function collorCell(evnt){

    color = $('#colorPicker').val();

    $(this).css('background-color',color);


}

// get the event
cellTable.on('mousedown mouseover contextmenu','td', collorCell);