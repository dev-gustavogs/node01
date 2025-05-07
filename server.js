//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
 // response.write('oi, tudo bem com voce?')

 // return response.end()
//})

//server.listen(3333)

import { fastify } from 'fastify'
import { database_memory } from './database-memory.js'



const server = fastify()
const database =  new database_memory

server.post('/videos', (request, reply) => {
  const {title , description, duration} = request.body 
  
  database.create({
    title,
    description,
    duration,
  })

  return reply.status(201).send()
})

server.get('/videos', (request) => {
  const search = request.query.search
  

  const videos = database.list(search)

  console.log(videos)

  return videos
})

server.put('/videos/:id', (request, reply) => {
  const videoID = request.params.id
  const {title , description, duration} = request.body  

  database.update(videoID, {
    title,
    description,
    duration,
  })

  return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
  const videoID = request.params.id
  database.delete(videoID)

  return reply.status(204).send()
})

server.listen({
  port: 3333,
})