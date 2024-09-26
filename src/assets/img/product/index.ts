import { productImage } from "../../index"
const dataProduct = [
    {
        id: "_uniqcdskc",
        name: "SketcUp Pro 2021",
        category: "Multimedia",
        storeName: "MediaMeld Creations",
        image: productImage.multimedia[0]
    },
    {
        id: "_uniqloiwk",
        name: "Davinci Resolve Studio",
        category: "Multimedia",
        storeName: "InnovaStream Networks",
        image: productImage.multimedia[1]
    },
    {
        id: "_uninhgds",
        name: "SketcUp Pro Full Version",
        category: "Multimedia",
        storeName: "NexGen Broadcast",
        image: productImage.multimedia[2]
    },
    {
        id: "_unnkiydsc",
        name: "SKINTIFIC Barrier Set",
        category: "Paket Perawatan",
        storeName: "Natasha Skin Care",
        image: productImage.paketperawatan[0]
    },
    {
        id: "_unisnmthgwk",
        name: "SYMWhite 377 2 Pcs Set Whitening & Fade Dark Spot",
        category: "Paket Perawatan",
        storeName: "ERHA Skincare",
        image: productImage.paketperawatan[1]
    },
    {
        id: "_unidnhnvs",
        name: "ELSHE SKIN SET",
        category: "Paket Perawatan",
        storeName: "ZAP Clinic",
        image: productImage.paketperawatan[2]
    },
    {
        id: "_unntndsc",
        name: "ToneC Internet Download Manager",
        category: "Work Services",
        storeName: "TechSavvy Solutions",
        image: productImage.workservices[0]
    },
    {
        id: "_unisdscdssk",
        name: "Microsoft 365 Family",
        category: "Work Services",
        storeName: "ProWorkSupport",
        image: productImage.workservices[1]
    },
    {
        id: "_unigcdsvs",
        name: "Microsoft 365 Personal",
        category: "Work Services",
        storeName: "WorkWarriors",
        image: productImage.workservices[2]
    },
];


export type dataProductType = {
    id: string,
    name: string,
    category: string,
    storeName: string,
    image: string
}

export default dataProduct