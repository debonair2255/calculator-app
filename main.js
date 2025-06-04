function valueDisplay(value) {
    let displayBox = document.getElementById('display');

    if (value === 'del') {
        displayBox.value = displayBox.value.toString().slice(0, -1);
    } else if (value === '=') {
        try {
            if (displayBox.value.trim() === '') {
                displayBox.value = '0';
            } else {
                try {
  displayBox.value = new Function('return ' + displayBox.value)();
} catch (error) {
  displayBox.value = 'Error';
}

            }
        } catch (error) {
            displayBox.value = 'Error';
        }
    } else {
        if (displayBox.value.length < 10) {
            displayBox.value += value;
        }
    }
}

function clearAllDisplay() {
    document.getElementById('display').value = '';
}
