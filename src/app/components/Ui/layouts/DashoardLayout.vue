<script setup lang="ts">
    import SideBar from './components/SideBar.vue';
    import Header from './components/Header.vue';
import { ref } from 'vue';
    
    let showSidebar = ref<boolean>(true)

    const toggleShowAside = () => {
        showSidebar.value = !showSidebar.value 
    }
</script>

<template>
    <div>
        <SideBar :show-aside="showSidebar" />
        <div 
        :class="{
            ['w-[85%] ml-auto']:showSidebar,
            ['w-full mr-auto']:!showSidebar,
        }"
        class="duration-200 transition-all">
            <Header :show="showSidebar" :toggle-show-header="toggleShowAside" />
            <main class="container__base">
                <slot />
            </main>
        </div>
    </div>
</template>

<style scoped>

</style>