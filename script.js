let index = 0;
function shiftright(){  
    let image = document.querySelector('#mainimage');
    let imagePaths = ["sunny.jpg", "dawg.jpg", "food1.jpg", "winter.jpg"];
    index++;  
   
    if(index >= imagePaths.length)
       {
        index= 0
       } 
    image.src = imagePaths[index]
    console.log(index); 
   
}
function shiftleft(){  
    let image = document.querySelector('#mainimage');
    let imagePaths = ["sunny.jpg", "dawg.jpg", "food1.jpg", "winter.jpg"];
    index--; 
    if(index < 0)
       {
        index=imagePaths.length-1; 
       }
    image.src = imagePaths[index]
    console.log(index);
}

