let students = []
students.push({ name: 'David', age: 18 })
students.push({ name: 'John', age: 20 })

localStorage.setItem('students', students)

let studentsStr = JSON.stringify(students)

localStorage.setItem('students', studentsStr)

let reader = localStorage.getItem('students')

console.log(reader)

let deserializeReader = JSON.parse(reader)

console.log(deserializeReader)