// from data.js
var tableData = data;

// YOUR CODE HERE!

//reference table on body

var tbody = d3.select("tbody");

// select data and give it a name
var ufo_data = data;

// Select buttons where want the action
var button = d3.select("#filter-btn");
var button_clear = d3.select("#clear-btn");

// create events on clicks and changes

button.on("click", runEnter);
inputs.on("change", runEnter);

// print data

ufo_data.forEach((element)=>{
    var row = tbody.append("tr");
    Object.values(element).forEach((value)=>{row.append("td").text(value);
    })    
})