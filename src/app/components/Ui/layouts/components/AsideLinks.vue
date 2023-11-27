<template>
    <nav>
        <ul class="flex flex-col gap-4">
            <li class="w-full px-2" v-for="link in routes" :key="link.id">
                <AsideLink :icon="link.icon" :active="route.path === link.path" :to="link.path">
                    {{ link.title }}
                </AsideLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
import {IAsideLinksProps} from '../lib/types/LayoutTypes'
    import AsideLink from './AsideLink.vue';

    withDefaults(defineProps<IAsideLinksProps>(),{
        routes:() => [
            {
                id: 1,
                path: '/',
                title: 'Home',
                icon: 'fa-home'
            },
            {
                id: 2,
                path: '/tarifs',
                title: 'Tarifs',
                icon: 'hi-book-open'
            },
            {
                id: 3,
                path: '/services',
                title: 'Services',
                icon: 'hi-calendar'
            },
            {
                id: 4,
                path: '/users',
                title: 'Users',
                icon: 'hi-user-group'
            },
        ]
    })

    const route = useRoute();
    
</script>

<style scoped>

</style>