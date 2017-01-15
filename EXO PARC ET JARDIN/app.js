function LoadAdditionalData()
{
    //create the queryUrl to be used in the service call
    var query = "http://dataprovence.cloudapp.net:8080/v1/dataprovencetourisme/ParcsEtJardins?&format=json&callback=?";
    var filter = "";
    var queryUrl = query + filter;
    //make jquery call to service
    $.getJSON(queryUrl, null, AdditionalData_Loaded);
}

//callback method
function AdditionalData_Loaded(data)
{
  //create a table
  var placeholder=document.getElementById("myTablePlaceholder");
  var table=document.createElement('TABLE');
  var tbdy=document.createElement('TBODY');
  var poiin=document.getElementById("prout");

  table.appendChild(tbdy);
  //for each row in the table add the cell contents
  for (var i=1; i < data.d.length; i++)
  {
      var tr=document.createElement('TR');
      var hide=document.createElement('DIV');
      var test=document.createTextNode("Ville :" + " " + data.d[i].ville + " " + "Code postal :" + " " + data.d[i].codepostal + " " + data.d[i].soustype);
      tbdy.appendChild(tr);
      tr.appendChild(AddCellContents(data.d, i,'raisonsociale'));
      hide.appendChild(test);
      poiin.appendChild(hide);
  }
  //add the table to page
  placeholder.appendChild(table);


}
//add cell contents to the table
function AddCellContents(data, cell, id)
{
    var td=document.createElement('TD');

    var dataCell = data[cell][id];
    td.appendChild(document.createTextNode(dataCell));
    return td;
}

$(document).ready(function() {

    LoadAdditionalData();
    event.preventDefault();
  });
