// from data.js
var tableData = data;

console.log(tableData);

// Refering table body
var tbody = d3.select("tbody");

// Creat for each function for sighting value for each column
tableData.forEach(function (ufoSighting) {
  console.log(ufoSighting);

  // Append table
  var row = tbody.append("tr");

  // Creat for each function for each sighting value (Key, value)
  Object.entries(ufoSighting).forEach(function ([key, value]) {
    console.log(key, value);

    // Append cell to row
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select filter button
var button = d3.select("#filter-btn");
button.on("click", function () {
  tbody.html("");

  // Select input values for get html nodes
  var inputElement = d3.select("#input");
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(
    (sighting) =>
      sighting.datetime === inputValue ||
      sighting.city === inputValue ||
      sighting.state === inputValue ||
      sighting.country === inputValue ||
      sighting.shape === inputValue
  );
  console.log(filteredData);

  filteredData.forEach(function (selections) {
    console.log(selections);

    // Append table row
    var row = tbody.append("tr");

    // Use each function for each sighting value (Key, value)
    Object.entries(selections).forEach(function ([key, value]) {
      console.log(key, value);

      // Append cell to row
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
