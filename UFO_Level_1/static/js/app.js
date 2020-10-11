// from data.js
var tableData = data;

console.log(tableData);

// Referencing table body
var tbody = d3.select("tbody");

// Create for each function for sighting value 
tableData.forEach(function (ufoSighting) {
  console.log(ufoSighting);

  // Append table 
  var row = tbody.append("tr");

  // Create for each function for Sighting value
  Object.entries(ufoSighting).forEach(function ([key, value]) {
    console.log(key, value);
    // Append cell to each row
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select filter button
var button = d3.select("#filter-btn");
button.on("click", function () {
  tbody.html("");

  // Select input value for each node
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // Filter data according to input value
  var filteredData = tableData.filter(
    (sighting) => sighting.datetime === inputValue);
  console.log(filteredData);

  filteredData.forEach(function (selections) {
    console.log(selections);

    // Append table
    var row = tbody.append("tr");

    // Use each function for each sighting value (Key, value)
    Object.entries(selections).forEach(function ([key, value]) {
      console.log(key, value);

      // Append cell to each row
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
