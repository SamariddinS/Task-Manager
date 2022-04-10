const filterNames = [
    `all`, `overdue`, `tody`, `repeating`, `archive`
]

const generateFilters = () => {
    return filterNames.map((it) => {
        return {
            name: it,
            count: Math.floor(Math.random() * 10),
        }
    });
}

export { generateFilters };