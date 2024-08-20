function minimumBribes(q: number[]): void {
    let numBribes = 0
    for (let i = 1; i <= q.length; i++) {
        const value = q[i - 1]
        console.log({ value })
        if (value - i > 2) {
            console.log('Too chaotic')
            return
        }
        // Count the number of people who started behind me, who are ahead of my
        // final position. Conduct the search between two spots forward of where
        // I started, thru to the person in front of me in the end; as these are
        // the only people to have potentially bribed me.

        for (let j = i - 2; j >= value - 3 || j > 0; j--) {
            console.log('q[j]', q[j])
            if (q[j] > value) numBribes++
        }
    }
    console.log(numBribes)
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
