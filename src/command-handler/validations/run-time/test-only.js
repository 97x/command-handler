module.exports = (command, usage) => {
    const { instance, commandObject } = command
    const { guild } = usage

    if (commandObject.testOnly !== true) {
        return
    }

    // Return true if guild ID is included
    // Returns false if guild doesn't exist (ie. command being ran in direct messages)
    return instance.testServers.includes(guild?.id)
}