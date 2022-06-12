/**
 * Transform array of dates OR one date from format '2020-03-31' to format 'Mar 2020'
 * @returns array of strings or one string
 */
export function convertDateFormat(dates) {
    const transformedDates = [];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let dateForFormating = new Date();

    if (Array.isArray(dates)) {
        dates.map(date => {
            dateForFormating = new Date(date)
            transformedDates.push(monthNames[dateForFormating.getMonth()] + ' ' + dateForFormating.getFullYear())
        })
    } else {
        dateForFormating = new Date(dates)
        transformedDates.push(monthNames[dateForFormating.getMonth()] + ' ' + dateForFormating.getFullYear())
    }

    return transformedDates
}
