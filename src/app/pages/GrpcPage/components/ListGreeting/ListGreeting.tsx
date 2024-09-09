import classNames from 'classnames/bind'
import styles from './ListGreeting.module.scss'
import { GreetingReply } from '~/app/services/greeting/protos/greeting_pb'

const cx = classNames.bind(styles)

interface ListGreetingProps {
    greetings: GreetingReply[]
    mode: 'dark' | 'light'
    onEdit: (id: string) => void
    onDelete: (id: string) => void
}

export default function ListGreeting({ greetings, mode, onEdit, onDelete }: ListGreetingProps) {
    return (
        <div className={cx('list', { light: mode === 'light', dark: mode === 'dark' })}>
            {greetings.map((greeting) => (
                <div key={greeting.getId()} className={cx('item', { light: mode === 'light', dark: mode === 'dark' })}>
                    <span>{`Hi! ${greeting.getMessage()}`}</span>
                    <div className={cx('action')}>
                        <button onClick={() => onDelete(greeting.getId())}>
                            <i className='ri-delete-bin-5-line'></i>
                        </button>
                        <button onClick={() => onEdit(greeting.getId())}>
                            <i className='ri-file-edit-line'></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
