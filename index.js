const fastify = require('fastify')()
const serveStatic = require('serve-static')//访问静态文件
const path = require('path')
// Declare a route
fastify.use('/public', serveStatic(path.resolve(__dirname, 'public')))
fastify.use('/public/static', serveStatic(path.resolve(__dirname, 'static')))
fastify.get('/hello', async (request, reply) => {
    return { hello: 'world' }
})
fastify.route({
    method: 'GET',
    url: '/a',
    schema: {
        // request needs to have a querystring with a `name` parameter
        querystring: {
            name: { type: 'string' }
        },
        // the response needs to be an object with an `hello` property of type 'string'
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    // this function is executed for every request before the handler is executed
    beforeHandler: async (request, reply) => {
        // E.g. check authentication
    },
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})
// Run the server!
const start = async () => {
    try {
        await fastify.listen(80,'0.0.0.0', function () {
            console.log(`server listening on ${fastify.server.address().port}`)
        })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()