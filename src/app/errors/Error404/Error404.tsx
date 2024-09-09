import { Link } from 'react-router-dom'
import styles from './Error404.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default function Error404() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('inner')}>
                <h1 className={cx('error')}>404 Not Found</h1>
                <p className={cx('line')}></p>
                <p className={cx('message')}>
                    Trang bạn yêu cầu không tồn tại. <Link to={'/'}>Về trang chủ</Link>
                </p>
            </div>
        </div>
    )
}
