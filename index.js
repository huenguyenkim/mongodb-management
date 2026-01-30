const dbOps = require('./dboperations');

async function main() {
    const db = await dbOps.connectDB();
    if (!db) return;

    try {
        await dbOps.insertData(db);
        await dbOps.queryData(db);
        await dbOps.updateAndDelete(db);
        await dbOps.advancedTasks(db);
        console.log("All tasks completed!");
    } finally {
        await dbOps.client.close();
    }
}

main();