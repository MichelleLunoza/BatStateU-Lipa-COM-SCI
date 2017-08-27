// Get the modal
var modal = document.getElementsById('myModal');

// Get the image and insert it inside the modal
var img = document.getElementsByClassId('myImg');
var modalImg = document.getElementsByClassId('img01'); 
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}