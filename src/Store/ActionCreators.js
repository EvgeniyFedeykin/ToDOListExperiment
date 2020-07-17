export function setRoutePath(path, previousPath) {
    return {
        type: "setRoutePath",
        path,
        previousPath
    }
}


export function tasksPriorities(priorities) {
    return {
        type: "tasksPriorities",
        priorities
    }
}

export function selectPriority(priorityId) {
    return {
        type: "selectPriority",
        priorityId
    }
}