import { useRoutes } from 'react-router-dom'
import Error404 from '../errors/Error404'
import HomeTestPage from '../pages/HomeTestPage'
import GrpcPage from '../pages/GrpcPage'
import DegreeCatalog from '../pages/DegreeCatalog'
export const AppRouter = () => {
    return useRoutes([
        {
            path: '/test',
            element: <HomeTestPage />
        },
        {
            path: '/grpc',
            element: <GrpcPage />
        },
        {
            path: '/d',
            element: <DegreeCatalog />
        },
        {
            path: '*',
            element: <Error404 />
        }
    ])
}
