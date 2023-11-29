<script setup lang="ts">
    import SideBar from './components/SideBar.vue';
    import Header from './components/Header.vue';
    import { onMounted, ref } from 'vue';
    
    let showSidebar = ref<boolean>(true)

    const toggleShowAside = () => {
        showSidebar.value = !showSidebar.value 
    }

    onMounted(() => {
        if(window.innerWidth < 1025) showSidebar.value = false
        
    })
</script>

<template>
    <div>
        <SideBar :show-aside="showSidebar" />
        <div 
        :class="{
            ['w-full lg:w-[85%] ml-auto']:showSidebar,
            ['w-full mr-auto']:!showSidebar,
        }"
        class="duration-300 transition-all relative">
            <div @click="toggleShowAside()" 
            :class="`fixed h-full w-[85%] top-0 right-0 bg-black/40 z-20 ${showSidebar ? 'visible opacity-100 lg:invisible lg:opacity-0' : 'invisible opacity-0'} duration-300`" />
            <Header :show="showSidebar" :toggle-show-header="toggleShowAside" />
            <main class="container__base z-10">
                <slot />
            </main>
        </div>
    </div>
</template>

<style scoped>

</style>