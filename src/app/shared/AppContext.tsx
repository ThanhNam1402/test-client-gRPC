import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import ConfirmDelete from '../components/ConfirmDelete'

interface AppContextType {
    openConfirmDelete: boolean
    setOpenConfirmDelete: Dispatch<SetStateAction<boolean>>
    onConfirm: (callback: () => void) => void
}

const initAppContext: AppContextType = {
    openConfirmDelete: false,
    setOpenConfirmDelete: () => {},
    onConfirm: () => {}
}

export const AppContext = createContext<AppContextType>(initAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(initAppContext.openConfirmDelete)
    const [confirmCallback, setConfirmCallback] = useState<() => void>(() => {})

    const handleConfirm = () => {
        if (confirmCallback) {
            confirmCallback()
        }
        setOpenConfirmDelete(false)
    }

    const onConfirm = (callback: () => void) => {
        setConfirmCallback(() => callback)
    }

    return (
        <AppContext.Provider value={{ openConfirmDelete, setOpenConfirmDelete, onConfirm }}>
            <ConfirmDelete
                title='Delete user' // Customize title later
                onConfrim={handleConfirm}
                isOpen={openConfirmDelete}
                setIsOpen={setOpenConfirmDelete}
            />
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)
