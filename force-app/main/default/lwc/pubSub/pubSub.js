const store = {}  

const subscribe = (event, cb) => { 
    console.log(event, cb)
    if (!store[event]) {
        store[event] = new Set()
    }
    store[event].add(cb)
    console.log(store)
}

const publish = (event, payload) => {  
    if (!store[event]) {
        return 
    }
    store[event].forEach(callback => {  
        try {  
            callback(payload)
        } catch (error) {
            console.error(error)
        }
    })
}

const unsubscribe = (event, cb) => {  
    if (!store[event]) {
        return 
    }
    store[event].delete(cb)
}

export default {
    subscribe,
    publish,
    unsubscribe
}