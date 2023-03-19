//------------------Variable declaration----------------------
var txt = document.getElementById('txt');
var tblc = document.getElementById('tblc');

var newCal = ''; //add new cal history
var calCount = 0;
var isUpdate = false;


//---------------Events--------------

//for page loads
/*window.onload = updateTable;

//for enter 
table.addEventListner('click',addCal);*/

//-------------------Functions--------------------------------

//Add character
function addChar(char){
    txt.value += char;
}

//Clear display
function clearDisplay(){
    txt.value = '';
}

function calculate(){
    var result = eval(txt.value);
    txt.value = result;
}


//updatetable
/*
function updateTable(){
    //Display the table when calculations done
    if(calCount >0)
    {
        tbl2.style.display = '';

        if(isUpdate){
            tblb.textContent = tblc.value;

            //reset update and cal history
            isUpdate = false;
            calCount--;
        }
        else{
            //add new history
            tblb.appendChild(newCal);
        }
    }
    else{
        tblb.style.display='none';
    }
}


//for add cal history
function addCal(e){
    e.preventDefault();         //stop initial behaviour

    //create new note

    //new tr
    var tr = document.createElement('tr');
    tr.className = 'tblb';

    //new td
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(tblc.value));

    //add all tds to here
    tr.appendChild(td);

    //increment cal count
    calCount++;

    //set new note
    newCal = tr;

    //add or update history table
    updateTable();
}*/