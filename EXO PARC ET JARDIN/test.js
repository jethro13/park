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
  var thead=document.createElement('THEAD');

  table.appendChild(tbdy);
  table.appendChild(thead);
  //for each row in the table add the cell contents
  for (var i=1; i < data.d.length; i++)
  {
      var tr=document.createElement('TR');
      tbdy.appendChild(tr);
      tr.appendChild(AddCellContents(data.d, i,'raisonsociale'));
      tr.appendChild(AddCellContents(data.d, i,'soustype'));
      tr.appendChild(AddCellContents(data.d, i,'codepostal'));
      tr.appendChild(AddCellContents(data.d, i,'ville'));
      tr.appendChild(AddCellContents(data.d, i,'tlphone'));
      tr.appendChild(AddCellContents(data.d, i,'latitude'));
      tr.appendChild(AddCellContents(data.d, i,'longitude'));

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
  $('tr').first('td').on('click', function(){

   console.log("yolo");
  });
    LoadAdditionalData();
    event.preventDefault();
  });
