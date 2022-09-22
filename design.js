// create variables for different elements needed
let pixelSize = document.querySelector('#sizePicker') ;
const colorChoice = document.querySelector("#colorPicker")
let canvasDesign = document.querySelector('#pixelCanvas');
const pixelWidth = document.querySelector('#inputWidth');
const pixelHeight = document.querySelector('#inputHeight');
let tableBod = document.createElement('tbody');

// When size is submitted by the user, call makeGrid()

pixelSize.addEventListener('submit', function(event) {
    event.preventDefault()
    return makeGrid()
})
// need function to create the grid by choosing height and width, add color, and make sure grid can reset

function makeGrid() {
    
    canvasDesign.innerHTML = null;

    const newWidth = pixelWidth.value;
    const newHeight = pixelHeight.value;

    for (let h = 0; h < newHeight; h++){
        
        var newSpaceHeight = document.createElement('tr');
        for (let w = 0; w < newWidth; w++) {
            var newSpaceWidth = document.createElement('td');
            newSpaceHeight.appendChild(newSpaceWidth);

            tableBod.appendChild(newSpaceHeight);
        }
        //mentor helped fix this event to work properly
        tableBod.addEventListener('click', function(event) {
            event.preventDefault();
            event.target.style.backgroundColor = colorChoice.value;
            
        });

        canvasDesign.appendChild(tableBod)

    }
}
