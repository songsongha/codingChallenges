// this first function fails for really long strings due to memory issues
function palindromeIndex(s: string): number {
    // first check for a palindrome

    const isPalindrome = (someString: string) => {
        console.log('is this a palindrome', someString)
        for (let i = 0; i < someString.length; i++) {
            if (someString[i] !== someString[someString.length - 1 - i]) {
                console.log('not a palindrome')
                return false
            }
        }
        return true
    }

    if (isPalindrome(s)) return -1
    for (let i = 0; i < s.length; i++) {
        const newString = s.slice(0, i) + s.slice(i + 1)
        console.log({ newString })
        if (isPalindrome(newString)) return i
    }
    return -2
}

function isPalindrome(s: string, left: number, right: number) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

function palindromeIndex2(s: string) {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else {
            // Check if removing either the left or the right character results in a palindrome
            if (isPalindrome(s, left + 1, right)) {
                return left
            }
            if (isPalindrome(s, left, right - 1)) {
                return right
            }
            return -1 // Neither removal makes it a palindrome
        }
    }

    return -1 // The string is already a palindrome
}
