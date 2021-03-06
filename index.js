/*
We have a boolean matrix that contains 2 lines and 2 columns
Each cell is randomly true or false at start
const matrix = [[true, false], [true, true]];

We can change the value one by one as much as we want
But each time, all the values of the same line and column are negate (flipped)
so here, if we change false to true, we obtain
[[false, true], [true, false]];
So you can only use the immutable "flipcross" function to get the new array

Find an algo that can turn the boolean matrix to fully true
"BIG O" logged must be the smallest possible
"WIN R" must be true
*/

// extra
import { generateSquaredMatrix } from './src/extra/booleanMatrixHelper';
// custom
import { checkResolvedRiddle } from './src/custom/testSolution';
import { algoRiddle1 } from './src/custom/algoRiddle1';
import { aiRiddle1 } from './src/custom/aiRiddle1';

// random matrix
const randomBoolMatrix = generateSquaredMatrix(2);

/*
 */
aiRiddle1();
/*
 */
// this is the test case
/*
const { matrix, bigO, solution } = algoRiddle1(randomBoolMatrix);
console.log('WIN R: ', checkResolvedRiddle(matrix));
console.log('BIG O: ', bigO);
console.log('-------- SOLUTION --------');
console.log(solution);
console.log('--------------------------');
/*
 */
