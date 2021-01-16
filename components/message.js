const message = {
    data(){
        return{
            messages:[{
                id: Date.now(),
                username: 'Tristan',
                content: 'Ya pas de message lol',
                date: Date.now()
            },
            {
                id: Date.now(),
                username: 'Tristan',
                content: 'tjr pas mdr',
                date: Date.now()
            }],
            tempMessage: ''
        }

    },
    methods:{
        addMessage(){
            let infoMessage = {
                id: Date.now(),
                username: 'Tristan',
                content: this.tempMessage,
                date: Date.now()
            }
            this.messages.push(infoMessage)
            this.tempMessage = ''
        }
    },
    template: `<div class="col-sm-8">
            <div class="chatbody">
                <div class="panel panel-primary">
                    <div class="panel-heading top-bar">
                        <div class="col-md-8 col-xs-8">
                            <h3 class="panel-title">Chat</h3>
                        </div>
                    </div>
                    <div class="panel-body msg_container_base" v-for="message in messages">
                        <div class="row msg_container base_sent bg-secondary text-white mb-3 rounded">
                            <div class="col-md-10 col-xs-10">
                                <div class="messages msg_sent">
                                    <p>{{message.username}}</p>
                                    <p>{{message.content}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <form class="input-group" @submit.prevent="addMessage">
                            <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." v-model="tempMessage"/>
                            <span class="input-group-btn">
                                <button type="submit" class="btn btn-primary btn-sm" id="btn-chat" ><i class="fa fa-send fa-1x" aria-hidden="true"></i></button>
                            </span>
                        </form>
                    </div>
                </div>

            </div>
        </div>`
}

export default message