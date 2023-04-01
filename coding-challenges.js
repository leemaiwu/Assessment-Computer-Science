// 1. Sum Zero  --  Runtime Complexity: O(n^2)  //

    function addToZero(array) {
        for (let i = 0; i < array.length; i++) {
            for (let k = i + 1; k < array.length; k++)
            if (array[i] + array[k] === 0) {
                return true
            }
        }
        return false
    }
    console.log(addToZero([])) // false
    console.log(addToZero([1])) // false
    console.log(addToZero([1, 2, 3])) // false
    console.log(addToZero([1, 2, 3, -2])) // true


// 2. Unique Characters  --  Runtime Complexity: O(n^2) //

    function hasUniquechars(str) {
        let strArr = str.split('')
        for (let i = 0; i < strArr.length; i++) {
            for (let k = i + 1; k < strArr.length; k++) {
                if (strArr[i] === strArr[k]) {
                    return false
                }
            }
        }
        return true
    }
    console.log(hasUniquechars("Monday"))
    console.log(hasUniquechars("Moonday"))


// 3. Pangram Sentence  --  Runtime Complexity: O(n) //

    function isPangram(str) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let strUpper = str.toUpperCase()
        for (let i = 0; i < alphabet.length; i++) {
            if (strUpper.indexOf(alphabet[i]) === -1) {
                return false
            }
        }
        return true
    }
    console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
    console.log(isPangram('I like cats, but not mice'))


// 4. Longest Word  --  Runtime Complexity: O(n)  //

    function findLongestWord(strArr) {
        let longestWord = ''
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i].length > longestWord.length) {
                longestWord = strArr[i]
            }
        }
        return longestWord.length
    }
    console.log(findLongestWord(['hi', 'hello']))
