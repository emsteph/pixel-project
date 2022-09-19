// Select color input
// Select size input
let pixelSize = document.querySelector('#sizePicker') ;
let colorChoice = document.querySelector("#colorPicker");
let canvasDesign = document.querySelector('#pixelCanvas');
const pixelWidth = document.querySelector('#inputWidth');
const pixelHeight = document.querySelector('#inputHeight');
let tableBod = document.createElement('tbody');
//need function to choose color
function pickAColor(event) {
    colorChoice.value;
    event.target.backgroundColor = colorChoice
}
// need function to reset grid
//function gridReset() {
   // for (var x = 0; x < tableSize; x++) {
     //   if pixelTable.
   // }

//}
// When size is submitted by the user, call makeGrid()

pixelSize.addEventListener('submit', function(event) {
    event.preventDefault()
    return makeGrid()
})
// need function to create the grid by choosing height and width
function makeGrid(height, width) {

    canvasDesign.innerHTML = "";

    const newWidth = pixelWidth.value;
    const newHeight = pixelHeight.value;

    for (let h = 0; h < newHeight; h++){
        var newSpaceHeight = document.createElement('tr');
        for (let w = 0; w < newWidth; w++) {
            var newSpaceWidth = document.createElement('td');
            newSpaceHeight.appendChild(newSpaceWidth);

            canvasDesign.appendChild(newSpaceHeight);

            event.preventDefault();
            newSpaceWidth.addEventListener('mousedown', pickAColor)
        }

        canvasDesign.appendChild(tableBod)

    }


// empty function- code goes here!
