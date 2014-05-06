
var alphabet = "abcdefghijklmnopqrstuvwxyz";
function LetterChanges(str) {
    var alphabetArray = "abcdefghijklmnopqrstuvwxyza".split("");
    var vowelArray = "aeiou".split("");
    var stringArray = str.split("");

    for (var i = 0; i < stringArray.length; i++) {
        var index = alphabetArray.indexOf(stringArray[i]);
        if (index !== -1) {
            stringArray[i] = alphabetArray[index + 1];
        }
        //if (index === 25) {
        //    stringArray[i] = alphabetArray[0];
        //}
    }

    for (var i = 0; i < stringArray.length; i++) {
        var newIndex = vowelArray.indexOf(stringArray[i]);
        if (newIndex !== -1) {
            stringArray[i] = stringArray[i].toUpperCase();
        }
    }
    return stringArray.join("");
}

alert(LetterChanges("SDFJKLaafuzn ztiameaas!"));



function LetterCapitalize(str) {
    /* 
      1.Turn the string into an array element
      2.Create a for loop that loops through the string
      3.Create an index variable that is the location of 
      4.If it finds a space, capitalize the next letter
        This does not capitalize the first letter in a sentence
    */

    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++) {
        strArray[i]= strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1);
    }
    return strArray.join(" ");
}

alert(LetterCapitalize("test this sentence"));