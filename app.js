const todos = [
    {
        text:'Fare la doccia',
        done:false,
    },
    {
        text:'Fare la spesa',
        done:false,
    },
    {
        text:'Mangiare',
        done:false,
    },
    {
        text:'Buttare la spazzatura',
        done:false,
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

            this.todos.push({
                text: this.newTodo,
                done: false,
            })
        },
        toggleStrike(strike){
           // strike.
        }
    }
})

const done = false

const tasks = [done ? 'done' : '', 'todo', 'altra-classe' ]

console.log(tasks)