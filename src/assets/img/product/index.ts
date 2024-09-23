import { productImage } from "../../index"
const dataProduct = [
    {
        id: "_uniqcdskc",
        name: "SketcUp Pro 2021",
        category: "Multimedia",
        image: productImage.multimedia[0]
    },
    {
        id: "_uniqloiwk",
        name: "Davinci Resolve Studio",
        category: "Multimedia",
        image: productImage.multimedia[1]
    },
    {
        id: "_uninhgds",
        name: "SketcUp Pro Full Version",
        category: "Multimedia",
        image: productImage.multimedia[2]
    },
    {
        id: "_unnkiydsc",
        name: "SKINTIFIC Barrier Set",
        category: "Paket Perawatan",
        image: productImage.paketperawatan[0]
    },
    {
        id: "_unisnmthgwk",
        name: "SYMWhite 377 2 Pcs Set Whitening & Fade Dark Spot",
        category: "Paket Perawatan",
        image: productImage.paketperawatan[1]
    },
    {
        id: "_unidnhnvs",
        name: "ELSHE SKIN SET",
        category: "Paket Perawatan",
        image: productImage.paketperawatan[2]
    },
    {
        id: "_unntndsc",
        name: "ToneC Internet Download Manager",
        category: "Work Services",
        image: productImage.workservices[0]
    },
    {
        id: "_unisdscdssk",
        name: "Microsoft 365 Family",
        category: "Work Services",
        image: productImage.workservices[1]
    },
    {
        id: "_unigcdsvs",
        name: "Microsoft 365 Personal",
        category: "Work Services",
        image: productImage.workservices[2]
    },
]

export type dataProductType = {
    id: string,
    name: string,
    category: string,
    image: string
}

export default dataProduct