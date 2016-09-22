import Vue from 'vue'
import './MyComponent'


var vm = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    greeting: false,
    message: 'Hello Vue.js!',
    todos: [
      {text: 'Learn Javascript'},
      {text: 'Learn Vue.js'},
      {text: 'Build Something Awesome'}
    ]
  },
  methods: {
    addTodo(){
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({text: text});
        this.newTodo = ''
      }
    },
    removeTodo(index){
      this.todos.splice(index, 1);
    }
  }
});

window.vm = vm;
