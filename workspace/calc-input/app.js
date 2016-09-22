import Vue from 'vue'

var vm = new Vue({
  el: '#app',
  data: {
    a: 0,
    b: 0,
    op: null
  },
  computed: {
    c: function(){
      if (this.op === "+") {
        return this.a + this.b;
      } else if (this.op === "-") {
        return this.a - this.b;
      } else if (this.op === "*") {
        return this.a * this.b;
      } else if (this.op === "/") {
        return this.a / this.b;
      }
      return null;

    }
  },
  methods: {
    onClickA: function(a){
      this.a = a;
    },
    onClickB: function(b){
      this.b = b;
    },
    onClickOp: function(op){
      this.op = op;
    }
  }
});

// for debug
window.vm = vm;
