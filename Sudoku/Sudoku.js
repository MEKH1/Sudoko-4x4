var sec = 0;

const num = [1, 2, 3, 4];
var sudoku = [];

function time() {
  setInterval(myTimer, 1000);
}
function myTimer() {
  document.getElementById("timer").innerHTML = sec + " sec Passed";
  sec++;
  console.log("sec");
}

document.getElementById("check").addEventListener("click", get_number);

function get_number(e) {
  const n1 = document.getElementById("1").value;
  const n2 = document.getElementById("2").value;
  const n3 = document.getElementById("3").value;
  const n4 = document.getElementById("4").value;

  const n5 = document.getElementById("5").value;
  const n6 = document.getElementById("6").value;
  const n7 = document.getElementById("7").value;
  const n8 = document.getElementById("8").value;

  const n9 = document.getElementById("9").value;
  const n10 = document.getElementById("10").value;
  const n11 = document.getElementById("11").value;
  const n12 = document.getElementById("12").value;

  const n13 = document.getElementById("13").value;
  const n14 = document.getElementById("14").value;
  const n15 = document.getElementById("15").value;
  const n16 = document.getElementById("16").value;

  e.preventDefault();
}

function getRandomID(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

var row_1 = getRandomID(1, 4);
var row_2 = getRandomID(5, 8);
var row_3 = getRandomID(9, 12);
var row_4 = getRandomID(13, 16);

function getRandom_num(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

id_new_row1 = row_1.toString();
id_new_row2 = row_2.toString();
id_new_row3 = row_3.toString();
id_new_row4 = row_4.toString();

random_num1 = getRandom_num(1, 4);
random_num2 = getRandom_num(1, 4);
random_num3 = getRandom_num(1, 4);
random_num4 = getRandom_num(1, 4);

var fixed1 = document.getElementById(id_new_row1);
fixed1.value = random_num1;

var fixed2 = document.getElementById(id_new_row2);
fixed2.value = random_num2;

var fixed3 = document.getElementById(id_new_row3);
fixed3.value = random_num3;

var fixed4 = document.getElementById(id_new_row4);
fixed4.value = random_num4;

// This function used to add inputs to an array
function add_toarray() {
  var k = 0;
  for (let index = 0; index < 16; index++) {
    k++;
    id_k = k.toString();

    sudoku.push(document.getElementById(id_k).value);
  }
  localStorage.setItem("main_sudoku", sudoku);

  console.log(sudoku);
}

var first_mat = [];
var second_mat = [];
var third_mat = [];
var fourth_mat = [];

function add_toarray_main() {
  add_toarray();

  var main_mat = localStorage.getItem("main_sudoku");
  //   var main_sudoku=main_mat.split(",");

  //   console.log(main_sudoku);

  //   for (let index = 0; index < main_mat.length; index++) {

  //     if (index === 0 || index === 1 || index === 4 || index === 5) {

  //      first_mat.push(main_mat[index]);

  //     }
  //     if (index === 2 || index === 3 || index === 6 || index === 7) {
  //       second_mat.push(main_mat[index]);
  //     }
  //     if (index === 8 || index === 9 || index === 12 || index === 13) {
  //       third_mat.push(main_mat[index]);
  //     }
  //     if (index === 10 || index === 11 || index === 14 || index === 15) {
  //       fourth_mat.push(main_mat[index]);
  //     }

  //   }
  // console.log(first_mat)
  // console.log(second_mat)
  // console.log(third_mat)
  // console.log(fourth_mat)
  localStorage.setItem("main_mat", main_mat);
  localStorage.setItem("first_mat1", first_mat);
  localStorage.setItem("second_mat1", second_mat);
  localStorage.setItem("third_mat1", third_mat);
  localStorage.setItem("fourth_mat1", fourth_mat);
  validation();
}

function validation() {
  main_mat = localStorage.getItem("main_mat");
  first_mat = localStorage.getItem("first_mat1");
  second_mat = localStorage.getItem("second_mat1");
  third_mat = localStorage.getItem("third_mat1");
  fourth_mat = localStorage.getItem("fourth_mat1");

  var main_sudoku = main_mat.split(",");

  // console.log(first_mat)
  // console.log(second_mat)
  // console.log(third_mat)
  // console.log(fourth_mat)
  console.log(main_sudoku);

  var newmain_sudoku = [];
  while (main_sudoku.length) newmain_sudoku.push(main_sudoku.splice(0, 4));
var k=0;
  // compare elements with columns
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i !== j) {
        if (newmain_sudoku[i][i] !== newmain_sudoku[j][i]) {
            
        } else {
          k++;
        }
      }
    }
    
  }
  

  // compare elements with rows
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i !== j) {
        if (newmain_sudoku[i][i] !== newmain_sudoku[i][j]) {
           
        } 
        else {
          k++
        }
      }
    }
  }

//   CHECK IF THE PLAYER WON THE GAME
  if(k>0)
  {error()

  }else{winner()}
  
}






function error() {
  
    for (let element of document.getElementsByClassName("loser")){
        element.style.display="block";
        
     }

  }

  function winner() {
  
    for (let element of document.getElementsByClassName("winner")){
        element.style.display="block";
     }


}
