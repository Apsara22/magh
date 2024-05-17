

db.students.insertOne({
name:"hari",
age:20
})

db.teachers.insertMany([
    {
        name:"ABC",
        age:20,
    },
    {
        name:"DEF",
        age:20
    }
])

db.todos.insertOne({
    title:"html"
})

db.todos.insertMany([
    {
        title:"html",
        status:true,
    },
    {
        title:"css",
        status:true,
    },
    {
        title:"js",
        status:true,
    },
])


   
)