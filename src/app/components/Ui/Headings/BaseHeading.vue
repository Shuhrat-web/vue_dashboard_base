<script setup lang="ts">
import { ITitleProps, ITitleSetting } from './lib/types/HeadingTypes';
import { ISizes, IUiTypes } from "@lib/shared/types/GlobalTypes"

withDefaults(defineProps<ITitleProps>(),{
    size: 'md',
    font: 'md',
    display: 'any',
    centered: false,
    color: 'none',
    extraClass: ''
})

const settings:ITitleSetting = {
        sizes: {
            xs: 'text-xs',
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
        },
        font:  {
            sm: 'font-thin',
            md: 'font-medium',
            lg: 'font-bold',
        },
        color:{
            primary: 'text-primary',
            warning: 'text-warning',
            danger: 'text-danger',
            secondary:'text-secondary-dark',
            white: 'text-white',
            none: 'text-black'
        },
    }
</script>

<template>
    <template v-if="display === 'h1'">
        <h1 :class="`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`">
            <slot />
        </h1>
    </template>
    <template v-else-if="display === 'h2'">
        <h2 :class="`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`">
            <slot />
        </h2>
    </template>
    <template v-else-if="display === 'h3'">
        <h3 :class="`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`">
            <slot />
        </h3> 
    </template>
    <template v-else-if="display === 'h4'">
        <h4 :class="`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`">
            <slot />
        </h4>
    </template>
    <template v-else-if="display === 'h5'">
        <h5 :class="`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`">
            <slot />
        </h5>
    </template>
    <template v-else-if="display === 'h6'">
        <h6 :class="`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`">
            <slot />
        </h6>
    </template>
    <template v-else>
        <div :class="`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`">
            <slot />
        </div>
    </template>
</template>