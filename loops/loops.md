# Loops
They are three types of loops in javascript.

## While loop
Good to use when we don't know the exact number of iterations we are going to have.
A "while loop" is composed of three components :

1- Indexer variable (a variable that we will evalute against our condition, if true we continue iterating, otherwise we don't)
2- Condition (while this condition is true, we will iterate over and over again)
3- change the value of the indexer (we must not forget to change the value of the indexer variable to get out of the loop)

## For loop

Like "while loop" the difference is the three components {indexer, condition, changing indexer's value} are done in just one line.

## For of loop

Good when we iterate over an array or a collection of objects. We don't have to take care of the indexer variable or the condition.
We use a constante instead of a variable, which is safe and good to prevent scope problems.
