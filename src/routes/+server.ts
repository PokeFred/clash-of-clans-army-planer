import type { RequestHandler } from './$types'

export const POST: RequestHandler = () => {
    return new Response('Hello World')
}
