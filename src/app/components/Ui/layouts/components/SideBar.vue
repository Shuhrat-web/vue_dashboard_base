<template>
    <aside class="h-screen w-[15%] bg-white shadow-sm border-r border-secondary">
        <div class="flex justify-center items-center p-2 mb-5">
            <Logo :height="50" :width="50"/>     
        </div>
        <AsideLinks />
    </aside>
</template>

<script setup lang="ts">
import Logo from '../../Logo.vue';
import AsideLinks from './AsideLinks.vue';


</script>

<style scoped>

</style>