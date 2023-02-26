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

//---------------------------MATH------------------------------

//Returns angle between two vectors, unit can be "deg" or radians
//vectors must be given in form [x, y]
function v2a(vector1, vector2, unit) {
    const vector1_length = Math.sqrt(vector1[0] ** 2 + vector1[1] ** 2);
    const vector2_length = Math.sqrt(vector2[0] ** 2 + vector2[1] ** 2);
  
    if (vector1_length == 0 || vector2_length == 0) {
      return NaN;
    }
    const vector_product = vector1[0] * vector2[0] + vector1[1] * vector2[1];
    //angle as degrees
    if (unit == "deg") {
      const angle = (Math.acos(vector_product / (vector1_length * vector2_length)) * 180) / Math.PI;
      return angle;
    }
  
    //angle as radians
    else {
      const angle = Math.acos(vector_product / (vector1_length * vector2_length));
      return angle;
    }
}


//---------------------CANVAS, DOM-----------------------

function fill_largest_font_centered(canvas, text, font, y_postion, color){
  
    const ctx = canvas.getContext("2d");
    let font_size = largest_font_size(canvas, text, font)
    const canvas_center_x = canvas.width / 2;
    
    ctx.font = `${font_size}px ${font}`;
    ctx.fillStyle = color
    ctx.textAlign = "center";
    ctx.fillText(text, canvas_center_x, y_postion);
}
  
  function largest_font_size(canvas, text, font){
    
    const temporary_canvas = document.createElement('canvas');
    const temporary_ctx = temporary_canvas.getContext("2d");
    temporary_canvas.width = canvas.width;
    temporary_canvas.height = canvas.height;
  
    let font_size = smallest(canvas.height, canvas.width)
  
    temporary_ctx.font = `${font_size}px ${font}`;
    let text_metrics = temporary_ctx.measureText(text);
  
    //algorithm to quickly find the largest possible font size
    while (text_metrics.width > canvas.width){
      font_size *= 0.9
      temporary_ctx.font = `${font_size}px ${font}`;
      text_metrics = temporary_ctx.measureText(text);
    }
    while (text_metrics.width + 1 < canvas.width){
      font_size += 1
      temporary_ctx.font = `${font_size}px ${font}`;
      text_metrics = temporary_ctx.measureText(text);
    }
    return font_size
}

function draw_background(canvas, color){
    ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  

function create_hsl_expression(hue, saturation, lightness){
    return `hsl( ${hue}, ${saturation}%, ${lightness}%)`
}

function text_to_element(text, element){
    element.innerHTML = text
}

function get_cursor_position(event) {
//finds the absolute coordinates clicked, given as distence from top left.
return [event.offsetX, event.offsetY];
}

function update_image(canvas, img){
    dataURL = canvas.toDataURL();
    img.src = dataURL;
}

function draw_square(canvas_info, background_img, cursor_start_x, cursor_end_x, cursor_start_y, cursor_end_y) {
    const canvas = canvas_info;
    const ctx = canvas.getContext("2d", { alpha: false });
    const current_square = largest_drawable_square(cursor_start_x, cursor_end_x, cursor_start_y, cursor_end_y);

    const parameter_x = cursor_start_x + ~~current_square.width;
    const parameter_y = cursor_start_y + ~~current_square.height;

    //Draws the guiding box if it fits the canvas
    if ( (0 < parameter_x && parameter_x < canvas.width) && (0 < parameter_y && parameter_y < canvas.height ) ) {
        ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect( cursor_start_x, cursor_start_y, current_square.width, current_square.height );
        ctx.stroke();
    }
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



//---------------------------FILES-------------------------

async function load(file_name) {
    return await fetch(file_name).then((response) => response.text() );
}