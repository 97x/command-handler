module.exports = (command) => {
    // If a test server array is not provided, and testOnly is specified as `true`
    // throw an exception
    const { instance, commandName, commandObject } = command

    // integer returns true if non-zero value, else returns false
    if (commandObject.testOnly !== true || instance.testServers.length) {
        return
    }

    // If testOnly is true, and testServers array is empty throw exception
    throw new Error(
        `Command "${commandName}" is a test only command. Specify test servers or set testOnly to false.`
        )
}