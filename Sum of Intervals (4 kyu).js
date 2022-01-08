function sumIntervals(intervals) {
    const list = [];

    for (let interval of intervals) {
        for (let i = interval[0]; i < interval[1]; i++) {
            if (!list.includes(i)) list.push(i)
        }
    }

    return list.length
}