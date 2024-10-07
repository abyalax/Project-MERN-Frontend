
interface IconProps {
    w?: string
    h?: string
    fill?: string
    classname?: string
}

export const AddImageIcon = ({ fill = "#8d96aa", h = "24px", w = "24px", classname }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={h} widths={w} color={fill} viewBox="0 -960 960 960" fill={fill} className={classname}>
            <path d="M480-480ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
        </svg>
    )
}