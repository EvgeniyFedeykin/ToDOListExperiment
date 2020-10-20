export function setRoutePath(path, previousPath) {
    return {
        type: "setRoutePath",
        path,
        previousPath
    }
}

export function ASYNC_RequestPriority() {
    return {
        type: "ASYNC_RequestPriority"
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

export function changePriorityOrder(order) {
    return {
        type: "PriorityOrder",
        order
    }
}

export function tasksPool(tasks) {
    return {
        type: "tasksPool",
        tasks
    }
}

export function selectTask(taskId) {
    return {
        type: "selectedTask",
        taskId
    }
}

export function ASYNC_tasksPool(user) {
    return {
        type: "ASYNC_tasksPool",
        user
    }
}

export function ASYNC_login(login, password) {
    return {
        type: "ASYNC_login",
        login,
        password
    }
}

export function ASYNC_signUp(login, password) {
    return {
        type: "ASYNC_signUp",
        login,
        password
    }
}
