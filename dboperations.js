const { MongoClient } = require('mongodb');
const client = new MongoClient(url);
const dbName = 'school';

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to the database"); // Step 1 
        return client.db(dbName);
    } catch (error) {
        console.error("Connection error:", error); // Step 1 [cite: 195]
    }
}

async function insertData(db) {
    // Chèn dữ liệu sinh viên [cite: 198-215]
    await db.collection('students').insertMany([
        { "name": "John", "age": 22, "major": "Math" },
        { "name": "Anna", "age": 20, "major": "Computer Science" },
        { "name": "Mike", "age": 21, "major": "Physics" }
    ]);
    // Chèn dữ liệu khóa học [cite: 216-219]
    await db.collection('courses').insertMany([
        { "course_name": "Database Systems", "credit_hours": 4 },
        { "course_name": "Operating Systems", "credit_hours": 3 },
        { "course_name": "Artificial Intelligence", "credit_hours": 4}
    ]);
}

async function queryData(db) {
    console.log("--- All Students ---");
    const students = await db.collection('students').find().toArray(); // [cite: 221]
    console.log(students);
    
    const anna = await db.collection('students').findOne({ name: "Anna" }); // [cite: 224]
    console.log("Found Anna:", anna);
}

async function updateAndDelete(db) {
    // Cập nhật John [cite: 227]
    await db.collection('students').updateOne({ name: "John" }, { $set: { major: "Statistics" } });
    // Xóa Mike [cite: 230]
    await db.collection('students').deleteOne({ name: "Mike" });
}

async function advancedTasks(db) {
    // Sinh viên > 20 tuổi [cite: 232]
    const olderThan20 = await db.collection('students').find({ age: { $gt: 20 } }).toArray();
    console.log("Students > 20:", olderThan20);
    // Sắp xếp và giới hạn [cite: 235]
    const limited = await db.collection('students').find().sort({ age: 1 }).limit(2).toArray();
    console.log("Sorted & Limited:", limited);
}

module.exports = { connectDB, insertData, queryData, updateAndDelete, advancedTasks, client };
