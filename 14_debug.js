function test1() {
    const a = 1
    const b = 2

    const c = test2(a, b)
}

function test2(a, b) {
    if (a > b) {
        a += a * 2
    } else {
        b -= a
    }
    return a + b
}

test1()