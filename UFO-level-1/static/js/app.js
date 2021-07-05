// from data.js
var tableData = data;

// YOUR CODE HERE!

//reference table on body

var tbody = d3.select("tbody");

// select data and give it a name
tableData.forEach(IbeliveinUFOs => {
    // console.log(IbeliveinUFOs);
     // MaKe table rows 
      var row = tbody.append("tr");


Object.entries(IbeliveinUFOs).forEach(([key, value]) => {
   // console.log(key, value);
    
    // Make space for table data 
    var cell = row.append("td");
    
    // Add values 
    cell.text(value);
});
});


// Select buttons where want the action
var button = d3.select("#filter-btn");


// select filter
var form = d3.select("#datetime");


// create events on clicks and changes

button.on("click", runEnter);
form.on("submit", runEnter);


//Filter fuction

function runEnter() {
    /// no-refreshing action
    d3.event.preventDefault();
    
    // Input variables and value 
    var inputVal = form.property("value");

 // Use form to filter by date
   var filteredData=  tableData.filter(ufoDate => ufoDate.datetime === inputVal);
   console.log(filteredData);
   // Clear tbody 
   tbody.html("")

  //// Add new filtered data to the table 
    filteredData.forEach(UFOSightings => {
    // Male table rows 
     var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(([key, value]) => {
    
    // Make space for table data 
    var cell = row.append("td");
    
    // Add values 
    cell.text(value);
});
});
}


// print data

IbeliveinUFOs.forEach((element)=>{
    var row = tbody.append("tr");
    Object.values(element).forEach((value)=>{row.append("td").text(value);
    })    
})