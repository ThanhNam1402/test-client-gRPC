import styles from './ListDegree.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
import { IDegreeCatalog } from '~/app/types/DegreeCatalogType'

interface ListDregeeProps {
    data: IDegreeCatalog[]
    onEdit: (id: number) => void
    onDelete: (id: number) => void
}

function ListDregee({ data, onEdit, onDelete }: ListDregeeProps) {
    return (
        <div className={cx('listDeg')}>
            {data &&
                data?.length > 0 &&
                data.map((item) => {
                    return (
                        <div key={item?.Id} className={cx('item')}>
                            <p>{item?.DegName}</p>
                            <div>
                                <button onClick={() => onEdit(item?.Id)}>
                                    <i className='ri-edit-2-line'></i>
                                </button>
                                <button onClick={() => onDelete(item?.Id)}>
                                    <i className='ri-delete-bin-2-line'></i>
                                </button>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default ListDregee
