import { Fragment, ReactNode } from 'react'

interface GlobalStylesProps {
    children: ReactNode
}
import './GlobalStyles.scss'
export default function GlobalStyles({ children }: GlobalStylesProps) {
    return <Fragment>{children}</Fragment>
}
