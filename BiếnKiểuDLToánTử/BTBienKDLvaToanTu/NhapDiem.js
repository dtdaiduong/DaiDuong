let inputphysics;
let inputchemistry;
let inputbiology;
inputphysics = prompt("Enter physics score");
inputchemistry = prompt("Enter chemistry score");
inputbiology = prompt("Enter biology score");
let physics = parseInt(inputphysics);
let chemistry = parseInt(inputchemistry);
let biology = parseInt(inputbiology);
let total = physics + chemistry + biology;
let average = total / 3;
document.write('The total score is: ' + total);
document.write('<br>')
document.write('the average score: ' + average);