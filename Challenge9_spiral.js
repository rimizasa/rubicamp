let matrix =  [
    [ 0,  1,  2, 3,   4],
    [ 5,  6,  7, 8,   9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
];

let endRow = matrix.length;
let endColumn = matrix[0].length;

spiralLoop(endRow, endColumn, matrix);

function spiralLoop(endRow, endColumn, matrix) {
    let i, startRow = 0, startColumn = 0, resultString = '';

    while (startRow < endRow && startColumn < endColumn) {
        for (i = startColumn; i < endColumn; ++i) {
            resultString += matrix[startRow][i] + ' ';
        }
        startRow++;


        for (i = startRow; i < endRow; ++i) {
            resultString += matrix[i][endColumn - 1] + ' ';
        }
        endColumn--;

        if (startRow < endRow) {
            for (i = endColumn - 1; i >= startColumn; --i) {
                resultString += matrix[endRow - 1][i] + ' ';
            }
            endRow--;
        }

              if (startColumn < endColumn) {
            for (i = endRow - 1; i >= startRow; --i) {
                resultString += matrix[i][startColumn] + ' ';
            }
            startColumn++;
        }
    }

    console.log(resultString);
}
