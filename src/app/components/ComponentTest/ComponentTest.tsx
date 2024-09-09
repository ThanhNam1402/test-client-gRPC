import classNames from 'classnames/bind'
import styles from './ComponentTest.module.scss'

const cx = classNames.bind(styles)

interface ComponentTestProps {
    title?: string
}

export default function ComponentTest({ title }: ComponentTestProps) {
    return (
        <div className={cx('wrap')}>
            <h1>{title}</h1>
        </div>
    )
}
