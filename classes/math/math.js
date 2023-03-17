class Vector_2d{
    
    constructor(){

    }
}

class Vector_3d{
    constructor(x, y, z){
        this.vector = [x, y, z]
        this.absolute_value = Math.sqrt(x**2 + y**2 + z**2)
        // this.shortened_expression_abs = simplifying_sqrt(x**2 + y**2 + z**2)
    }
}

const test_vector = new Vector_3d(1,2,3)

// console.log(test_vector.absolute_value)

class Room_geometry{

    constructor(){

    }

    sum_vectors(vector1, vector2){
       return  
    }

    sub_vectors(vector1, vector2){
        return
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


const simp_exp = simplifying_sqrt(8)
console.log(simp_exp)

function simplifying_division(number){
    const decimals = count_decimals(number)
}

function count_decimals(number){
    let number_string = number.toString();
    const decimalCount = (number_string.split('.')[1] || []).length;
    return decimalCount
}
