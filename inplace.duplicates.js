//Given sorted array: var nums = [1, 1, 2];

// Remove the duplicates in -place such that each elements appear only once and return the new length.

// Do not allocate extra space for another array
// You must do this by modifying the input array in -place with O(1) extra memory.


//function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn 't matter what you leave beyond the new length.

// Example results:
let numss = [1, 2, 2, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20];

//Correct output using Browser-Console line-by-line:
removeDuplicates(numss); // execute this in console [ enter-key ]
console.log(numss); //logs numss array to console to visualy check it for duplicates -> place in logic -> within the for-loops if-statement
[1, 2, 3, 4, 5, 6, 9, 10, 11, 14, 18, 20, undefined, 20, 20] //final numss array logged with no duplicates
12 //final length returned by return statement

//Solution:
// Duplicates cannot exist within our array, so, [1,1 ..] would violate
// Anything after the removed duplicates doesn't count in this solution as a duplicate

// let numss = [1, 2, 2, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20];

var removeDuplicates = function (nums) {

  if (nums === null || nums.length === 0) return 0; // Check if-statement for truthyness: Incoming parameter is a value of a variable, this value has a type, it's type cannot == null ( it should be of type array ), since it should be of type array the .length method can be used to return the length of the array value, the arrays length cannot == 0 either. Otherwise we have nothing to sort.
  if (nums.length == 1) return 1; // Check if-statement for truthyness: If the incoming parameter is a variable with a value, we know it's value shoud be of type array, we know arrays have length accessible using .length method which returns the arrays length, if array.length == 1 then we again have nothing to sort.

  var j = 0; // Declare & assign value to var-j -> number value of 0: j is used to count through (iterate) the array differently than i will.

  for (var i = 0; i < nums.length; i++) { // Declare for-loop: i variable declared and assigned number value of 0, truthy statement to check for on earch for-loop iteration: { i < nums.length }-? T/F? And each iteration causes the value of i to increase by 1 ( i++ )

    if (nums[i] != nums[i + 1]) { // Check if-statement for truthyness
      //mod1   //i=0 //if // nums[0] != nums[0+1] //-> 1 != 2    (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //NOmod  //i=1 //if // nums[1] != nums[1+1] //-> 2 != 2    (false) -> fire no statements below: j-maintains-value & skip to next iteration i=2 . . .
      //mod2   //i=2 //if // nums[2] != nums[2+1] //-> 2 != 3    (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //mod3   //i=3 //if // nums[3] != nums[3+1] //-> 3 != 4    (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //mod4   //i=4 //if // nums[4] != nums[4+1] //-> 4 != 5    (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //mod5   //i=5 //if // nums[5] != nums[5+1] //-> 5 != 6    (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //mod6   //i=6 //if // nums[6] != nums[6+1] //-> 6 != 9    (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //mod7   //i=7 //if // nums[7] != nums[7+1] //-> 9 != 10   (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //NOmod  //i=8 //if // nums[8] != nums[8+1] //-> 10 != 10  (false) -> fire no statements below: j-maintains-value & skip to next iteration i=9 . . .
      //mod8   //i=9 //if // nums[9] != nums[9+1] //-> 10 != 11  (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //mod9   //i=10 //if // nums[10] != nums[10+1] //-> 11 != 14 (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      // ...

      j++;
      // Add 1 to value of j:
      // i=0: j = 0 + 1 -> j=1 ; //mod1
      // i=2: j = 1 + 1 -> j=2 ; //mod2
      // i=3: j = 2 + 1 -> j=3 ; //mod3
      // i=4: j = 3 + 1 -> j=4 ; //mod4
      // i=5: j = 4 + 1 -> j=5 ; //mod5
      // i=6: j = 5 + 1 -> j=6 ; //mod6
      // i=7: j = 6 + 1 -> j=7 ; //mod7
      // i=9: j = 7 + 1 -> j=8 ; //mod8
      // i=10: j = 8 + 1 -> j=9 ; //mod9
      // ...


      nums[j] = nums[i + 1];
      //mod1// j=1 <-> nums[j] <-> nums[1] = 2   =   i=0 <-> nums[0+1] = nums[1]  = 2
      //mod2// j=2 <-> nums[j] <-> nums[2] = 2   =   i=2 <-> nums[2+1] = nums[3]  = 3
      //mod3// j=3 <-> nums[j] <-> nums[3] = 3   =   i=3 <-> nums[3+1] = nums[4]  = 4
      //mod4// j=4 <-> nums[j] <-> nums[4] = 4   =   i=4 <-> nums[4+1] = nums[5]  = 5
      //mod5// j=5 <-> nums[j] <-> nums[5] = 5   =   i=5 <-> nums[5+1] = nums[6]  = 6
      //mod6// j=6 <-> nums[j] <-> nums[6] = 6   =   i=6 <-> nums[6+1] = nums[7]  = 9
      //mod7// j=7 <-> nums[j] <-> nums[7] = 9   =   i=7 <-> nums[7+1] = nums[8]  = 10
      //mod8// j=8 <-> nums[j] <-> nums[8] = 10  =   i=9 <-> nums[9+1] = nums[10] = 11
      //mod9// j=9 <-> nums[j] <-> nums[9] = 10  =   i=10 <-> nums[10+1] = nums[11] = 14
      // ...



      // indices // [ 0  1  2  3  4  5  6  7  8   9   10  11  12  13  14 ]
      // mod1    // [ 1, 2, 2, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20 ]  true  // set 2 = 2   ( nums[1] = nums[1] )
      // mod2    // [ 1, 2, 3, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20 ]  ture  // set 2 = 3   ( nums[2] = nums[3] )
      // mod3    // [ 1, 2, 3, 4, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20 ]  true  // set 3 = 4   ( nums[3] = nums[4] )
      // mod4    // [ 1, 2, 3, 4, 5, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20 ]  true  // set 4 = 5   ( nums[4] = nums[5] )
      // mod5    // [ 1, 2, 3, 4, 5, 6, 6, 9, 10, 10, 11, 14, 18, 20, 20 ]  true  // set 5 = 6   ( nums[5] = nums[6] )
      // mod6    // [ 1, 2, 3, 4, 5, 6, 9, 9, 10, 10, 11, 14, 18, 20, 20 ]  true  // set 6 = 9   ( nums[6] = nums[7] )
      // mod7    // [ 1, 2, 3, 4, 5, 6, 9, 10, 10, 10, 11, 14, 18, 20, 20 ] true  // set 9 = 10  ( nums[7] = nums[8] )
      // mod8    // [ 1, 2, 3, 4, 5, 6, 9, 10, 11, 10, 11, 14, 18, 20, 20 ] true  // set 10 = 11 ( nums[8] = nums[10] )
      // mod9    // [ 1, 2, 3, 4, 5, 6, 9, 10, 11, 14, 11, 14, 18, 20, 20 ] true  // set 10 = 14 ( nums[9] = nums[11] )
      // ...

      console.log(nums); // On each iteration of for-loop log the array value representing nums parameter, which is the value of numss array: Only logs when mod happens and if-statment is truthy

    }

  }

  return j; // Return the number value of j, which will represent the length of the sorted array ( not including array indices after the sorted values ) //= 12

};

