import type { RequestHandler } from './$types'
import db from "$server/db"

export const POST: RequestHandler = () => {
    console.log(db.prepare("SELECT * FROM troop").all())

    return new Response("")
}
