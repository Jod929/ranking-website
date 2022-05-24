/**
 * sorts an HTML table
 * 
 * @param {HTMLTableElement} table // the table to sort
 * @param {number} column // the index of the column to sort
 * @param {boolean} asc // determines if the sorting will be ascending
 */

 function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // remove all existing TR's from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // re-add the newly sorted rows
    tBody.append(...sortedRows);

    // remeber how to column is currently sorted

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-desc", !asc);
}

function startSort() {
document.querySelectorAll(".table-sortable th").forEach(headerCell => {
        console.log("working in second")
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, currentIsAscending);

})
}

document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
        console.log('working in firsts')
        // console.log(buttons)
        startSort();
    })
  })



