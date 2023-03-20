const grid = document.querySelector(".grid")
let color = 'black'




function getSize() {
    const selectBtn = document.querySelector(".selectBtn")
    selectBtn.addEventListener("click", function () {
        selectedSize = prompt("Enter the grid size (ex: 16,32,64 ect)", "32")
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


function setSize(selectedSize) {

    grid.style.gridTemplateColumns = `repeat(${selectedSize}, 1fr`;
    grid.style.gridTemplateRows = `repeat(${selectedSize}, 1fr`;
    let size = selectedSize * selectedSize
    for (let i = 0; i < size; i++) {
        let singleCell = document.createElement("div")
        singleCell.classList.add("cell")

        singleCell.addEventListener("mouseover", colorDiv)
        grid.insertAdjacentElement("beforeend", singleCell)
    }
}

function colorDiv() {
    if (color == "RGB") {
        this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`
    }
    else (
        this.style.backgroundColor = 'black'
    )
}

function setColor(colorChoice) {
    color = colorChoice
}

function resetGrid() {
    let cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => cell.style.backgroundColor = 'white')
}
