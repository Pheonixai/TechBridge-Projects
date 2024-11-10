const alphabet = ['a','b', 'c','d', 'e', 'f' , 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
let reversedSentence = '';
function replace(sentence){
    for(const  char of sentence){
        const i = alphabet.indexOf(char.toLowerCase());
        if(alphabet.includes(char)){
            reversedSentence += alphabet[25-i];
        }
    }
    console.log(reversedSentence);
};
// replace("hello world");
replace("svool dliow");