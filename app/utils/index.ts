export function imageError(event: Event) {
    console.log("🚀 ~ imageError ~ event=>", event)
    const target = event.target as HTMLImageElement;
}
export  function formatCurrency(value: number): string {
    if (value === null || value === undefined) return 'Liên hệ';
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value);
}