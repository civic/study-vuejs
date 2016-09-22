import Vue from 'vue'

export const NumPad = Vue.extend({
  props: ['num'],
  template: `
    <template v-for="n in 10">
      <label>
      <input type="radio" :value="n" v-model="num"/>
      {{n}}
      </label>
    </template>
  `
});
Vue.component('numpad', NumPad);
