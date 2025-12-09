const myUTC = 6;

const zones = [
    { country: "USA (EST)", flag: "🇺🇸", utc: -5 },
    { country: "Canada (EST)", flag: "🇨🇦", utc: -5 },
    { country: "United Kingdom", flag: "🇬🇧", utc: 0 },
    { country: "Saudi Arabia", flag: "🇸🇦", utc: 3 },
    { country: "UAE (Dubai)", flag: "🇦🇪", utc: 4 }
];

const mapMarkers = [
    { top: "40%", left: "75%", flag: "🇧🇩", title: "Bangladesh — UTC+6", utc: 6 },
    { top: "38%", left: "25%", flag: "🇺🇸", title: "USA — UTC−5", utc: -5 },
    { top: "32%", left: "28%", flag: "🇨🇦", title: "Canada — UTC−5" , utc: -5},
    { top: "30%", left: "48%", flag: "🇬🇧", title: "UK — UTC+0", utc: 0 },
    { top: "45%", left: "55%", flag: "🇸🇦", title: "Saudi Arabia — UTC+3", utc: 3 },
    { top: "47%", left: "60%", flag: "🇦🇪", title: "Dubai — UTC+4", utc: 4 }
];

export {myUTC, zones, mapMarkers}