// Degree query servicer
import { DegreeCatalogServiceClient as DegreeCatalogServiceQuery } from './protos/query/DegreeCatalogQueryServiceClientPb'
import { GetAllDegreeCatalogsRequest, GetDegreeCatalogRequest } from './protos/query/degreeCatalogQuery_pb'

// Degree command servicer
import { DegreeCatalogServiceClient as DegreeCatalogServiceCmd } from './protos/command/DegreeCatalogCommandServiceClientPb'
import { AddDegreeCatalogRequest, UpdateDegreeCatalogRequest } from './protos/command/degreeCatalogCommand_pb'
import { DeleteDegreeCatalogRequest } from './protos/command/degreeCatalogCommand_pb'

// End point query degree
const degreeCatalogQuery = new DegreeCatalogServiceQuery('blah blah')

// End point command degree
const degreeCatalogCmd = new DegreeCatalogServiceCmd('blah blah blah ')

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'

const token = 'blah blah blah blah'

const metadata = { authorization: 'Bearer ' + token }

export const degreeCatalogService = {
    getAll: async () => {
        const request = new GetAllDegreeCatalogsRequest()
        return await degreeCatalogQuery.getAllDegreeCatalogs(request, metadata)
    },
    getOne: async (id: number) => {
        const request = new GetDegreeCatalogRequest()
        const intValue = new google_protobuf_wrappers_pb.Int32Value()
        intValue.setValue(id)
        request.setId(intValue)
        return await degreeCatalogQuery.getDegreeCatalog(request, metadata)
    },
    create: async (name: string) => {
        const request = new AddDegreeCatalogRequest()
        const stringValue = new google_protobuf_wrappers_pb.StringValue()
        stringValue.setValue(name)
        request.setDegname(stringValue)
        return await degreeCatalogCmd.addDegreeCatalog(request, metadata)
    },
    update: async (id: number, degName: string) => {
        const request = new UpdateDegreeCatalogRequest()

        const stringValue = new google_protobuf_wrappers_pb.StringValue()
        const intValue = new google_protobuf_wrappers_pb.Int32Value()

        // set id and degree name
        intValue.setValue(id)
        stringValue.setValue(degName)

        request.setDegname(stringValue)
        request.setId(intValue)

        return await degreeCatalogCmd.updateDegreeCatalog(request, metadata)
    },
    delete: async (id: number) => {
        const request = new DeleteDegreeCatalogRequest()
        const intValue = new google_protobuf_wrappers_pb.Int32Value()
        intValue.setValue(id)
        request.setId(intValue)
        return await degreeCatalogCmd.deleteDegreeCatalog(request, metadata)
    }
}
