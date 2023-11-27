<script setup lang="ts">
    import SideBar from './components/SideBar.vue';
    import Header from './components/Header.vue';
</script>

<template>
    <div class="flex">
        <SideBar />
        <div class="w-[95%]">
            <Header />
            <main class="container__base">
                <slot />
            </main>
        </div>
    </div>
</template>

<style scoped>

</style>