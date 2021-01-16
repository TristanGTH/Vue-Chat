import chat from "./components/chat.js"
import notification from "./components/notification.js"


Vue.createApp({
    components:{
        chat,
        Notification: notification,
    }
}).mount("#app");