function areParenthesesValid(LispCode){
    //Strip out everything except for parentheses
    let parenthesesOnly = LispCode.replace(/[^\(\)]/g, '');
    //Stack for tracking current open parentheses
    let stack = [];
    //Verify that start of code is wrapped in open and close parentheses
    if(LispCode[0] != '(' && LispCode[LispCode.length-1] != ')'){ return false; }

    //Traverse through the levels of parentheses nesting to confirm open close pairs
    for(let i = 0; i < parenthesesOnly.length; i++){
        if(parenthesesOnly[i] == '('){ 
            stack.push(parenthesesOnly[i]); 
        } else {
            //Check if stack is empty indicating a close parenthesis without a matched open parenthesis
            if(stack.length == 0){ return false; }
            stack.pop();
        }       
    }
    //Check stack length at end to confirm if there are any extra open parenthesis
    return stack.length == 0 ? true : false;
}

//Failing LISP Code snippet
let badSnippet = `(defparameter *small* 1)
)defparameter *big* 100)`;

//Passing LISP Code snippet
let goodSnippet = `(defparameter *small* 1)
(defparameter *big* 100)

(defun guess-my-number ()
     (ash (+ *small* *big*) -1))

(defun smaller ()
     (setf *big* (1- (guess-my-number)))
     (guess-my-number))

(defun bigger ()
     (setf *small* (1+ (guess-my-number)))
     (guess-my-number))

(defun start-over ()
   (defparameter *small* 1)
   (defparameter *big* 100)
   (guess-my-number))`;

console.log('Does the function return a Boolean: ' + (typeof areParenthesesValid('()') === 'boolean' ? 'Pass': 'Fail'));
console.log('This test should result in a false value: ' + (areParenthesesValid(badSnippet) == false ? 'Pass' : 'Fail'));
console.log('This test should result in a true value: ' + (areParenthesesValid(goodSnippet) == true ? 'Pass' : 'Fail'));