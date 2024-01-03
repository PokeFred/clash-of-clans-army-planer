import type { RequestHandler } from './$types'
import Database from 'better-sqlite3'

export const POST: RequestHandler = () => {
    const db: Database.Database = new Database(":memory:")
    db.prepare("CREATE TABLE test (id INTEGER)").run()

    const smt: Database.Statement = db.prepare("INSERT INTO test (id) VALUES ($id)")
    smt.run({ id: 0 })
    smt.run({ id: 1 })
    smt.run({ id: 2 })

    return new Response(JSON.stringify(db.prepare("SELECT * FROM test").all()))
}
