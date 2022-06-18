function add() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = x + y;
    }
}

function subtract() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = x - y;
    }
}

function multiply() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = x * y;
    }
}

function divideXbyY() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = x / y;
    }
}

function divideYbyX() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = y / x;
    }
}

function XpowY() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = x**y;
    }
}

function sinX() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = Math.sin(x);
    }
}

function cosX() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = Math.cos(x);
    }
}

function tanX() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    if (x === "" || y === "") {
        alert("Please provide a value for both x and y.");
    } else {
        x = parseFloat(x);
        y = parseFloat(y);
        document.getElementById('result').value = Math.tan(x);
    }
}