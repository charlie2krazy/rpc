const RPC = require("discord-rpc")
const client = new RPC.Client({ transport: 'ipc' });

const activity = {
    details : "",
    state : "",

    assets : {
        large_image : "",
        large_text : "",
        small_image : "",
        small_text : ""
    },
    buttons: [
        {
            "label": "",
            "url": ""
        },
        {
            "label": "",
            "url": "",
        }
    ],
    timestamps: {start: Date.now()},
};
client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
    console.log("Done starting rpc");
})
client.login({ clientId : "account-id" }).catch(console.error);