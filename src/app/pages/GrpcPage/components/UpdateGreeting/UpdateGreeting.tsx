import { Fragment } from 'react/jsx-runtime'
import styles from './UpdateGreeting.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
interface UpdateGreetingProps {
    onUpdateGreeting: (name: string) => void
    setOpenEdit: (open: boolean) => void
    valueEdit: string
    isLoading: boolean
}

const cx = classNames.bind(styles)
export default function UpdateGreeting({ onUpdateGreeting, setOpenEdit, valueEdit, isLoading }: UpdateGreetingProps) {
    const [name, setName] = useState('')

    useEffect(() => {
        setName(valueEdit)
    }, [valueEdit])

    const handleSubmit = () => {
        onUpdateGreeting(name)
        setOpenEdit(false)
    }

    return (
        <Fragment>
            {isLoading ? (
                'loading...'
            ) : (
                <>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={cx('edit')}
                        type='text'
                        placeholder='Enter your name...'
                    />
                    <div className={cx('action')}>
                        <button className={cx('confirm')} onClick={handleSubmit}>
                            Confirm
                        </button>
                        <button className={cx('cancel')} onClick={() => setOpenEdit(false)}>
                            Cancel
                        </button>
                    </div>
                </>
            )}
        </Fragment>
    )
}
