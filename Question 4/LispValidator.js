function areParenthesesValid(LispCode){
    //Strip out everything except for parentheses
    
    //Stack for tracking current open parentheses
    
    //Verify that start of code is wrapped in open and close parentheses
    

    //Traverse through the levels of parentheses nesting to confirm open close pairs
    
    //Check stack length at end to confirm if there are any extra open parenthesis
    
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

console.log('Does the function return a Boolean:\n' + (typeof areParenthesesValid('()') === 'boolean' ? 'Yes': 'No'));
console.log('This test should result in a false value:\n' + areParenthesesValid(badSnippet));
console.log('This test should result in a true value:\n' + areParenthesesValid(goodSnippet));