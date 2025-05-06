import {} from 'node:crypto'

export class database_memory{
  #videos = new Map()

  list(){
    return this.#videos.values
  }

  create(video){
    const videoID = randowUUID()

    this.#videos.set(videoID, video)
  }

  update(id, video){
    this.#videos.set(id, video)
  }

  delete(id){
    this.#videos.delete(id)
  }
  
}