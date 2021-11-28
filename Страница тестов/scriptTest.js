const levels = document.querySelectorAll(".levels")
const first = document.querySelector("#first_level")

document.getElementById('first_level').onclick = function(){
    first_level.classList.add('selected');
    second_level.classList.remove('selected');
    third_level.classList.remove('selected');
    fourth_level.classList.remove('selected');
    fifth_level.classList.remove('selected');
    sixth_level.classList.remove('selected');
   
}
document.getElementById('second_level').onclick = function(){
    first_level.classList.remove('selected');
    second_level.classList.add('selected');
    third_level.classList.remove('selected');
    fourth_level.classList.remove('selected');
    fifth_level.classList.remove('selected');
    sixth_level.classList.remove('selected');
 
}
document.getElementById('third_level').onclick = function(){
    first_level.classList.remove('selected');
    second_level.classList.remove('selected');
    third_level.classList.add('selected');
    fourth_level.classList.remove('selected');
    fifth_level.classList.remove('selected');
    sixth_level.classList.remove('selected');
   
}
document.getElementById('fourth_level').onclick = function(){
    first_level.classList.remove('selected');
    second_level.classList.remove('selected');
    third_level.classList.remove('selected');
    fourth_level.classList.add('selected');
    fifth_level.classList.remove('selected');
    sixth_level.classList.remove('selected');
  
}
document.getElementById('fifth_level').onclick = function(){
    first_level.classList.remove('selected');
    second_level.classList.remove('selected');
    third_level.classList.remove('selected');
    fourth_level.classList.remove('selected');
    fifth_level.classList.add('selected');
    sixth_level.classList.remove('selected');
  
}
document.getElementById('sixth_level').onclick = function(){
    first_level.classList.remove('selected');
    second_level.classList.remove('selected');
    third_level.classList.remove('selected');
    fourth_level.classList.remove('selected');
    fifth_level.classList.remove('selected');
    sixth_level.classList.add('selected');
  
}