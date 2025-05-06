//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
 // response.write('oi, tudo bem com voce?')

 // return response.end()
//})

//server.listen(3333)

import { fastify } from 'fastify'
import { database_memory } from './database-memory.js'
import { title } from 'node:process'

const server = fastify()
const database =  new database_memory

server.get('/videos', () => {
  return "Olá Mundo"
})

server.post('/videos', () => {
  database.create({
    title: 'video-01',
    description: 'esse é o video 1',
    duration: 180
  })

  console.log(database.list())
})

server.put('/videos/:id', () => {
  return "Olá Gustavo"
})

server.delete('/videos/:id', () => {
  return "Olá Gustavo"
})

server.listen({
  port: 3333,
})