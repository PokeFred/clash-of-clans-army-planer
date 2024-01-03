import Database from 'better-sqlite3'

const db: Database.Database = new Database(":memory:")

db.prepare("CREATE TABLE test (id INTEGER)").run()
const smt: Database.Statement = db.prepare("INSERT INTO test (id) VALUES ($id)")
smt.run({ id: 0 })
smt.run({ id: 1 })
smt.run({ id: 2 })

/*
Townhall
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16

Pet
L.A.S.S.I       14
Electro Owl     14
Mighty Yak      14
Unicorn         14
Frosty          15
Doggy           15
Poison Lizard   15
Phoenix         15
Spirit Fox      16
*/

export default db