/**
 * Compares two dates converted from strings and returns the comparison result as a boolean.
 * @param {string} date1String - The first date string to compare.
 * @param {string} date2String - The second date string to compare.
 * @return {boolean} The comparison result, indicating whether date1String is earlier than date2String.
 * @throws {Error} If one or both input strings are not valid dates.
 */
function compareDates(date1String, date2String) {
    const date1 = new Date(date1String);
    const date2 = new Date(date2String);

    if (isNaN(date1) || isNaN(date2)) {
        throw new Error("One or both of the input strings are not valid dates.");
    }

    return date1.getTime() < date2.getTime();
}

const today = new Date();
const targetDate = "2/14/2023";

try {
    const isEarlier = compareDates(targetDate, today.toLocaleDateString());
    if (isEarlier) {
        console.log(`${targetDate} is earlier than today`);
    } else {
        console.log(`${targetDate} is later or equal to today`);
    }
} catch (error) {
    console.error(error.message);
}
