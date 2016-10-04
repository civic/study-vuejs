import Vue from 'vue'
import NumPad from './numpad.vue'

var vm = new Vue({
  el: '#app',
  data: {
    a: 1,
    b: 2,
    op: null
  },
  components: {
    numpad: NumPad
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
    onClickOp: function(op){
      this.op = op;
    },
    onNumChangedA: function(num){
      this.a = num;
    },
    onNumChangedB: function(num){
      this.b = num;
    }
  }
});

// for debug
window.vm = vm;
