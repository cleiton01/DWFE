function makeGrid(event) {
    event.preventDefault();

    // this code to remove the contect of the table if table is alredy created.
    let remContentTable, remRableRow;
    remContentTable = $('#pixel_canvas');
    remRableRow = $('.grid');
    console.log("remRableRow: "+remRableRow.val()   );
    remRableRow.remove();


    // This code create a responsive grid to draw
    let getInputHeight, getInputWidth, cellTable;


    getInputHeight = $('#input_height').val();
    getInputWidth =  $('#input_width').val();

    console.log("This is the height: "+getInputHeight);
    console.log("This is the width: "+getInputWidth);

    cellTable = $('#pixel_canvas');

    let setRow, setColumn, row_;
    for ( let tableHeight = 0; tableHeight < getInputHeight; tableHeight++ ){
        row_ = cellTable.append('<tr id="grid-height"></tr>');
        for ( let tableWidth = 0; tableWidth < getInputWidth; tableWidth++ ){
            row_.append('<td class="grid"></td>');
        }
    }


    $(".grid").width(800/getInputHeight);
    $(".grid").height(800/getInputHeight);





    // This code change de color used to draw on the panel.

    let colorValue;
    colorValue = $('#colorPicker').val();
    console.log(colorValue);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
    });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
            $(this).css("background-color", "black");
        });
    });

}
