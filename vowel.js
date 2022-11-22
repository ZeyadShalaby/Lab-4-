// taking input from user
var string = prompt("Please enter a string");


//array to store vowels

const vowels = ["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"]

//function to check the vowel count

function countVowel(str){
    let count = 0;

    for(let letter of str){
        if(vowels.includes(letter)){
            count ++;
        }
    }
    
    return count

}

//printing results

const result = countVowel(string);
alert(`The number of vowels is ${result}`);