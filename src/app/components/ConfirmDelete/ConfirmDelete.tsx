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
import styes from './ConfirmDelete.module.scss'
import { Fragment } from 'react/jsx-runtime'

interface ConfirmDeleteProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    onConfrim?: () => void
    onCancel?: () => void
    title: string
}

const cx = classNames.bind(styes)
export default function ConfirmDelete({ isOpen = false, setIsOpen, title, onConfrim, onCancel }: ConfirmDeleteProps) {
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

    const handleConfirm = () => {
        setIsOpen(false)
        if (onConfrim) {
            onConfrim()
        }
    }

    const handleCancel = () => {
        setIsOpen(false)
        if (onCancel) {
            onCancel()
        }
    }
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
                                <p className={cx('desc')} id={descriptionId}>
                                    Are you sure you want to delete this item?
                                </p>
                                <div className={cx('action')}>
                                    <button className={cx('confirm')} onClick={handleConfirm}>
                                        Confirm
                                    </button>
                                    <button className={cx('cancel')} onClick={handleCancel}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </FloatingFocusManager>
                    </FloatingOverlay>
                )}
            </FloatingPortal>
        </Fragment>
    )
}
