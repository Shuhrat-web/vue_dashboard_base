<script setup lang="ts">
    import { computed } from 'vue';
    import { INamedAvatarProps,INamedAvatarSettings } from './lib/types/AvatarTypes'
   const props =  withDefaults(defineProps<INamedAvatarProps>(),{
        color: 'secondary',
        size: 'md'
    })


    const settings:INamedAvatarSettings = {
        color: {
            success: 'bg-success',
            secondary: 'bg-secondary',
            danger: 'bg-danger',
            warning: 'bg-warning',
            primary: 'bg-primary',
            white: 'bg-white'
        },
        size:{
            lg: 'h-6 w-6 text-lg',
            xl: 'h-8 w-8 text-md',
            sm: 'h-4 w-4 text-xs',
            md: 'h-7 w-7 text-sm'
        }
    }
    const getInitials = computed(() => {
        const words = props.fullName.split(' ');
        const initials = words?.map(word => word.charAt(0)).join('');
        return initials?.toUpperCase();
    })
</script>

<style scoped>

</style>
<template>
    <span 
    :class="Object.fromEntries(
            Object.entries(settings.color).map(([key, value]) => [
            value,
            props.color === key
        ])
    )"
    class="flex h-7 w-7 items-center justify-center rounded-full">
        <span class="font-medium leading-none text-white">{{ getInitials }}</span>
    </span>
</template>