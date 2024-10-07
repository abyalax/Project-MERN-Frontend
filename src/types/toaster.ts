export type ToasterType = {
    toaster?: {
        variant?: string
        message?: string
    },
    setToaster?: React.Dispatch<React.SetStateAction<{}>>
}

export type VariantToaster = {
    [key: string]: {
        icon: React.ReactNode
    }
}