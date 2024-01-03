import type { RequestHandler } from './$types'
import db from "$server/db"

export const POST: RequestHandler = () => {
    return new Response(JSON.stringify(db.prepare("SELECT * FROM test").all()))
}
