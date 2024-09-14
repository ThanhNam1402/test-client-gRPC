import { useState } from 'react'
import styles from './CreatedDegree.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface CreateDegreeProps {
    onCreateDeg: (name: string) => void
}

export default function CreateDregee({ onCreateDeg }: CreateDegreeProps) {
    const [name, setName] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onCreateDeg(name)
        setName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className={cx('input')}
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                placeholder='Enter your name...'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}
