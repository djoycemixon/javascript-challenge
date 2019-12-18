// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = table.select("tbody");

// Use D3 to select the selection lists
var selectCity = d3.select("#city");
var selectState = d3.select("#state");
var selectCountry = d3.select("#country");
var selectShape = d3.select("#shape");
var selectDuration = d3.select("#durationMinutes");
var selectDate = d3.select("#datetime");

// initialize lists of unique values for select tags
var cities = [];
var states = [];
var countries = [];
var shapes = [];
var durations = [];
var dates = [];

/* capitalizes the first letter */
function titleCase(str) {
return str.toLowerCase().split(' ').map(function(word) {
return word.replace(word[0], word[0].toUpperCase());
}).join(' ');
};

/* format text depending on key value */
function cellText(key, value) {
  if (key == "state" || key == "country")
  {
    return value.toUpperCase();
  }
  else if (key == "city")
  {
    return titleCase(value);
  }
  else
  {
    return value;
  }
};

// build table 
tableData.forEach((ufoReport) => {
var row = tbody.append("tr");
Object.entries(ufoReport).forEach(([key, value]) => {
var cell = tbody.append("td");
console.log(key, value);
cell.text(cellText(key, value));
      if (key == "city" && !cities.includes(value))
      {
        cities.push(value);
      }
      if (key == "state" && !states.includes(value))
      {
        states.push(value);
      }
      if (key == "country" && !countries.includes(value))
      {
        countries.push(value);
      }
      if (key == "shape" && !shapes.includes(value))
      {
        shapes.push(value);
      }
      if (key == "durationMinutes" && !durations.includes(value))
      {
        durations.push(value);
      }
      if (key == "datetime" && !dates.includes(value))
      {
        dates.push(value);
      }
    });
  });
  
  // sort lists 
  cities.sort();
  console.log("cities");
  console.log(cities);
    
  cities.forEach((value) => {
  var opt = selectCity.append("option");
  opt.attr("value", titleCase(value));
  opt.text(titleCase(value));
  });
  
  states.sort();
  console.log("states");
  console.log(states);
  
  states.forEach((value) => {
  var opt = selectState.append("option");
  opt.attr("value", value.toUpperCase());
  opt.text(value.toUpperCase());
  });
  
  countries.sort();
  console.log("countries");
  console.log(countries);
  
  countries.forEach((value) => {
  var opt = selectCountry.append("option");
  opt.attr("value", value.toUpperCase());
  opt.text(value.toUpperCase());
  });
  
  shapes.sort();
  console.log("shapes");
  console.log(shapes);
  
  shapes.forEach((value) => {
  var opt = selectShape.append("option");
  opt.attr("value", value);
  opt.text(value);
  });

  durations.sort();
  console.log("durations");
  console.log(durations);
  
  durations.forEach((value) => {
  var opt = selectDuration.append("option");
  opt.attr("value", value);
  opt.text(value);
  });

  dates.sort();
  console.log("dates");
  console.log(dates);
  
  dates.forEach((value) => {
  var opt = selectDate.append("option");
  opt.attr("value", value);
  opt.text(value);
  });

// refresh the table based on filtered data

function refresh(refreshData) {
clearTable();
refreshData.forEach((ufoReport) => {
var row = tbody.append("tr");
Object.entries(ufoReport).forEach(([key, value]) => {
var cell = tbody.append("td");
cell.text(cellText(key, value));
});
  });
};

// Submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {

});


