import users from "./users.js"
import message from "./message.js";

const chat = {
    data(){
        return{}
    },
    components:{
        Users: users,
        Message: message
    },
    template: `<Users /> <Message />`
}

export default chat