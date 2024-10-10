export const formatPrice = (price: number | undefined) => {
    const intl = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    if(price === undefined) return 0
    return intl.format(price)
}