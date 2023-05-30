// functions
function submit() {

    if (checkBounds() == false) {
        window.alert("Cannot submit grade when bounds are invalid!");
        return;
    }

    var ngrade = document.getElementById('ngrade').value

    if (ngrade >= 0 && ngrade <= 100) {
        grades.push(Number(ngrade));
        grades.sort(function(a, b){return a-b});
    }
    else {
        window.alert("You submitted an invalid grade! Try submitting a grade between 0 and 100");
    }

    run();
}

function checkBounds() {
    for (let i = 0; i < inputs.length - 1; i++) {
        if (Number(inputs[i].value) <= Number(inputs[i+1].value)) {
            return false;
        }
    }

    if (Number(inputs[0].value) > 100 || Number(inputs[inputs.length-1].value) < 0) {
        return false;
    }

    return true;
}

function calculateHistogram() {
    var histogram = [0,0,0,0,0,0,0,0,0,0,0];
    
    for (let j = 1; j < inputs.length; j++) {
        inputs[0].value = "100.01"
        for (let i = 0; i < grades.length; i++) {
            if (grades[i] < Number(inputs[j-1].value) && grades[i] >= Number(inputs[j].value)) {
                histogram[j-1] = histogram[j-1] + 1;
            }
        }
    }

    inputs[0].value = "100.00"
    for (let k = 0; k < outputs.length; k++) {
        outputs[k].innerHTML = histogram[k] + " student(s)";
    }
}

function run() {
    if(checkBounds() == false) {
        document.querySelectorAll('.output').forEach((i) => (i.innerHTML = "Invalid Bounds Detected"));
    }
    else {
        calculateHistogram();
    }
}

// initializers
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
const inputs = document.querySelectorAll('.bounds');
const outputs = document.querySelectorAll('.output');
const submits = document.getElementById('submit');
run();

// event listeners
submits.addEventListener('click', submit)
inputs.forEach((i) => i.addEventListener("change", run));
