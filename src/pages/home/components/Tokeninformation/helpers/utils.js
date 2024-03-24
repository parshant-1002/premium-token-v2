export function hasAtLeastFourValues(obj) {
    let count = 0;
    for (const key in obj) {
        if (obj[key].trim() !== '') {
            count++;
        }
    }
    return count >= 4;
}

export function extractPercentages(obj) {
    if(Object?.keys(obj)?.length){
        const percentages = [];
        for (const key in obj) {
            if (obj[key]?.percentage) {
                percentages.push(obj[key].percentage);
            }
        }
        return percentages;
    }

}