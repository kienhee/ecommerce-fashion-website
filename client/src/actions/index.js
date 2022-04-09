//action creators là một function

export const update = (data) => {
    return {
        type: "UPDATE",
        payload:data
    }
}