          
function loadContent(data) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("content").innerHTML =
          this.responseText;
        }
      };

      var datos = data;

      xhttp.open("GET", datos + '.html', true);
      xhttp.send();
    }

const itemsMenu = document.getElementsByClassName("naveg__itemMenu");

for (let i=0 ; i<itemsMenu.length; i++){

    var botonesMenu = itemsMenu[i];

    botonesMenu.addEventListener('click',function(){

             loadContent(this.textContent);

            },false);
}