<style lang="sass">
$primary-color: blue;

.num-color {
    color: $primary-color;
}
</style>

<template lang="jade">
label(v-for="n in 10")
    input(type="radio", :value="n", v-model="num")
    span.num-color {{n}}
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: ['num']
});
</script>
