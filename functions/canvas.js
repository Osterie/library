
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
  

  function update_image(canvas, img){
    dataURL = canvas.toDataURL();
    img.src = dataURL;
}

function draw_square(canvas, background_img, cursor_start_x, cursor_end_x, cursor_start_y, cursor_end_y) {
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