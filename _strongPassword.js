// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:

// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"
// Example '2bbbb' 2 => 2bbb#A


// This password is 5 characters long and is missing an uppercase and a special character. The minimum number of characters to add is .

function strongPassword(password) {
        let count = 0;
        let gap = 6 - password.length;

        let hasNumber = password.match(/\d+/);
        let hasLowerCase = password.match(/[a-z]+/);
        let hasUpperCase = password.match(/[A-Z]+/);
        let hasSpecialSymbol = password.match(/\W/);
        // console.log(hasNumber, hasLowerCase, hasUpperCase, hasSpecialSymbol)

        if (password.length < 6) count += gap;
        // if (!hasNumber) count++;
        // if (!hasLowerCase) count++;
        // if (!hasUpperCase) count++;
        // if (!hasSpecialSymbol) count++;

        // if (hasNumber && hasLowerCase && hasUpperCase && hasSpecialSymbol && password.length < 6) count += gap;

        // if ((!hasNumber || !hasLowerCase || !hasUpperCase || !hasSpecialSymbol) && password.length < 6) count -= gap;

        console.log(count)

}

strongPassword('2Bb')

// strongPassword('2bbbb')
// strongPassword('2bb#A')

// strongPassword('#HackerRank')//1

