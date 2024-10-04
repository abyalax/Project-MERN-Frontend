interface SidebarIcons {
    w?: string
    h?: string
    fill?: string
    stroke?: string
    strokeWidth?: string
}

export const Home = ({ w = "26", h = "26", fill = "currentColor" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={h} height={w} fill={fill} className="bi bi-house-door-fill" viewBox="0 0 20 20">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
        </svg>
    )
}

export const Chat = ({ w = "24", h = "24", fill = "currentColor", strokeWidth = "1.5" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-chat-left-text" viewBox="0 0 22 22">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
        </svg>
    )
}

export const Diskusi = ({ w = "19", h = "19", fill = "currentColor" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} stroke={fill} viewBox="0 0 24 24" stroke-width="1.5" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
    )
}

export const Products = ({ w = "19", h = "19", fill = "currentColor" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} viewBox="0 0 22 22">
            <path
                d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z">
            </path>
        </svg>
    )
}

export const Pesanan = ({ w = "22", h = "22", fill = "currentColor", strokeWidth = "1.5" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-journal-text" viewBox="0 0 20 20">
            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
        </svg>
    )
}

export const LineCharts = ({ w = "19", h = "19", fill = "currentColor", strokeWidth = "1.5" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-graph-up-arrow" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5" />
        </svg>
    )
}

export const Performance = ({ w = "20", h = "20", fill = "currentColor", strokeWidth = "1.5" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-speedometer" viewBox="0 0 20 20">
            <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
            <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0" />
        </svg>
    )
}
export const Iklan = ({ w = "19", h = "19", fill = "currentColor", strokeWidth = "1.5" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-megaphone-fill" viewBox="0 0 20 20">
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
        </svg>
    )
}

export const Pallete = ({ w = "19", h = "19", fill = "currentColor", strokeWidth = "1.5" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-palette-fill" viewBox="0 0 20 20">
            <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
        </svg>
    )
}

export const UserChat = ({ w = "19", h = "19", fill = "currentColor", strokeWidth = "1.5" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-person-lines-fill" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
        </svg>
    )
}

export const Layanan = ({ w = "19", h = "19", fill = "currentColor", strokeWidth = "2" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} viewBox="0 0 24 24" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="SVGRepo_bgCarrier" stroke-width={strokeWidth}></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <title></title>
                <g fill="none" fill-rule="evenodd" id="页面-1" stroke-linecap="round" stroke-linejoin="round" stroke-width={strokeWidth}>
                    <g id="导航图标" stroke="#212121" stroke-width={strokeWidth} transform="translate(-329.000000, -334.000000)">
                        <g id="服务" transform="translate(329.000000, 334.000000)">
                            <g id="编组" transform="translate(2.000000, 3.000000)">
                                <path d="M8,12.5 L11,13.5 C11,13.5 18.5,12 19.5,12 C20.5,12 20.5,13 19.5,14 C18.5,15 15,18 12,18 C9,18 7,16.5 5,16.5 C3,16.5 0,16.5 0,16.5" id="路径"></path>
                                <path d="M0,10.5 C1,9.5 3,8 5,8 C7,8 11.75,10 12.5,11 C13.25,12 11,13.5 11,13.5" id="路径"></path>
                                <path d="M6,5 L6,1 C6,0.447715 6.4477,0 7,0 L19,0 C19.5523,0 20,0.447715 20,1 L20,9" id="路径"></path>
                                <rect height="4.5" id="矩形" width="5" x="10.5" y="0"></rect>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export const Store = ({ w = "22", h = "22", fill = "currentColor", strokeWidth = "2" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-shop-window" viewBox="0 0 20 20">
            <path strokeWidth={strokeWidth} d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"
            />
        </svg>
    )
}

export const Care = ({ w = "22", h = "22", fill = "currentColor", strokeWidth = "2" }: SidebarIcons) => {
    return (
        <svg width={w} height={h} fill={fill} strokeWidth={strokeWidth} viewBox="0 0 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="SVGRepo_bgCarrier" stroke-width={strokeWidth}></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width={strokeWidth}></g>
            <g id="SVGRepo_iconCarrier">
                <title>service_fill</title>
                <g id="页面-1" stroke-width="0.648" fill="none" fill-rule="evenodd">
                    <g id="Media" transform="translate(-1536.000000, -48.000000)" fill-rule="nonzero">
                        <g id="service_fill" transform="translate(1536.000000, 48.000000)">
                            <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path>

                            <path d="M5,9 C5,5.13401 8.13401,2 12,2 C15.866,2 19,5.13401 19,9 L19,10.0354 C20.6961,10.2781 22,11.7368 22,13.5 L22,13.75 C22,15.5252 20.469,17.0814 18.6678,16.9981 C17.9274,19.118 16.0464,20.5467 14.0149,20.9093 C13.5456,21.0808 12.9889,21 12.5,21 C11.6716,21 11,20.3284 11,19.5 C11,18.6716 11.6716,18 12.5,18 C13.2934,18 14.1712,17.8853 14.7065,18.6086 C16.0035,17.9919 17,16.6885 17,15 L17,9 C17,6.23858 14.7614,4 12,4 C9.23858,4 7,6.23858 7,9 L7,15.25 C7,16.2165 6.2165,17 5.25,17 C3.45507,17 2,15.5449 2,13.75 L2,13.5 C2,11.7368 3.30385,10.2781 5,10.0354 L5,9 Z" id="路径" fill="#000"> </path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export const Setting = ({ w = "24", h = "24", fill = "currentColor", strokeWidth = "2" }: SidebarIcons) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} fill={fill} strokeWidth={strokeWidth} className="bi bi-gear" viewBox="0 0 20 20">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
        </svg>
    )
}

