class Command {
    constructor(commandName, commandObject) {
        this._commandName = commandName.toLowerCase()
        this._commandObject = commandObject

        // Call verifySyntax() when constructor runs
        this.verifySyntax()
    }

    // Method to verify command syntax
    verifySyntax() {
        if (!this.commandObject.callback) {
            throw new Error(
              `Command "${this.commandName}" does not have a callback function.`
            )
          }
    }

    // Getters
    get commandName() {
        return this._commandName
    }

    get commandObject() {
        return this._commandObject
    }
}

module.exports = Command