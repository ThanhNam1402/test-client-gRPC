import { Fragment } from 'react/jsx-runtime'
import { AppRouter } from './app/routes/AppRouter'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
    const routes = AppRouter()
    return (
        <Fragment>
            {routes}
            <ToastContainer autoClose={1200} position='top-right' transition={Flip} hideProgressBar={true} />
        </Fragment>
    )
}