/*

Logic Conceptually:

Whenever the if-statement in the for-loop evaluates to (false) a duplicate is found ( 2 = 2 ). . .
. . . When this duplicate is found and if-statement evaluates to (false) the orig. numss array is not modified . . .
. . . This means the index where the duplicate exists is skipped over - value of j does not increase . . .
. . . The next time the if-statement in the for-loop evaluates to (true) a duplicate is NOT found . . .
. . . This means the index is used to replace the previous index - value of j does increase by 1
When the if-statment does not evalue to (true) all logic within the { } of the statement is not fired . . .
. . . This means j will not increase by 1 when duplicates are found, because . . .
. . . j only increases by 1 ( j++ ) when the if-statement evaluates to (true) . . .
. . . And the if-statement only evalutes to true when the index of i is not equal (!=) to the index of i+1 within numss array

*/
// Pattern of duplicate removal created by console.log(nums):
// [1, 2, 2, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20]
// [1, 2, 3, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20]
// [1, 2, 3, 4, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20]
// [1, 2, 3, 4, 5, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20]
// [1, 2, 3, 4, 5, 6, 6, 9, 10, 10, 11, 14, 18, 20, 20]
// [1, 2, 3, 4, 5, 6, 9, 9, 10, 10, 11, 14, 18, 20, 20]
// [1, 2, 3, 4, 5, 6, 9, 10, 10, 10, 11, 14, 18, 20, 20]
// [1, 2, 3, 4, 5, 6, 9, 10, 11, 10, 11, 14, 18, 20, 20]
// [1, 2, 3, 4, 5, 6, 9, 10, 11, 14, 11, 14, 18, 20, 20]
// [1, 2, 3, 4, 5, 6, 9, 10, 11, 14, 18, 14, 18, 20, 20]
// [1, 2, 3, 4, 5, 6, 9, 10, 11, 14, 18, 20, 18, 20, 20]
// [1, 2, 3, 4, 5, 6, 9, 10, 11, 14, 18, 20, undefined, 20, 20]
