try {
    try {
        throw("oops")
    } catch {
        console.error("bla")
    } finally {
        console.log("finally")
    }
} catch {
    console.log("vla")
}

try {
    console.error("Console error")
} catch {
    console.log("caught")
}

throw("unhandled error")