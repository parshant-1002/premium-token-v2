export function hasAtLeastFourValues(obj) {
    let count = 0;
    for (const key in obj) {
        if (obj[key].trim() !== '') {
            count++;
        }
    }
    return count >= 4;
}