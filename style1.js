function checkCentury(year) {
    if (year >= 1 && year <= 100) {
        return "1st century";
    } else if (year >= 101 && year <= 200) {
        return "2nd century";
    } else if (year >= 201 && year <= 300) {
        return "3rd century";
    } else {
        const century = Math.ceil(year / 100);
        return `${century}th century`;
    }
}

console.log(checkCentury(1716)); // 18th century
console.log(checkCentury(1900)); // 19th century
console.log(checkCentury(1601)); // 17th century
console.log(checkCentury(2000)); // 20th century
console.log(checkCentury(89));   // 1st century
