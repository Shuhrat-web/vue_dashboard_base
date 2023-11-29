<script setup lang="ts">
import { ref } from 'vue';
import BaseTextField from '../../TextFields/BaseTextField.vue';

    const searchVal = ref<string>('')
    const submitSearch = () => {
        console.log(searchVal.value);
    }
</script>
<template>
    <form @submit.prevent="submitSearch()" class="relative lg:flex hidden" action="#" method="GET">
        <BaseTextField 
            v-model="searchVal"
            size="sm"
            textSize="sm"
            place-holder="Type to search..."
        />
    </form>
</template>

<style scoped>

</style>