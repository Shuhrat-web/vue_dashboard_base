<script setup lang="ts"> 
    import {IBaseTextFieldProps,ITextFieldSettings} from './lib/types/TextFiledsTypes'
    const props = withDefaults(defineProps<IBaseTextFieldProps>(),{
        name: 'addTHeName',
        textfieldType: 'text',
        required: false,
        type: 'secondary',
        round: 'md',
        textSize: 'md',
        size: 'md'
    })
    const emit = defineEmits<{
        (event: 'update:modelValue', payload: string): void;
    }>();

    const settings:ITextFieldSettings = {
        type: {
            primary:'ring-primary placeholder:text-primary focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset ',
            warning: 'ring-warning placeholder:text-warning focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset ',
            secondary: 'ring-secondary placeholder:text-secondary focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset ',
            danger: 'ring-danger placeholder:text-danger focus:ring-primary border-0 ring-1 ring-inset focus:ring-2 focus:outline-none focus:ring-inset ',
            text: ''
        },
        round: {
            md: 'rounded-md',
            lg: 'rounded-lg',
            sm: 'rounded',
            full: 'rounded-full'
        },
        textSize: {
            md: 'text-md sm:text-sm',
            lg: 'text-lg sm:text-md',
            sm: 'text-sm sm:text-xs',
        },
        size: {
            md: 'py-1.5 px-1 ',
            lg: 'py-3 px-1',
            sm: 'py-0.5 px-1',
        }
    }
</script>

<template>
    <div>
        <label 
        v-if="props.label" 
        :for="props.name"
        :class="Object.fromEntries(
            Object.entries(settings.textSize).map(([key, value]) => [
                value,
                props.textSize === key
            ])
        )" 
        class="block text-sm font-medium leading-6 text-gray-900">{{ props.label }}</label>
        <div class="mt-2">
            <input
            :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            :id="props.name" 
            :name="props.name" 
            :type="props.textfieldType" 
            :class="Object.fromEntries(
                Object.entries(settings.round).map(([key, value]) => [
                    value,
                    props.round === key
                ])
            ),
            Object.fromEntries(
                Object.entries(settings.type).map(([key, value]) => [
                    value,
                    props.type === key
                ])
            ),
            Object.fromEntries(
                Object.entries(settings.textSize).map(([key, value]) => [
                    value,
                    props.textSize === key
                ])
            ),
            Object.fromEntries(
                Object.entries(settings.size).map(([key, value]) => [
                    value,
                    props.size === key
                ])
            ),
            { 
                // [`${settings.type.secondary}`] : props.type === 'secondary',
             }"
            class="block w-full rounded-md shadow-sm sm:leading-6" />
        </div>
    </div>
</template>