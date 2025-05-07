const { axiosInstance } = require("./axios")

function sendMessage(messageObj, messageText) {
    return axiosInstance.post(`sendMessage`, {
        chat_id: messageObj.chat.id,
        text: messageText
    })
}

function handleMessage(messageObj) {
    const messageText = messageObj.text || messageObj.caption || "No text found";

    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                sendMessage(messageObj, "Welcome to the bot!")
                break;
            case "help":
                sendMessage(messageObj, "This is a help message.")
                break;
            default:
                sendMessage(messageObj, `Unknown command: ${command}`)
        }
    } else {
        return sendMessage(messageObj, messageText)
    }

}

module.exports = { handleMessage, sendMessage }