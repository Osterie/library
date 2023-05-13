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

function floor(dividend, divisor){
  const quotient = Math.floor(dividend / divisor)
  return quotient
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

function array_largest(array){
  let max = -Infinity
  for (let i = 0; i < array.length; i++) {

    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

function array_smallest(array){
  let min = Infinity
  for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
      min = array[i]
      }
  }
  return min
}


function array_variation_width(array){
  let max = -Infinity
  let min = Infinity

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
    min = array[i]
    }

    if (array[i] > max) {
    max = array[i]
    }
  }

  const variation = max - min
  return variation
}

function array_average(array){
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  const average = sum / array.length
  return average
}