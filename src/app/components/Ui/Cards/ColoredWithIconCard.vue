<script setup lang="ts">
import { IColoredCardWithIconsSettings, IColoredWithIconCardProps } from './lib/types/CardsTypes';

    withDefaults(defineProps<IColoredWithIconCardProps>(),{
        type: 'primary',
        size: 'md',
        icon: 'fa-home',
        round: 'md'
    })
    const settings:IColoredCardWithIconsSettings = {
        type: {
            primary: 'bg-primary/80 text-white',
            warning: 'bg-warning/90 text-white',
            danger: 'bg-danger/80 text-white',
            success: 'bg-success/80 text-white'
        },
        size:{
            md: 'px-4 py-2',
            lg:'px-4 py-6',
            sm:'px-2 py-1'
        },
        round: {
            md: 'rounded-md',
            lg:'rounded-lg',
            sm:'rounded'
        }
    }

</script>
<template>
    <div 
    :class="Object.fromEntries(
            Object.entries(settings.type).map(([key, value]) => [
            value,
            type === key
        ])
    ),
    Object.fromEntries(
            Object.entries(settings.size).map(([key, value]) => [
            value,
            size === key
        ])
    ),
    Object.fromEntries(
            Object.entries(settings.round).map(([key, value]) => [
            value,
            round === key
        ])
    )"
    class="flex gap-4 rounded-md items-center relative"
    >
        <v-icon :name="icon" />
        <span>
            {{ label }}
        </span>
        <router-link class="absolute top-0 left-0 h-full w-full" v-if="href" :to="href">
        </router-link>
    </div>
</template>


<style scoped>

</style>