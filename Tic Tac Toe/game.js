let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = true;

let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was click")
        if (turn) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

disable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const resetgame = () => {
    turn = true;
    enable();
    msgcontainer.classList.add("hide")
}
const enable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
winnercall = (winner) => {
    msg.innerText = `Congratulation Team ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
}

const checkWinner = () => {
    for (pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                winnercall(pos1);
            }
        }
    }
}
resetbtn.addEventListener("click", resetgame);