const boxes = Array.from(document.getElementsByClassName("box"));
const resetBtn = document.getElementById("resetBtn");
const headertext = document.getElementById("header-text");
const areas = [null, null, null, null, null, null, null, null, null];
const o_text = "O"
const x_text = "X"
let current_player = o_text;
let winBoxesIds = [];

function bindClickEvent() {
    boxes.forEach(box => {
        box.addEventListener('click', handleBoxClick);
    })
}
bindClickEvent();



function handleBoxClick(e) {
    if (winBoxesIds.length > 0) {
        return;
    }
    const id = e.target.id;
    if (!areas[id]) {
        areas[id] = current_player;
        e.target.innerHTML = current_player;


        if (hasPlayerWon(current_player)) {
            headertext.innerHTML = `${current_player} has won !!`;
            // headertext.style.backgroundColor = 'Lightgreen';
            changeWinBoxesBg();
            return;
        }
        current_player = current_player === o_text ? x_text : o_text;

    }
}

function hasPlayerWon(current_player) {
    if (areas[0] === current_player) {
        if (areas[1] === current_player && areas[2] === current_player) {
            winBoxesIds = [0, 1, 2];
            return true;
        }

        if (areas[3] === current_player && areas[6] === current_player) {
            winBoxesIds = [0, 3, 6];
            return true;
        }

        if (areas[4] === current_player && areas[8] === current_player) {
            winBoxesIds = [0, 4, 8];
            return true;
        }
    }
    if (areas[4] === current_player) {
        if (areas[1] === current_player && areas[7] === current_player) {
            winBoxesIds = [4, 1, 7];
            return true;
        }
        if (areas[2] === current_player && areas[6] === current_player) {
            winBoxesIds = [4, 2, 6];
            return true;
        }
        if (areas[3] === current_player && areas[5] === current_player) {
            winBoxesIds = [4, 3, 5];
            return true;
        }
    }
    if (areas[8] === current_player) {
        if (areas[7] === current_player && areas[6] === current_player) {
            winBoxesIds = [8, 7, 6];
            return true;
        }
        if (areas[5] === current_player && areas[2] === current_player) {
            winBoxesIds = [8, 5, 2];
            return true;
        }
    }
}

function changeWinBoxesBg() {
    winBoxesIds.forEach(id => {
        boxes[id].style.background = "lightgreen";
    })
    boxes.forEach(box => {
        box.style.cursor = "not-allowed"
    })
}





resetBtn.addEventListener('click', reset);




function reset() {
    winBoxesIds = [];
    areas.forEach((val, index) => {
        areas[index] = null;

    })
    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.background = "";
        box.style.cursor = "pointer";

    })
    headertext.innerHTML = "Let's Play !!";
    current_player = o_text;
}