<template>
    <div class="depot-new-page">
        <bars />
    </div>
</template>
<script>
import bars from './bars';

export default {
    name: 'depotNew',
    components: { bars },
    data() {
        return {
            
        }
    },
    created() {
        const id = this.$route.params.id;
        if(id) { // edit

        } else { // new

        }
    }
}
</script>
<style lang="less">

</style>

