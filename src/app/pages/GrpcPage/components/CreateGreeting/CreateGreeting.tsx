import { useState } from 'react'
import styles from './CreateGreeting.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface CreateGreetingProps {
    onCreateGreeting: (name: string) => void
    mode: 'dark' | 'light'
}

export default function CreateGreeting({ onCreateGreeting, mode }: CreateGreetingProps) {
    const [name, setName] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onCreateGreeting(name)
        setName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={cx('input', {
                    light: mode === 'light',
                    dark: mode === 'dark'
                })}
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                placeholder='Enter your name...'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}
