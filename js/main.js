(function () {
    const grid = document.getElementById('sudoku-grid2');

    for (let column = 0; column < 9; column++) {
        for (let row = 0; row < 9; row++) {
            
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.className = `cell row-${row} col-${column}`;
            grid.appendChild(input);

        }
    }
})();