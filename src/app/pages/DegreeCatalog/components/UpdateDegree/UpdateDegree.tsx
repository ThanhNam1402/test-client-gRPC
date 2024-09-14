import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './UpdateDegree.module.scss'
const cx = classNames.bind(styles)

interface UpdateDegProps {
    valueEdit: string
    onUpdateDeg: (degname: string) => void
    setOpenEdit: (open: boolean) => void
}

export default function UpdateDegree({ valueEdit, onUpdateDeg, setOpenEdit }: UpdateDegProps) {
    const [degname, setDegname] = useState<string>('')

    useEffect(() => {
        setDegname(valueEdit)
    }, [valueEdit])

    const handleSubmit = () => {
        onUpdateDeg(degname)
        setOpenEdit(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={degname}
                onChange={(e) => setDegname(e.target.value)}
                type='text'
                className={cx('edit')}
                placeholder='Enter your name...'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}
