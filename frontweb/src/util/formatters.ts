export const formatPrice = (price: number) => {

    const params = {maximumFractionDigits: 2, minimumFractionDigits: 2};
    return Intl.NumberFormat('eng', params).format(price);
}