function F(n) {
    var fibonacci = [];

    //a1 = a2 = 1;  so it's not necessary to create these variables. We might only insert the value "1" inside the array while i < 2.

    for(var i = 0; i < n; i ++) {

        if(i < 2) {
            fibonacci.push(1)
        
        } else if(i >= 2){
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
        }
    } return fibonacci
     
 } 
