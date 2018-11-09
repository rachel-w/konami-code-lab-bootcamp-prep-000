const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init(e) {
  // your code here
  let index = 0;
  
  document.addEventListener("keydown",(e)){
    
    if(key === codes[index]){
      index++;
      if (index === codes.length){
        alert("You found it!");
        index = 0;
      }
      else{
        index = 0;
      }
    }
  }
}
