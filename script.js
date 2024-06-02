let total=0;
    function myFunction(){
      total = 0;
        for (let j=1; j<15; j++){
        let z=document.getElementById(`item${j}`);
        let x = document.getElementById(`formpageitem${j}`);
        let text = "";
        if(z.checked)
        {
        for(let i=0; i<x.length; i++)
        {

            if(x[i].checked)
            {
                text = text+x[i].value;
            
        let y = document.getElementById(`itemnum${j}`).value;
        document.getElementById(`cost${j}`).innerHTML = text * y;
        total = total + text * y;
        }}
    }
    document.getElementById("formitem234").innerHTML = total;
    }
  

}

function myfunction2()
{  

if (total == 0) {
  alert('Please select an item');
} else {
  const response = confirm( `Total charge is ${total}. Do you wish to proceed?`);

  if (response == true) {
    alert('Checkout successful!! Thank you for trusting us.');
  } else {
    alert('Order canceled');
  }
}

}


function massage(){

  alert("thank you for your massage!");

}
