//----------------------GENERAL-----------------------------

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

function sort_numerically(array){
  array.sort(function(a, b) {return a - b;});
  return array
}

//can return can not return lower_limit-1 or upper_limit
function random_integer_in_range(lower_limit, upper_limit){
  return Math.floor( (Math.random() * (upper_limit - lower_limit)) + lower_limit)
}

function largest(number_1, number_2){
  if (number_1 >= number_2){
    return number_1
  }
  return number_2
}

function smallest(number_1, number_2){
  if (number_1 <= number_2){
    return number_1
  }
  return number_2
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

//TODO: add a floor division functions?