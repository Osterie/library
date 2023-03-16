class Vector_2d{
    
    constructor(){

    }
}


class Vector_3d{
    constructor(x, y, z){
        this.vector = [x, y, z]
        this.absolute_value = Math.sqrt(x**2 + y**2 + z**2)
        this.shortened_expression_abs = simplifying_sqrt(x**2 + y**2 + z**2)
    }
}

const test_vector = new Vector_3d(1,2,3)

console.log(test_vector.absolute_value)

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


const test_numb = 13

const factor = factorize(test_numb)

console.log(factor)

function simplifying_sqrt(number){

    //returns strin
}