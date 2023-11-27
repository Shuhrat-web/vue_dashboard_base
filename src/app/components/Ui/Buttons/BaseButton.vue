<script setup lang="ts">
    import { IUiTypes } from '@lib/shared/types/GlobalTypes';
    import { IBaseButtonProps,IButtonSettings } from './lib/types/ButtonTypes';
    
    withDefaults(defineProps<IBaseButtonProps>(),{
        type: 'primary',
        round: 'md',
        btn: true,
        animate: true,
        size: 'md',
        flat: false,
        outlined: false,
        block: false,
        textColor: 'black',
        loading: false
    })

    const settings:IButtonSettings = {
        size: {
            none: 'px-0 py-0',
            sm: 'px-2.5 py-0.5 text-sm',
            lg: 'px-6 py-2',
            xl: 'px-10 py-2',
            md: 'px-3 py-1.5'
        },
        round:{
            lg: 'rounded-lg',
            full: 'rounded-full',
            xl: 'rounded-2xl',
            none: '',
            sm: 'rounded',
            md: 'rounded-md'
        }, 
        types: {
            success: 'bg-success text-white',
            secondary: 'bg-secondary-100 text-secondary',
            danger: 'bg-danger text-white',
            warning: 'bg-warning text-white',
            primary: 'bg-primary text-white',
            white: 'bg-white text-black'
        },
        flat:{
            success: 'bg-success bg-opacity-10 text-success',
            secondary: 'bg-secondary-100 bg-opacity-75 text-secondary',
            white: 'bg-secondary-100 bg-opacity-10 text-white',
            danger: 'bg-danger bg-opacity-10 text-danger',
            warning: 'bg-warning bg-opacity-10 text-warning',
            primary: 'bg-primary bg-opacity-10 text-primary'
        },
        outlined:{
            success: 'border border-success text-success hover:text-white hover:bg-success',
            secondary: 'border border-secondary text-secondary hover:text-white hover:bg-secondary',
            danger: 'border border-danger text-danger hover:text-white hover:bg-danger',
            warning: 'border border-warning text-warning hover:text-white hover:bg-danger',
            primary: 'border border-primary text-primary  hover:text-white hover:bg-primary'
        },  
        textColor: {
            success: 'text-success',
            secondary: 'text-secondary',
            danger: 'text-danger',
            warning: 'text-warning',
            primary: 'text-primary',
            white: 'text-white'
        },             
        animate:'transform scale-100 active:scale-95 transition-all duration-75'
    }
</script>

<template>
    <button 
    :type="btn ? 'button' : 'submit'"
    :class="
        !flat && settings.types[type as keyof IUiTypes] && !outlined && Object.fromEntries(
            Object.entries(settings.types).map(([key, value]) => [
            value,
            type === key
        ])
    ),
    flat  && Object.fromEntries(
            Object.entries(settings.flat).map(([key, value]) => [
            value,
            type === key
        ])
    ), 
    outlined  && Object.fromEntries(
            Object.entries(settings.outlined).map(([key, value]) => [
            value,
            type === key
        ])
    ),
        type=='text'  && Object.fromEntries(
            Object.entries(settings.textColor).map(([key, value]) => [
            value,
            textColor === key
        ])
    ),
    Object.fromEntries(
            Object.entries(settings.round).map(([key, value]) => [
            value,
            round === key
        ])
    ),
    Object.fromEntries(
            Object.entries(settings.size).map(([key, value]) => [
            value,
            size === key
        ])
    ),
    {
        [`${settings.animate}`] :animate && settings.animate,
        [`w-full`] :block,
        [`${extraClass}`]:extraClass && extraClass.length > 0,
        [`animate-pulse`]:loading,
    }
    "
    class="">
    <div class="flex justify-center items-center" v-if="loading" aria-label="Loading..." role="status">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-6 h-6 fill-current">
            <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
            </path>
        </svg>
    </div>
        <slot v-else />
    </button>
</template>