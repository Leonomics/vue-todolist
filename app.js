const todos = [
    {
        text:'Fare la doccia',
    todo:false,
    },
    {
        text:'Fare la spesa',
    todo:false,
    },
    {
        text:'Mangiare',
    todo:false,
    },
    {
        text:'Buttare la spazzatura',
    todo:false,
    },
]

const app = new Vue({
    el:'#app',
    data:{
        todos: todos,
        classiTodos:'todo',
        newTodo:'',
    },
    methods:{
        toggleDoneOf(todo){
            todo.done = !todo.done
        },
        addToDo(){
            console.log('aggiungi task')
            this.newTodo = this.newTodo.trim()

            if(!this.newTodo) return

            this.tosos.push({
                text: this.newTodo,
                done: false,
            })
        }
    }
})

const done = false

const tasks = [done ? 'done' : '', 'todo', 'altra-classe' ]

console.log(tasks)