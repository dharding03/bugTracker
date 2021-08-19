const colors = ["#b33a3a", "#ff670", "#32cd32"]

function Colors(priority) {
    const level = ["High", "Medium", "Low"]
    return {
        level: (level[priority - 1]),
        color: colors[priority - 1]
    }

}

export default Colors;