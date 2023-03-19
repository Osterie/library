class Vector_2d{
    
    constructor(){

    }
}

class Vector_3d{
    constructor(x, y, z){
        this.vector = [x, y, z]
        this.length = Math.sqrt(x**2 + y**2 + z**2)
        this.length_shortened = simplifying_sqrt(x**2 + y**2 + z**2)
    }
}

const test_vector = new Vector_3d(3,3,3)
const test_vector_2 = new Vector_3d(3,3,3)
console.log(test_vector.length)
console.log(test_vector.length_shortened)


class Room_geometry{

    constructor(){

    }

    add_vectors(vector1, vector2){
       return  [vector1[0] + vector2[0], vector1[1] + vector2[1], vector1[2] + vector2[2]]
    }

    subtract_vectors(vector1, vector2){
        return [vector1[0] - vector2[0], vector1[1] - vector2[1], vector1[2] - vector2[2]]
    }

    scalar_product(vector1, vector2){
        return vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2]
    }

    multiply_with_constant(vector, constant){
        return [vector[0] * constant, vector[1] * constant, vector[2] * constant]
    }

    vector_product(vector1, vector2){

    }

    are_parallel(vector1, vector2){
        
        return
    }

    are_ortogonal(vector1, vector2){

        if (vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2] === 0){
            return true
        }
        return false
    }

    //Returns angle between two vectors, unit can be "deg" or radians
    //vectors must be given in form [x, y]
    v2a(vector1, vector2, unit) {
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
}



function create_3d_vector_from_points(point_a, point_b){
    const vector = [ (point_b[0] - point_a[0]) , (point_b[1] - point_a[1]), (point_b[2] - point_a[2]) ]
    return vector
}

function factorize(int){
    const factores = []

    for (let i = 2; i <= int; i++) {
        if (int % i === 0){
            factores.push(i)
            int /= i
            i = 1
        }
    }
    return factores
}



function simplifying_sqrt(number){
    const factores = factorize(number) 
    let coefficient = 1
    let rest = 1

    for (let i = 0; i <= factores.length; i++) {

        const number = factores[0]
        const number_instances = count_remove_instances(factores, number)

        if (number_instances === 0){continue}

        i = 0

        if (number_instances != 1){
            coefficient *= (number ** floor(number_instances, 2) )
        }
        if (is_odd(number_instances)){
            rest *= number * (number_instances % 2)
        }
    }

    if (rest === 1){
        return `${coefficient}`
    }

    if (coefficient === 1){
        return `Sqrt(${rest})`

    }

    return `${coefficient}*Sqrt(${rest})`
}



function floor(dividend, divisor){
    const quotient = Math.floor(dividend / divisor)
    return quotient
  }

function count_remove_instances(array, item){
    const length_before = array.length

    for (let i = 0; i <= array.length; i++) {
        //finnere indexen til det gitte tallet, om det finnes
        if (array.indexOf(item) != -1){
            const subtract_index = array.indexOf(item)
            //fjerner verdien på plassen vi fant
            array.splice(subtract_index, 1)
            i -=1
        }

    }
    const length_after = array.length
    const instances = length_before-length_after
    return instances
}

function is_odd(int){
    return (int % 2)
}

function simplifying_division(dividend, divisor){
    const dividend_facotres = factorize(dividend)
    const divisor_facotres = factorize(divisor)
    const dividend_facotres_copy = factorize(dividend)

    const shortened_divident_array = subtract_array(dividend_facotres, divisor_facotres)
    const shortened_divisor_array = subtract_array(divisor_facotres, dividend_facotres_copy)

    let shortened_divident = multiplied_array_values(shortened_divident_array)
    let shortened_divisor = multiplied_array_values(shortened_divisor_array)

    if (shortened_divisor_array.length === 0){
        return `${shortened_divident}`    
    }

    return `${shortened_divident} / ${shortened_divisor}`
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

function multiplied_array_values(array){
    let product = 1
    for (let i = 0; i < array.length; i++) {

        product *= array[i]
    }
    return product
}