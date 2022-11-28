function makeRow(res){
    let row = document.createElement("div");
    row.classList.add("flex");
    row.classList.add("flex1");
    row.classList.add("pixelrow");
    for(let i = 0; i < res; i++){
        let singleNode = document.createElement("div");
        singleNode.classList.add("smallest");
        row.appendChild(singleNode);
    }
    return row;
}
function removeRows(){
    const rows = document.querySelectorAll(".pixelrow");
    const container = document.querySelector(".container");
    rows.forEach((row) => {
        container.removeChild(row);
    });
}
function makeBoard(res){
    const container = document.querySelector(".container");
    removeRows();
    for(let i = 0; i < res; i++){
        container.appendChild(makeRow(res));
    }
    const smallSquares = document.querySelectorAll(".smallest");
    smallSquares.forEach((e) => {
        e.addEventListener('mouseover', changeBackground);
    })
}
function clearBoard(){
    const allSmallestNodes = document.querySelectorAll(".smallest");
    allSmallestNodes.forEach((node) => {
        node.style.backgroundColor = "white";
    });
    console.log("clearing board");
}
function changeResolution(){
    console.log("changing resolution");
    let resolution = Number.parseInt(prompt("What would you like the new resolution to be?"));
    makeBoard(resolution);
}
function changeBackground(e){
    e.target.style.backgroundColor = paintcolor;
}
function buttonFunction(e){
    const buttonID = e.target.getAttribute("id");
    switch(buttonID){
        case("clearbutton"):
            clearBoard();
            break;
        case("change-size"):
            changeResolution();
            break;
        case("redpaint"):
            paintcolor = "red";
            updateCurrentColor();
            break;
        case("bluepaint"):
            paintcolor = "blue";
            updateCurrentColor();
            break;
        case("yellowpaint"):
            paintcolor = "yellow";
            updateCurrentColor();
            break;

    }
}
function updateCurrentColor(){
    const colorButton = document.querySelector("#current-color");
    colorButton.style.backgroundColor = paintcolor;
}
paintcolor = "red"
updateCurrentColor();
makeBoard(30);


const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((e) => {
    e.addEventListener('click', buttonFunction);
});