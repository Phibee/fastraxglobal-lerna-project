
export const getArrayToStringValues = (array: any[]) => {
    return`"${array.join("\" | \"")}"`
}