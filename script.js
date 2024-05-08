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
setInterval(shiftright,3000);

let customerindex = 0;
let customerimagePaths = ["custom1.jpg","custom2.jpg","custom3.jpg","custom4.jpg","custom5.jpg","custom6.jpg","custom7.jpg","custom8.jpg","custom9.jpg" ];
function shiftcright(){  
    let image = document.querySelector('#customerimgimg');
    customerindex++;  
   
    if(customerindex >= customerimagePaths.length)
       {
        customerindex= 0
       } 
    image.src = customerimagePaths[customerindex]
    console.log(customerindex); 

}
function shiftcleft(){  
    let image = document.querySelector('#customerimgimg');
    customerindex--; 
    if(customerindex < 0)
       {
        customerindex=customerimagePaths.length-1; 
       }
    image.src = customerimagePaths[customerindex]
    console.log(customerindex);

}
setInterval(shiftcright,3000);

