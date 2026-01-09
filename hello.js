const student = {
    name: "Sachin",
    className: 100, 
    calculateFee : (fee) => {
        return fee + 100
    }
}

console.log(student.name)
console.log(student.className)
console.log(student.calculateFee(100))


// Destrucutring of objects (Another way)

const {name, className, calculateFee} = student // => Destructuing
console.log(name)
console.log(className)
console.log(calculateFee(400))


function returnInfo(name, className) {
    return {
        name,
        className
    }
}


console.log(returnInfo("Sachin", 10))