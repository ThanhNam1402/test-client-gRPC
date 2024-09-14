import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import classNames from 'classnames/bind'

import ModalContent from '~/app/components/ModalContent'
import { IDegreeCatalog } from '~/app/types/DegreeCatalogType'
import ListDregee from './components/ListDregee'
import CreateDregee from './components/CreateDegree/CreateDregee'
import UpdateDegree from './components/UpdateDegree'
import { degreeCatalogService } from '~/app/services/degreeCatalog/degreeCatalogService'

import styles from './DegreeCatalog.module.scss'
const cx = classNames.bind(styles)

export default function DegreeCatalog() {
    const [openEdit, setOpenEdit] = useState(false)
    const idRefEdit = useRef<number>()
    const [valueEdit, setValueEdit] = useState<string>('')
    const queryClient = useQueryClient()

    const { data } = useQuery({
        queryKey: ['degreeCatalogs'],
        queryFn: () =>
            degreeCatalogService.getAll().then(async (res) => {
                const data: IDegreeCatalog[] = JSON.parse(res.getData())
                return data
            })
    })

    // handle add greeting
    const handleAddDeg = (name: string) => {
        addDegMutation.mutate(name, {
            onSuccess: (res) => {
                toast.success(res?.getData() || 'Added successfully!')
                // gọi lại get all dregree catalog
                queryClient.invalidateQueries({
                    queryKey: ['degreeCatalogs']
                })
            },
            onError: (err) => {
                toast.error(err.message || 'Add Failed')
            }
        })
    }

    // Mutations func add dregree catalog
    const addDegMutation = useMutation({
        mutationFn: (name: string) => {
            console.log(name)
            return degreeCatalogService.create(name)
        }
    })

    // Mutation get one dregree catalog by id
    const GetOneMutaion = useMutation({
        mutationFn: (id: number) => degreeCatalogService.getOne(id)
    })

    // open modal edit and handle get one dregree catalog
    const openEditGreeting = (id: number) => {
        idRefEdit.current = id
        GetOneMutaion.mutate(id, {
            onSuccess: (res) => {
                const degree: IDegreeCatalog = JSON.parse(res.getData())
                setValueEdit(degree.DegName ? degree.DegName : '')
                setOpenEdit(true)
            },
            onError: (err) => {
                console.log(err)
                toast.error('Get dregree catalog failed')
            }
        })
    }

    // Mutations delete degree catalog mutations
    const deleteDegMutation = useMutation({
        mutationFn: (id: number) => {
            return degreeCatalogService.delete(id)
        }
    })

    // handle delete degree catalog
    const handleDeleletDeg = async (id: number) => {
        deleteDegMutation.mutate(id, {
            onSuccess: (res) => {
                toast.success(res?.getData() || 'Delete dregree catalog successfully!')
                queryClient.invalidateQueries({
                    queryKey: ['degreeCatalogs']
                })
            },
            onError: (err) => {
                console.log(err)
                toast.error('Delete dregree catalog Failed!')
            }
        })
    }

    // Mutaiton update degree catalog
    const updateDegMution = useMutation({
        mutationFn: (name: string) => {
            return degreeCatalogService.update(idRefEdit.current as number, name)
        }
    })

    // handle update degree catalog
    const handleUpdateDeg = (name: string) => {
        updateDegMution.mutate(name, {
            onSuccess: (res) => {
                toast.success(res?.getData() || 'Updated successfully!')
                // gọi lại get all dregree catalog
                queryClient.invalidateQueries({
                    queryKey: ['degreeCatalogs']
                })
            },
            onError: (err) => {
                console.log(err)

                toast.error(err.message || 'Update Failed')
            }
        })
    }
    return (
        <>
            <div className={cx('content')}>
                <ModalContent title='Edit Degree Catalog' isOpen={openEdit} setIsOpen={setOpenEdit}>
                    <UpdateDegree valueEdit={valueEdit} onUpdateDeg={handleUpdateDeg} setOpenEdit={setOpenEdit} />
                </ModalContent>

                <CreateDregee onCreateDeg={handleAddDeg} />
                <ListDregee data={data ? data : []} onEdit={openEditGreeting} onDelete={handleDeleletDeg} />
            </div>
        </>
    )
}
