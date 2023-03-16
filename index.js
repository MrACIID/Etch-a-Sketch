const grid = document.querySelector(".grid")



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
        let singleSquare = document.createElement("div")
        singleSquare.addEventListener("mouseover", function () {
            singleSquare.style.backgroundColor = "black"

        })
        grid.insertAdjacentElement("beforeend", singleSquare)
    }
}








