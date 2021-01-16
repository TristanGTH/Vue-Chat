const users = {
    data() {
        return{
            users:[{
                    id: Date.now(),
                    username: 'Tristan'
                },
                {
                    id: Date.now(),
                    username: 'Colin'
                }]
        }
    },
    template: `<div class="col-sm-4">
            <div class="panel panel-primary">
                <div class="panel-heading top-bar">
                    <div class="col-md-8 col-xs-8">
                        <h3 class="panel-title">Connected Users</h3>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <tbody id="userContainer">
                    <tr v-for="user in users">
                        <td>{{user.username}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>`
}

export default users