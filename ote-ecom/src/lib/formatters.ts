const CURRENCY_FORMATTERR = new Intl.NumberFormat("en-US", {
    currency: "ZAR",
    style: "currency",
    minimumFractionDigits: 0,
})

export function formatCurrency(amount: number) {
    return CURRENCY_FORMATTERR.format(amount)
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US")

export function formatNumber(number: number) {
    return NUMBER_FORMATTER.format(number)
}