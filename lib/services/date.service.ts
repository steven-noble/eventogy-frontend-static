/**
 * Formats an array of date strings into a human-readable date range.
 * @param dates - Array of date strings to format
 * @returns A formatted date range string
 */

export function formatDateRange(dates: string[]): string {
    if (dates.length === 0) return 'No dates available'

    const parsedDates = dates.map((dateStr) => new Date(dateStr))
    parsedDates.sort((a, b) => a.getTime() - b.getTime())

    const firstDate = parsedDates[0]
    const lastDate = parsedDates[parsedDates.length - 1]

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }

    const formattedFirstDate = firstDate.toLocaleDateString('en-GB', options)
    const formattedLastDate = lastDate.toLocaleDateString('en-GB', options)

    const firstDay = firstDate.getDate()
    const lastDay = lastDate.getDate()
    const firstMonth = firstDate.getMonth()
    const lastMonth = lastDate.getMonth()
    const firstYear = firstDate.getFullYear()
    const lastYear = lastDate.getFullYear()

    if (
        firstYear === lastYear &&
        firstMonth === lastMonth &&
        firstDay !== lastDay
    ) {
        const monthYear = firstDate.toLocaleDateString('en-GB', {
            month: 'long',
            year: 'numeric',
        })
        return `From ${firstDay} to ${lastDay} ${monthYear}`
    } else if (firstYear === lastYear && firstMonth !== lastMonth) {
        return `From ${formattedFirstDate} to ${formattedLastDate}`
    } else if (firstYear !== lastYear) {
        return `From ${formattedFirstDate} to ${formattedLastDate}`
    } else {
        return formattedFirstDate
    }
}
