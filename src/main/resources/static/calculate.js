var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

function submit() {
    var ngrade = document.getElementById('ngrade').value

    if (ngrade >= 0 && ngrade <= 100) {
        grades.push(Number(ngrade))
        grades.sort(function(a, b){return a-b});
        console.log(ngrade + " was pushed to the list")
    }
    else {
        window.alert("You submitted an invalid grade!")
    }
}


document.getElementById('submit').addEventListener('click', submit)

