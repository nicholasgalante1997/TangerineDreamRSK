import { once } from 'events'

async function drain(stream) {
  await once(stream, 'drain')
}

export { drain }
