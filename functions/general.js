//----------------------GENERAL-----------------------------


function is_odd(int){
  return int % 2
}


function multiply_string(string, times){
  new_string = string
  for (let i = 0; i < times; i++) {
    new_string += string
  }
  return new_string
}

//takes axis as arguments, if one of the axis of object 2 is between the two axis of object 1, returns true
function object_collides(object_1_lower, object_1_upper, object_2_lower, object_2_upper){
  // object 2 lower value axis is between object 1 lower value of axis and object 1 upper value of axis
  if (is_between_or_equal(object_2_lower, object_1_lower, object_1_upper)){
    return true
  }
  // object 2 upper value axis is between object 1 lower value of axis and object 1 upper value of axis
  else if (is_between_or_equal(object_2_upper, object_1_lower, object_1_upper)){
    return true
  }
  return false
}

function is_between_or_equal(value_1, value_2, value_3){
  const value_array = sort_numerically([value_1, value_2, value_3])
  if (value_array[1] === value_1){
    return true
  }
  return false
}

function repeating_values(array){
  let repeated_values = []

  for (let i = 0; i < array.length; i++) {

      const testing_number = array[i]

      array.splice(i, 1)
      if (array.includes(testing_number) && !repeated_values.includes(testing_number)) {
          repeated_values.push(testing_number)
      }
      i -= 1
  }
  return repeated_values
}

function revese_array(array) {

  for (let i = 0; i < Math.floor(array.length/2); i++) {
      const temp = array[i]
      array[i] = array[array.length - i - 1]    
      array[array.length - i - 1] = temp
  }
  return array
}   

function sort_ascending(array){
  array.sort(function(a, b) {return a - b;});
  return array
}

function sort_descending(array){
  array.sort(function(a, b) {return b - a;});
  return array
}

function array_random_ints(amount, lowest, largest) {
  const array = []
  for (let i = 0; i < amount; i++) {
      array.push(random_integer_in_range(lowest, largest))
  }
  return array
}

function remove_random_values(array, amount){

  const removed_values = []

  for (let i = 0; i < amount; i++) {
      const random_value = random_integer_in_range(0, array.length)
      removed_values.push(array.splice(random_value, 1).join())
  }
  return removed_values
}

function fill_array_ints(amount) {
  const array = []
  for (let i = 0; i < amount; i++) {
      array.push(i)
  }
  return array
}

//return integers which are not from and including lower_limit, to but not including upper_limit
function random_integer_in_range(lower_limit, upper_limit){
  return Math.floor( (Math.random() * (upper_limit - lower_limit)) + lower_limit)
}

function clear_all_intervals(){
  for (let i = 0; i < 100; i++) {
    window.clearInterval(i)    
  }
}

function create_hsl_expression(hue, saturation, lightness){
  return `hsl( ${hue}, ${saturation}%, ${lightness}%)`
}

function get_cursor_position(event) {
  //finds the absolute coordinates clicked, given as distence from top left.
  return [event.offsetX, event.offsetY];
}


function largest_drawable_square(start_x, end_x, start_y, end_y) {
    let height = 0; //Positive values down, negative values up.
    let width = 0; //positive values to the right, negative to the left.

    //checks which quadrant mouse is in relation to the initially clicked point (think unit circle quadrants or whatever)
    let quadrant = "top_right";

    if (end_y - start_y > 0) {
        quadrant = "bottom_right";
    }

    if (end_x - start_x < 0) {
        quadrant = "bottom_left";
        if (end_y - start_y < 0) {
        quadrant = "top_left";
        }
    }

    const square_width = end_x - start_x;
    const square_height = end_y - start_y;
    //finds the cursor x or y position which would give the greatest width or height (both?)
    //current mouse position is in top right or bottom left quadrant (quadrant top_right or bottom_left)
    if (quadrant == "top_right" || quadrant == "bottom_left") {
        if (Math.abs(square_width) > Math.abs(square_height)) {
        width = square_width;
        height = -width;
        } 
        else {
        height = square_height;
        width = -height;
        }
    }
    //quadrant top_left or bottom_right
    else if (quadrant == "top_left" || quadrant == "bottom_right") {
        if (Math.abs(square_width) > Math.abs(square_height)) {
        width = square_width;
        height = width;
        } 
        else {
        width = square_height;
        height = width;
        }
    }
    return { start_x, end_x, start_y, end_y, width, height };
}

function subtract_array(main_array, subtracting_array){
  for (let i = 0; i < subtracting_array.length; i++) {

      subtract_index = main_array.indexOf(subtracting_array[i])
      if (subtract_index !== -1){
          main_array.splice(subtract_index, 1)
      }
  }
  return main_array
}

function count_decimals(number){
  let number_string = number.toString();
  const decimalCount = (number_string.split('.')[1] || []).length;
  return decimalCount
}
