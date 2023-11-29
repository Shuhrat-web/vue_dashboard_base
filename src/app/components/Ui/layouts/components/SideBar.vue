<script setup lang="ts">
import Logo from '../../Logo.vue';
import AsideLinks from './AsideLinks.vue';
import BaseHeading from '../../Headings/BaseHeading.vue';
import { ISidebarProps } from '../lib/types/LayoutTypes';
defineProps<ISidebarProps>()


</script>

<template>
    <aside 
    :class="{
        ['left-0 w-[40%] lg:w-[15%] visible opacity-100']: showAside,
        ['-left-full w-[15%] opacity-0 invisible']: !showAside,        
    }"
    class="h-full fixed  bg-white shadow-sm border-r border-secondary duration-500 transition-all ease-out z-20">
        <div class="flex flex-col justify-center items-center p-2 mb-5">
            <Logo :height="50" :width="50"/> 
            <BaseHeading extra-class="mt-5">
                Dashboard
            </BaseHeading>    
        </div>
        <AsideLinks />
    </aside>
</template>

<style scoped>

</style>