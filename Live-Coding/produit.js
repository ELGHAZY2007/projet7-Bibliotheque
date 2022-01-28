var gestionSalle = new gestionSalle
var insertRow = null
var rowId;

document.getElementById("formSubmit").addEventListener("submit",function(event){

event.preventDefault()


Salle = readSalle()

if(insertRow == null){
    gestionSalle.addSalle(salle)
}

else
if( confirm("modifier")){
    salle.id = rowId
    gestionSalle.modifierSalle(salle)


}

insertNewRow()

restForm()
})
function restForm(){

 document.getElementById("Nature").value = ''
 document.getElementById("Numero").value= ' '
}





function readSalle(salle){

var salle = new Salle()

salle.Nature = document.getElementById("Nature").value
salle.Numero = document.getElementById("Numero").value

return salle
}


function insertNewRow(){

    var list  = gestionSalle.listSalle

    var tableList = document.getElementById("TableList").getElementsByTagName("tbody")[0];

    while(tableList.rows.length >0){
        tableList.deleteRow(0); }


for (let i = 0; i < list.length; i++) {
   var newRow = tableList.insertRow(tableList.length)
   cell1 = newRow.insertCell(0);
    cell1.innerHTML = list[i].id 

cell2 = newRow.insertCell(1);
    cell2.innerHTML = list[i].Nature

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = list[i].Numero

    cell4 = newRow.insertCell(3)


    var modifierButton = document.createElement("button")
    var supprimeButton = document.createElement("button")
    

    var modifierButtonName= document.createTextNode('modifier')
    var supprimeButtonName= document.createTextNode('supprime')

    modifierButton.appendChild(modifierButtonName)
    supprimeButton.appendChild(supprimeButtonName)

    modifierButton.setAttribute("onclick",'modifier(this)')
    supprimeButton.setAttribute("onclick",'supprime(this)')
    
    cell4.appendChild(modifierButton)
    cell4.appendChild(supprimeButton)
    
}


}


function modifier(buttonreferance){
insertRow = buttonreferance.parentElement.parentElement
rowId  = insertRow.cells[0].innerHTML
salle= new Salle()
salle = gestionSalle.getId( rowId)
document.getElementById("Nature").value = salle.Nature
document.getElementById("Numero").value = salle.Numero

}


function supprime(buttonreferance){
if (confirm("supprime")) {
    var row = buttonreferance.parentElement.parentElement;
    var rowId = row.cells[0].innerHTML

    document.getElementById("TableList").deleteRow(row.rowIndex)

    gestionSalle.suprimerSalle(rowId)
    resetForm()
}
}