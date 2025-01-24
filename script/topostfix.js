export function convert_to_postfix(infix_arr) {
    const precedence = {
        '+' : 1, '-' : 1,
        '*' : 2, '/' : 2,
        '^' : 3, '%' : 3, '!' : 3, '√' : 3,        
        'π' : 4, 'e' : 4,
        'sin' : 5, 'cos' : 5, 'tan' : 5, 'abs' : 5, 'log' : 5, 'ln' : 5, 'asin' : 5, 'acos' : 5, 'atan' : 5, 
        'sinh' : 5, 'cosh' : 5, 'tanh' : 5, 'asinh' : 5, 'acosh' : 5, 'atanh' : 5
    };

    function topostfix(infix_arr) {
        let stack = [];
        let postfix = [];
        let temp_num = '';  // Temporary storage for multi-digit numbers or decimals

        for (let i = 0; i < infix_arr.length; i++) {
            let char = infix_arr[i];

            // If the character is a number or a decimal point
            if (!isNaN(char) || char === '.') {
                temp_num += char;  // Build the number (including decimal point)
            } 
            else {
                // push number to postfix
                if (temp_num !== '') {
                    postfix.push(temp_num);
                    temp_num = '';  
                }

                // Handle parentheses
                if (char === '(') {
                    stack.push(char);
                } else if (char === ')') {
                    while (stack[stack.length - 1] !== '(') {
                        postfix.push(stack.pop());
                    }
                    stack.pop(); 
                } else {
                    // Handle operators and functions
                    while (stack.length && 
                        ((precedence[char] < precedence[stack[stack.length - 1]]) || 
                         (precedence[char] === precedence[stack[stack.length - 1]] ))) {
                        postfix.push(stack.pop());
                    }
                    stack.push(char);
                }
            }
        }

        // If there's a number left in temp_num, push it
        if (temp_num !== '') {
            postfix.push(temp_num);
        }

        // Push any remaining operators in the stack to postfix
        while (stack.length) {
            postfix.push(stack.pop());
        }

        return postfix;
    }

    return topostfix(infix_arr);
}
