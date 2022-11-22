
//the code is all inside of a do-while loop to keep prompting the user

do{

var age = Number(prompt('Please enter your age'));

//if the user enters an invalid value less than 1 or a letter

if (age < 1 ){
    
    alert (`The age you have entered ${age} is invalid, enter positive numbers only`)
   
}

//for child criteria

 else if (1 <= age &&  age <= 10){

    alert (`The age you have entered ${age} is for a Child`);
   
   
}

//for teenager criteria

else if (11 <= age && age <= 18){

    alert (`The age you have entered ${age} is for a Teenager`);
     
}

//for grown up criteria

else if (19 <= age && age <= 50){

    alert (`The age you have entered ${age} is for a Grown Up`);
    
   
}


//for old criteria


else if ( age >= 50){

    alert (`The age you have entered ${age} is for Old`);
   
   
}
}
while (age > 0)

