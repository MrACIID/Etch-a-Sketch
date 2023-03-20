//get grid the grid div
const grid = document.querySelector(".grid")

//default color
let color = 'black'


//Ask the size of the grid once the button is clicked then call for setSize()
function getSize() {
    const selectBtn = document.querySelector(".selectBtn")
    selectBtn.addEventListener("click", function () {

        //Deleting existing cells before creating a new grid to prevent stacking up cells.
        document.querySelectorAll(".cell").forEach((e) => e.parentNode.removeChild(e))

        //Ask for a desired size
        selectedSize = prompt("Enter the grid size (ex: 16,32,64 ect)", "32")

        //Set limits for the sizes 
        if (selectedSize > 100) {
            window.alert("you cant go above 100")
        }
        else if (selectedSize <= 3) {
            window.alert("come on bro what do you expect to draw on this?")
        }
        else if (selectedSize <= 100 && selectedSize > 3) {
            setSize(selectedSize)
        }

    })
}
getSize()

//Creating the grid with the selectedSize from the prompt of getSize()
function setSize(selectedSize) {

    grid.style.gridTemplateColumns = `repeat(${selectedSize}, 1fr`;
    grid.style.gridTemplateRows = `repeat(${selectedSize}, 1fr`;
    let size = selectedSize * selectedSize

    for (let i = 0; i < size; i++) {
        let singleCell = document.createElement("div")
        singleCell.classList.add("cell")

        //Coloring cells on hover with colorDiv according to the choosen color.
        singleCell.addEventListener("mouseover", colorDiv)

        grid.insertAdjacentElement("beforeend", singleCell)
    }
}

//Setup the colors logic.
function colorDiv() {
    if (color == "RGB") {
        this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`
    }
    else (
        this.style.backgroundColor = 'black'
    )
}

//Get the color choice from the clicked buttons.
function setColor(colorChoice) {
    color = colorChoice
}

//Reset the grid back to white when reset button is clicked.
function resetGrid() {
    let cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => cell.style.backgroundColor = 'white')
}
