export function setRoutePath(path, previousPath) {
    return {
        type: "setRoutePath",
        path,
        previousPath
    }
}