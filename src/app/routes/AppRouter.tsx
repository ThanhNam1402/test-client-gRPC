import { useRoutes } from 'react-router-dom'
import Error404 from '../errors/Error404'
import HomeTestPage from '../pages/HomeTestPage'
import GrpcPage from '../pages/GrpcPage'
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
            path: '*',
            element: <Error404 />
        }
    ])
}
