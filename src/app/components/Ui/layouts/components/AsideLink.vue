<template>
    <router-link 
    :class="`p-4 flex items-center  ${active ? 'bg-secondary/30 rounded-md text-primary':''} font-medium`" 
    :to="to">
        <v-icon class="mr-1" :name="icon" v-if="icon" />
        <slot />
    </router-link>
</template>

<script setup lang="ts">
    defineProps<{
        to: string;
        active: boolean;
        icon?: string; 
    }>()
</script>

<style scoped>

</style>