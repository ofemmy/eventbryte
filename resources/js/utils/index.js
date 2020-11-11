export function range(start, end) {
    const res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}
export const formatDateToString = (date, locale = "en-US") => {
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short"
    };
    return new Date(date).toLocaleString(locale, options);
};
export const formatPrice = (price, locale = "de-DE") => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
        currencyDisplay: "symbol"
    }).format(price);
};
