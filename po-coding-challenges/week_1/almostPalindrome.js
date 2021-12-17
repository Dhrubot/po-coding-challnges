function almostPalindrome(string){

    if((string.length % 2) === 1){

        let midpoint = Math.trunc(string.length / 2) + 1;

        return checkPalindrome(string.substring(0, midpoint - 1), string.substring(midpoint, string.length));
    }else{
        return checkPalindrome(string.substring(0, string.length/2), string.substring(string.length/2, string.length));
    }
}

function checkPalindrome(str1, str2){
    let arr1 = str1.split('').reverse();
    let arr2 = str2.split('');

    let numWrong = 0;

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            numWrong++;
        }
    }

    if(numWrong > 1){
        return false;
    }else{
        return true;
    }
}

console.log(almostPalindrome("abcdaaa"));

console.log(almostPalindrome("1234312"));