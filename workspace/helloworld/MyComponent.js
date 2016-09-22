import Vue from 'vue'


export const MyComponent = Vue.extend({
  props: ['myMessage'],
  template: '<div>{{myMessage}} A Custom Component!</div>'
});
Vue.component('my-component', MyComponent);

