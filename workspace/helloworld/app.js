import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    newTodo: '',
    message: 'Hello Vue.js!',
    todos: [
      {text: 'Learn Javascript'},
      {text: 'Learn Vue.js'},
      {text: 'Build Something Awesome'}
    ]
  },
  methods: {
    addTodo: function(){
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({text: text});
        this.newTodo = ''
      }
    },
    removeTodo: function(index){
      this.todos.splice(index, 1);
    }
  }
});
