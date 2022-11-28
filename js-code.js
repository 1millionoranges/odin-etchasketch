function makeRow(){
    let row = document.createElement("div");
    row.classList.add("evenflex");
    for(let i = 0; i < 16; i++){
        let singleNode = document.createElement("div");
        singleNode.classList.add("smallest");
        row.appendChild(singleNode);
    }
    return row;
}
function makeBoard(){
    const container = document.querySelector(".container");
    console.log(container);
    for(let i = 0; i < 16; i++){
        container.appendChild(makeRow());
    }
}
function changeBackground(e){
    e.target.style.backgroundColor = "red";
}
makeBoard();
smallSquares = document.querySelectorAll(".smallest");
smallSquares.forEach((e) => {
    console.log("adding event listener");
    e.addEventListener('mouseover', changeBackground);
})
