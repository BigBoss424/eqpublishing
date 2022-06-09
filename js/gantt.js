google.charts.load('current,', {'packages': ['gantt']});
google.charts.setOnLoadCallback(drawchart);

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string')
}