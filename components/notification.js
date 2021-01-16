

const notification = {
    data(){
        return{
            name: ''
        }
    },
    template: `<div id="notifContainer" style="position: fixed; background-color: green; bottom: 10px; right: -250px; padding: 5px 10px; border-radius: 5px; color: white; font-size: 30px; transition: .5s;">
    <div>
        <span>{{name}}</span>
        <span> s'est connecté</span>
    </div>
</div>

`,
    methods: {
        generateName(){
            let vm = this
            setInterval(function () {
                vm.name = faker.name.findName()
                vm.pushNewLogged()
                vm.showNotif()
                console.log('ok')
            },6*1000)
        },
        pushNewLogged(){
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerHTML = this.name
            tr.appendChild(td)
            document.querySelector('#userContainer').appendChild(tr)
            console.log('ok2')
        },
        showNotif(){
            document.querySelector('#notifContainer').style.right = "20px"
            setTimeout(function () {
                document.querySelector('#notifContainer').style.right = "-400px"
            },2*1000)
        }
    },
    mounted(){
        this.generateName()
    }
}

export default notification