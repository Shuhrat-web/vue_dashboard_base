<script setup lang="ts">
import {IBaseDialogProps, IDialogSettings} from './lib/types/DialogsTypes'
    const props = withDefaults(defineProps<IBaseDialogProps>(),{
        size: 'md',
        show: false,
        toggleShow: () => console.log('set function')
    })

    const settings:IDialogSettings= {
        size: {
            md: 'w-8/12',
            lg: 'w-11/12',
            sm: 'w-6/12'
        }
    }

</script>
<template>
    <div 
    class="fixed top-0 left-0 h-screen w-screen duration-200 transition-all flex items-center justify-center z-30"
    :class="`${props.show ? 'opacity-100 visible' : 'opacity-0 invisible'}`">
    <div class="absolute top-0 left-0 w-full h-full bg-black/30 z-40 " @click="props.toggleShow(false)">
    </div>
        <div 
        :class="
         Object.fromEntries(
            Object.entries(settings.size).map(([key, value]) => [
                value,
                props.size === key
            ])
        )"
        class="bg-white mx-auto rounded-md relative py-8 px-4 z-50">
            <div>
                <slot name="header"></slot>
            </div>
            <div class="my-5">
                <slot />
            </div>
            <div>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>