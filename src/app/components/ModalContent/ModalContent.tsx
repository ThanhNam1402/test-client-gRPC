import {
    FloatingFocusManager,
    FloatingOverlay,
    FloatingPortal,
    useClick,
    useDismiss,
    useFloating,
    useId,
    useInteractions,
    useRole
} from '@floating-ui/react'
import classNames from 'classnames/bind'
import styes from './ModalContent.module.scss'
import { Fragment } from 'react/jsx-runtime'
import { ReactNode } from 'react'

interface ModalContentProps {
    children?: ReactNode
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    title: string
}

const cx = classNames.bind(styes)
export default function ModalContent({ children, isOpen = false, setIsOpen, title }: ModalContentProps) {
    const { refs, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen
    })
    const click = useClick(context)
    const role = useRole(context)
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' })

    const { getFloatingProps } = useInteractions([click, role, dismiss])

    const headingId = useId()
    const descriptionId = useId()

    return (
        <Fragment>
            <FloatingPortal>
                {isOpen && (
                    <FloatingOverlay className={cx('overlay')} lockScroll>
                        <FloatingFocusManager context={context}>
                            <div
                                className={cx('dialog')}
                                ref={refs.setFloating}
                                aria-labelledby={headingId}
                                aria-describedby={descriptionId}
                                {...getFloatingProps()}
                            >
                                <h2 className={cx('heading')} id={headingId}>
                                    {title}
                                </h2>
                                {children}
                            </div>
                        </FloatingFocusManager>
                    </FloatingOverlay>
                )}
            </FloatingPortal>
        </Fragment>
    )
}
