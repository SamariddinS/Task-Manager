const caseTimeFormat = (value) => {
    return value < 10 ? `0${value}` : String(value);
}

export const formatTime = (date) => {
    const hours = caseTimeFormat(date.getHours() % 12);
    const minutes = caseTimeFormat(date.getMinutes());

    return `${hours}:${minutes}`;
}