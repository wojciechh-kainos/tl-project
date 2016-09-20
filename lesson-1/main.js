function generateTriangle() {
    var triangle = [];

    for(var row = 1; row <= 10; row++) {

        triangle[row-1] = [];

        for(var index = 1; index <= row; index++) {
            triangle[row - 1][index - 1] = getPascalNumber(row, index);
        }
    }

    displayTriangle(triangle);

}

function getPascalNumber(row, index) {
    if(index === 1) return 1;
    if(index >= row) return 1;

    return getPascalNumber(row - 1, index - 1) + getPascalNumber(row - 1, index);
}

function displayTriangle(triangle) {
    var result = "";

    for(var row = 0; row < triangle.length; row ++) {
        result = result.concat(triangle[row].join("&nbsp;")).concat("<br>");
    }

    document.getElementById("content").innerHTML = result;
}