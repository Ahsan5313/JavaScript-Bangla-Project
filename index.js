/*dom section
even listener
basic valid
creat element
append
*/

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const tbody = document.querySelector("#tbody");
const btn = document.querySelector(".btn");


btn.addEventListener("click", function(){

   if(title.value == '' && author.value == '' && year.value == ''){
       alert("hey man you have to press anything to write in input fill");
   }else{
       const newRow = document.createElement("tr");

      const newTitle = document.createElement("th");
     newTitle.innerHTML = title.value;
     newRow.appendChild(newTitle);
    
     
     const newAuthor = document.createElement("th");
     newAuthor.innerHTML = author.value;
     newRow.appendChild(newAuthor);
    

          
     const newYear = document.createElement("th");
     newYear.innerHTML = year.value;
     newRow.appendChild(newYear);

     tbody.appendChild(newRow);
    
   }
})