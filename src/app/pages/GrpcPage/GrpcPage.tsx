import { Fragment, useRef, useState } from 'react'
import styles from './GrpcPage.module.scss'
import classNames from 'classnames/bind'
import { greetingService } from '~/app/services/greeting/greetingService'
import { toast } from 'react-toastify'
import { useAppContext } from '~/app/shared/AppContext'
import ModalContent from '~/app/components/ModalContent'
import CreateGreeting from './components/CreateGreeting'
import UpdateGreeting from './components/UpdateGreeting'
import ListGreeting from './components/ListGreeting/ListGreeting'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const cx = classNames.bind(styles)

export default function GrpcPage() {
    const { setOpenConfirmDelete, onConfirm } = useAppContext()
    const [mode, setMode] = useState<'dark' | 'light'>('dark')
    const [valueEdit, setValueEdit] = useState('')
    const [openEdit, setOpenEdit] = useState(false)
    const greetingIdRef = useRef<string>('')
    const queryClient = useQueryClient()

    // Get all greetings
    const { data } = useQuery({
        queryKey: ['greetings'],
        queryFn: () =>
            greetingService.getAll().then(async (data) => {
                console.log(data)
                return data
            }),
        staleTime: 10000
        // gcTime: 5000,
    })

    // handle add greeting
    const handleAddGreeting = (name: string) => {
        AddGreetingMutation.mutate(name, {
            onSuccess: (res) => {
                toast.success(res.getMessage() || 'Greeting added successfully!')
                // gọi lại get all greeting
                queryClient.invalidateQueries({
                    queryKey: ['greetings']
                })
            },
            onError: (err) => {
                toast.error(err.message || 'Failed to update greeting')
            }
        })
    }

    // func add mutations
    const AddGreetingMutation = useMutation({
        mutationFn: (name: string) => {
            return greetingService.create({ name })
        }
    })

    //  func deleteGreeting mutaton
    const DeleteGreetingMuitaon = useMutation({
        mutationFn: (id: string) => greetingService.delete(id),
        onSuccess: (res) => {
            console.log(res)
            toast.success(res?.getMessage() || 'Greeting deleted successfully!')
            queryClient.invalidateQueries({
                queryKey: ['greetings']
            })
        },
        onError: (err) => {
            toast.error(err.message || 'Failed to update greeting')
        }
    })

    // Handle delete greeting
    const openDeleteGreeting = (id: string) => {
        setOpenConfirmDelete(true)
        if (onConfirm) {
            onConfirm(() => {
                DeleteGreetingMuitaon.mutate(id)
            })
        }
    }

    // Handle edit greeting
    const openEditGreeting = (id: string) => {
        greetingIdRef.current = id
        GetOneMutaion.mutate(id)

        setOpenEdit(true)

        // await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    // getOne greeting mutation
    const GetOneMutaion = useMutation({
        mutationFn: (id: string) => greetingService.getById(id as string),
        onSuccess: (res) => {
            console.log('res add', res)
            setValueEdit(res.getMessage())
        },
        onError: (err) => {
            toast.error(err.message || 'Failed to update greeting')
        }
    })

    // handle update greeting
    const handleUpdateGreeting = (name: string) => {
        UpdateItemMutation.mutate(name)
    }

    // update greeting mutation
    const UpdateItemMutation = useMutation({
        mutationFn: (name: string) => greetingService.update(greetingIdRef.current, { name }),
        onSuccess: (res) => {
            console.log('res add', res)
            toast.success('Greeting update successfully!')
            queryClient.invalidateQueries({
                queryKey: ['greetings']
            })
        },
        onError: (err) => {
            toast.error(err.message || 'Failed to update greeting')
        }
    })

    return (
        <Fragment>
            <ModalContent title='Edit user' isOpen={openEdit} setIsOpen={setOpenEdit}>
                <UpdateGreeting
                    valueEdit={valueEdit}
                    isLoading={false}
                    onUpdateGreeting={handleUpdateGreeting}
                    setOpenEdit={setOpenEdit}
                />
            </ModalContent>
            <div
                className={cx('wrap', {
                    light: mode === 'light',
                    dark: mode === 'dark'
                })}
            >
                <div
                    className={cx('inner', {
                        light: mode === 'light',
                        dark: mode === 'dark'
                    })}
                >
                    <div
                        className={cx('content', {
                            light: mode === 'light',
                            dark: mode === 'dark'
                        })}
                    >
                        <div>
                            <h1
                                className={cx('title', {
                                    light: mode === 'light',
                                    dark: mode === 'dark'
                                })}
                            >
                                gRPC Greeting 👌
                            </h1>
                            <button
                                className={cx('mode', {
                                    light: mode === 'light',
                                    dark: mode === 'dark'
                                })}
                                onClick={() => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                            >
                                {mode === 'dark' ? <i className='ri-sun-line'></i> : <i className='ri-moon-fill'></i>}
                            </button>
                        </div>
                        <CreateGreeting onCreateGreeting={handleAddGreeting} mode={mode} />
                    </div>
                    <div
                        className={cx('list', {
                            light: mode === 'light',
                            dark: mode === 'dark'
                        })}
                    >
                        {/* Render list greetings */}
                        <ListGreeting
                            greetings={data ? data : []}
                            mode={mode}
                            onEdit={openEditGreeting}
                            onDelete={openDeleteGreeting}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
