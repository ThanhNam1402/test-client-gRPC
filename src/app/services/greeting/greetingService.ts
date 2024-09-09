import {
    CreateGreetingRequest,
    DeleteGreetingReply,
    DeleteGreetingRequest,
    GetGreetingByIdRequest,
    GreetingReply,
    ReadGreetingsRequest,
    UpdateGreetingRequest
} from './protos/greeting_pb'
import { GreeterClient } from './protos/GreetingServiceClientPb'

const client = new GreeterClient('http://localhost:8000')

export const greetingService = {
    getAll: async (): Promise<GreetingReply[]> => {
        const request = new ReadGreetingsRequest()
        return new Promise((resolve, reject) => {
            client.readGreetings(request, {}, (err, response) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(response.getGreetingsList())
                }
            })
        })
    },

    getById: async (id: string): Promise<GreetingReply> => {
        const request = new GetGreetingByIdRequest()
        request.setId(id)
        return new Promise((resolve, reject) => {
            client.getGreetingById(request, {}, (err, response) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(response)
                }
            })
        })
    },

    create: async (body: { name: string }): Promise<GreetingReply> => {
        const request = new CreateGreetingRequest()
        request.setName(body.name)
        return new Promise((resolve, reject) => {
            client.createGreeting(request, {}, (err, response) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(response)
                }
            })
        })
    },

    delete: async (id: string): Promise<DeleteGreetingReply> => {
        const request = new DeleteGreetingRequest()
        request.setId(id)
        return new Promise((resolve, reject) => {
            client.deleteGreeting(request, {}, (err, response) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(response)
                }
            })
        })
    },

    update: async (id: string, body: { name: string }): Promise<GreetingReply> => {
        const request = new UpdateGreetingRequest()
        request.setId(id)
        request.setName(body.name)
        return new Promise((resolve, reject) => {
            client.updateGreeting(request, {}, (err, response) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(response)
                }
            })
        })
    }
}
