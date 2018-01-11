//Given sorted array: var nums = [1, 1, 2];

// Remove the duplicates in -place such that each elements appear only once and return the new length.

// Do not allocate extra space for another array
// You must do this by modifying the input array in -place with O(1) extra memory.


//function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn 't matter what you leave beyond the new length.

// Example reults:
let numss = [1, 2, 2, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20];

//Correct output using Browser-Console line-by-line:
removeDuplicates(numss); // execute this in console [ enter-key ]
console.log(numss); //logs numss array to console to visualy check it for duplicates -> place in logic -> before return statement
[1, 2, 3, 4, 5, 6, 9, 10, 11, 14, 18, 20, undefined, 20, 20] //numss array logged with no duplicates
12 //length returned by return statement

//Solution:
// Duplicates cannot exist within our array, so, [1,1 ..] would violate
// Anything after the removed duplicates doesn't count in this solution as a duplicate

// let numss = [1, 2, 2, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20];

var removeDuplicates = function (nums) {

  if (nums === null || nums.length === 0) return 0; // Check if-statement for truthyness
  if (nums.length == 1) return 1; // Check if-statement for truthyness

  var j = 0; // Declare & assign value to var-j -> number value of 0

  for (var i = 0; i < nums.length; i++) { // Declare for-loop

    if (nums[i] != nums[i + 1]) { // Check if-statement for truthyness
      //i=0 //if // nums[0] != nums[0+1] //-> 1 != 2 (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //i=1 //if // nums[1] != nums[1+1] //-> 2 != 2 (false) -> fire no statements below: skip to next iteration i=2 . . .
      //i=2 //if // nums[2] != nums[2+1] //-> 2 != 3 (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //i=3 //if // nums[3] != nums[3+1] //-> 3 != 4 (true) -> fire statements below: j++ ; nums[]=nums[..] ;
      //i=4 //if // nums[4] != nums[4+1] //-> 4 != 5 (true) -> fire statements below: j++ ; nums[]=nums[..] ;


      j++;
      // Add 1 to value of j:
      // i=0: j = 0 + 1(j=1) ;
      // i=2: j = 1 + 1(j=2) ;
      // i=3: j = 2 + 1(j=3) ;
      // i=4: j = 3 + 1(j=4) ;



      nums[j] = nums[i + 1];
      //////// j=1 <-> nums[j] <-> nums[1] = 2   =   i=0 <-> nums[0+1] = nums[1] = 2
      //mod1// j=2 <-> nums[j] <-> nums[2] = 2   =   i=2 <-> nums[2+1] = nums[3] = 3
      //mod2// j=3 <-> nums[j] <-> nums[3] = 3   =   i=3 <-> nums[3+1] = nums[4] = 4
      //mod3// j=4 <-> nums[j] <-> nums[4] = 4   =   i=4 <-> nums[4+1] = nums[5] = 5



      // indices // [ 0  1  2  3  4  5  6  7  8   9   10  11  12  13  14 ]
      // orig.   // [ 1, 2, 2, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20 ]
      console.log(nums); //lt
      // mod1    // [ 1, 2, 3, 3, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20 ] true  // set 2 = 2 ( nums[1] = nums[1] )
      // mod2    // [ 1, 2, 3, 4, 4, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20 ] false // set 2 = 3 ( nums[2] = nums[3] )
      // mod3    // [ 1, 2, 3, 4, 5, 5, 6, 9, 10, 10, 11, 14, 18, 20, 20 ] true  // set 3 = 4 ( nums[3] = nums[4] )
      // mod4    // [ 1, 2, 3, 4, 5, 6, 6, 9, 10, 10, 11, 14, 18, 20, 20 ] true  // set 4 = 5 ( nums[4] = nums[5] )


    }

  }

  return j;

};

/*

Logic Conceptually:

Whenever the if-statement in the for-loop evaluates to (false) a duplicate is found ( 2 = 2 ). . .
. . . When this duplicate is found and if-statement evaluates to (false) the orig. nums array is not modified . . .
. . . This means the index where the duplicate exists is skipped over . . .
. . . The next time the if-statement in the for-loop evalutes to (true) a duplicate is NOT found . . .
. . . This means the index is used to replace the previous index
When the if-statment does not evalue to (true) all logic within the { } of the statement is not fired . . .
. . . This means j will not increase by 1 when duplicates are found, because . . .
. . . j only increases by 1 ( j++ ) when the if-statement evaluates to (true) . . .
. . . And the if-statement only evalutes to true when the index of i is not equal (!=) to the index of i+1 within nums array

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
