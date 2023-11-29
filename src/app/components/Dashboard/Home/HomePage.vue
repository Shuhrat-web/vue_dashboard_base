<script setup lang="ts">
import ColoredWithIconCard from '@components/Ui/Cards/ColoredWithIconCard.vue'
import { reactive } from 'vue';
import {IHomePageStats} from './lib/types/HomePageTypes'
import { usersStore } from '@/app/store/users/usersStore';
import { tarifsStore } from '@/app/store/tarifs/tarifsStore';
import { servicesStore } from '@/app/store/services/servicesStore';

const users =usersStore()
const tarifs = tarifsStore()
const services = servicesStore()
const statisticData:IHomePageStats[] = reactive([
    {
        icon: 'hi-user-group',
        label: 'Users count '+users.getallUsers.length,
        type: 'primary',
        href: '/users'
    },
    {
        icon: 'hi-calendar',
        label: 'services count '+services.getAllServices.length,
        type: 'warning',
        href: '/services'
    },
    {
        icon: 'hi-book-open',
        label: 'Tarifs count '+tarifs.getAllTarifs.length,
        type: 'success',
        href: '/tarifs'
    },
])

</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ColoredWithIconCard 
            v-for="(card,i) in statisticData"
            :key="i"
            :type="card.type"
            :label="card.label"
            :icon="card.icon"
            :href="card.href"
        />
    </div>
</template>

<style scoped>

</style>