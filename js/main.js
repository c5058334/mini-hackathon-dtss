(function () {
    const grid = document.getElementById('sudoku-grid2');

    for (let column = 0; column < 9; column++) {
        for (let row = 0; row < 9; row++) {
            
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.className = `cell row-${row} col-${column}`;
            grid.appendChild(input);


            input.onchange = (event) => {
                
                // Handle input change here
                console.log(`Input changed at row ${row}, column ${column}:`, event.target.value);
                

                let validator = (selector) => {
                    let theseElements = document.querySelectorAll(selector);
                    let usedValues = [];
                    theseElements.forEach((cell) => {
                        if (cell.value && usedValues.includes(cell.value)) {
                            theseElements.forEach(buddies => buddies.classList.add('invalid'));
                        } else {
                            usedValues.push(cell.value);
                        }                    
                    });
                };

                let theseElements = document.querySelectorAll('.invalid').forEach(invalids => invalids.classList.remove('invalid'));
                
                validator(`.row-${row}`);
                validator(`.col-${column}`);
            };
        }
    }
})();