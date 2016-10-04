<style lang="sass">
$primary-color: blue;

.num-color {
    color: $primary-color;
}
</style>

<template lang="jade">
    div
        label(v-for="n in 10")
            input(type="radio", :value="n" v-model="num")
            span.num-color {{n}}
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: ["defnum"],
    data: function(){
        return {num: this.$options.propsData.defnum}
    },
    watch: {
        num: function(newNum, oldNum){
            this.$emit('num-changed', newNum);
        }
    }

});
</script>
