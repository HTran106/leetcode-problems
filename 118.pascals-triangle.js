/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
/*
Input: integer, amount of rows;
Output: array of arrays, each array is a row of the triangle.
each element of the next row will be the sum of two previous row's upper neighbor

declare a function name pasCalsTriangle with 1 parameter numRows
declare a results variable containing an array with 2 inner arrays, first one will be [1] and second
one will be [1,1]
iterate through that array, grabbing the last row
skipping the first and last index as they are just 1's
create a temporary array to build my row before i add it to my results array.
start off the first element with 1
then i grab the current element at the index with the next one and add it together then push
it to my temporary array, once that's done
add another 1 element to the end
finally add to that to my results array

*/

var generate = function (numRows) {
    // if (numRows === 1) return [[1]]
    // if (numRows === 2) return [[1], [1,1]]
    // const res = [[1], [1,1]]
    // while (numRows - 2 !== 0) {
    //     const prevRow = res[res.length - 1]
    //     const temp = [1]
    //     for (let i = 0; i < prevRow.length - 1; i++) {
    //         let num1 = prevRow[i]
    //         let num2 = prevRow[i + 1]
    //         temp.push(num1 + num2)
    //     }
    //     temp.push(1)
    //     res.push(temp)
    //     numRows--
    // }
    // return res

    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1,1]]

    const triangle = [[1],[1,1]]

    let i = 3
    while (i !== numRows + 1) {
        last = triangle[triangle.length - 1]
        next = [1]

        for (let i = 0; i < last.length - 1; i++) {
            next.push(last[i] + last[i + 1])
        }

        next.push(1)
        triangle.push(next)
        i++
    }
    return triangle
};
// @lc code=end


/*
let res = [
        [1],
    ];

    while (res.length < numRows) {
        let prevRow = res[res.length - 1];
        let newRow = [1];
        for (let i = 0; i < prevRow.length - 1; i++) {
            newRow.push(prevRow[i] + prevRow[i + 1]);
        }
        newRow.push(1);
        res.push(newRow);
    }
    return res

*/
