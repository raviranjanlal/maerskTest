let divList = document.getElementsByTagName("div");
let divCopyArray = [];
let divCopy;

function shuffle() {
    let container = document.getElementById("container");
    for (let i = 0; i < 9; i++) {
        divCopy = divList[i].cloneNode(true);
        divCopyArray.push(divCopy);
    }

    for (let j = 8; j >= 0; j--) {
        divList[j].remove();
    }

    while (divCopyArray.length > 0) {
        var randomIndex = Math.floor(Math.random() * divCopyArray.length);
        container.append(divCopyArray.splice(randomIndex, 1)[0]);
    }

};

function sort() {
    let container = document.getElementById("container");
    for (let i = 0; i < 9; i++) {
        divCopy = divList[i].cloneNode(true);
        divCopyArray.push(divCopy);
    }

    for (let j = 8; j >= 0; j--) {
        divList[j].remove();
    }

    var done = false;
    while (!done) {
        done = true;
        for (var k = 1; k < divCopyArray.length; k += 1) {
            if (divCopyArray[k - 1].innerHTML > divCopyArray[k].innerHTML) {
                done = false;
                var tmp = divCopyArray[k - 1];
                divCopyArray[k - 1] = divCopyArray[k];
                divCopyArray[k] = tmp;
            }
        }
    }

    for (var k = 0; k < divCopyArray.length; k += 1) {
        container.append(divCopyArray[k]);
    }

    divCopyArray = [];
};
