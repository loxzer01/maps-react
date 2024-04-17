
export const converterStringToQuery = (string: string) => {
    const query = string.split(" ").join("%20");
    return query;
}