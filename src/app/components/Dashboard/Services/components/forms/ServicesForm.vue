<script setup lang="ts">
import { reactive,watch } from 'vue';
import { IServicesFormProps } from '../../lib/types/ServicesPageTypes';
import BaseTextField from '@components/Ui/TextFields/BaseTextField.vue'
import BaseButton from '@components/Ui/Buttons/BaseButton.vue'
import { servicesStore } from '@store/services/servicesStore';

const services = servicesStore() 

const props = defineProps<IServicesFormProps>()
let activeItem = reactive(props.activeItem ? props.activeItem :
    {
        id: 0,
        name: '',
        price: 0,
        description: ''
    }
)

watch(() => services.activeItem, (item) => {
    
    activeItem = JSON.parse(JSON.stringify(item))
})



</script>

<template>
        <form @submit.prevent="props.conFirmForm(activeItem)">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <BaseTextField 
                required
                label="Name" 
                v-model="activeItem.name" />
                <BaseTextField 
                required
                textfield-type="number" 
                label="Price" 
                v-model="activeItem.price" />
                <BaseTextField 
                required
                label="Description" 
                v-model="activeItem.description" />
            </div>
            <div class="flex justify-center items-center gap-5 mt-5">
                <BaseButton @click="props.toggleCancle(false)" flat type="danger">
                    Отмена
                </BaseButton>
                <BaseButton :btn="false" flat type="success">
                    Подтвердить
                </BaseButton>
            </div>
        </form>
</template>

<style scoped>

</style>