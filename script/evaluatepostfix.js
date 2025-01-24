import {calculate,calculate_binary,calculate_unary} from "./calculate.js"
export function evaluatepostfix(postfix) {
    const binary_operator = ['+', '-', '*', '/', '%', '^'];
    const unary_operator = ['√', '!', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'abs', 'log', 'ln', 'sinh', 'cosh', 'tanh', 'asinh', 'acosh', 'atanh'];

    let stack = [];

    for (let i = 0; i < postfix.length; i++) {
        // Convert to number
        if (!isNaN(postfix[i])) {
            stack.push(parseFloat(postfix[i]));
        }
        // Handle pi and e
        else if (['e', 'π'].includes(postfix[i])) {
            const calc = new calculate();
            if (postfix[i] === 'e') {
                stack.push(calc.e());
            } else {
                stack.push(calc.pi());
            }
        }
        // Handle binary operations
        else if (binary_operator.includes(postfix[i])) {
            if (stack.length < 2) {
                return "Error: Not enough operands for binary operator.";
            }
            let n2 = stack.pop();
            let n1 = stack.pop();
            let ans1;
            const calc = new calculate_binary(n1, n2);
            try {
                switch (postfix[i]) {
                    case '+':
                        ans1 = calc.addition();
                        break;
                    case '-':
                        ans1 = calc.substract();
                        break;
                    case '*':
                        ans1 = calc.multiply();
                        break;
                    case '/':
                        ans1 = calc.divide();
                        break;
                    case '%':
                        ans1 = calc.modulus();
                        break;
                    case '^':
                        ans1 = calc.power();
                        break;
                    default:
                        break;
                }
                stack.push(ans1);
            } catch (error) {
                console.error(error.message);
                return "Error: " + error.message;
            }
        }
        // Handle unary operators
        else if (unary_operator.includes(postfix[i])) {
            if (stack.length < 1) {
                return "Error: Not enough operands for unary operator.";
            }
            let n = stack.pop();
            let ans2;
            const calc = new calculate_unary(n);
            try {
                switch (postfix[i]) {
                    case '√':
                        ans2 = calc.squareroot();
                        break;
                    case '!':
                        ans2 = calc.factorial();
                        break;
                    case 'sin':
                        ans2 = calc.sin();
                        break;
                    case 'cos':
                        ans2 = calc.cos();
                        break;
                    case 'tan':
                        ans2 = calc.tan();
                        break;
                    case 'asin':
                        ans2 = calc.asin();
                        break;
                    case 'acos':
                        ans2 = calc.acos();
                        break;
                    case 'atan':
                        ans2 = calc.atan();
                        break;
                    case 'abs':
                        ans2 = calc.abs();
                        break;
                    case 'log':
                        ans2 = calc.log();
                        break;
                    case 'ln':
                        ans2 = calc.ln();
                        break;
                    case 'sinh':
                        ans2 = calc.sinh();
                        break;
                    case 'cosh':
                        ans2 = calc.cosh();
                        break;
                    case 'tanh':
                        ans2 = calc.tanh();
                        break;
                    case 'asinh':
                        ans2 = calc.asinh();
                        break;
                    case 'acosh':
                        ans2 = calc.acosh();
                        break;
                    case 'atanh':
                        ans2 = calc.atanh();
                        break;
                    default:
                        break;
                }
                stack.push(ans2);
            } catch (error) {
                console.error(error.message);
                return "Error: " + error.message;
            }
        }
        else {
            return "Error: Invalid input.";
        }
    }
    return stack.pop();
}
