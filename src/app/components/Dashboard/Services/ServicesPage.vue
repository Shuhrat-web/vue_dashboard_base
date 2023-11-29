<script setup lang="ts">
import type { Header } from "vue3-easy-data-table";
import BaseButton from '../../Ui/Buttons/BaseButton.vue';
import ServicesDialogs from './components/ServicesDigalogs.vue';
import { IDialogActions } from '@store/lib/types/StoreTypes';
import BaseHeading from '@components/Ui/Headings/BaseHeading.vue'
import { servicesStore } from '@store/services/servicesStore';

    const services = servicesStore();
    const headers:Header[] = [
        {
            text: 'Name',
            value: 'name',
        },
        {
            text: 'Description',
            value: 'description',
        },
        {
            text: 'Price',
            value: 'price'
        },
        {
            text: 'Actions',
            value: 'actions'
        },
    ]

    
    const setAction = (id:number,type:'delete'|'edit') => {
        services.setActiveService(id);        
        services.setDialogAction(type as keyof IDialogActions,true)
    }
</script>

<template>
    <div>
        <div class="flex justify-between items-center mb-5">
            <BaseHeading size="2xl">
                Services list
            </BaseHeading>
            <BaseButton @click="services.setDialogAction('create',true)" flat>
                Add
            </BaseButton>
        </div>
        <EasyDataTable
            show-index
            class="relative"
            :headers="headers"
            :items="services.getAllServices"
        >
            <template #item-actions="{id}">
                <div class="flex gap-3">
                    <BaseButton @click="setAction(id,'edit')" flat type="warning">
                        edit
                    </BaseButton>
                    <BaseButton @click="setAction(id,'delete')" flat type="danger">
                        delete
                    </BaseButton>
                </div>
            </template>
        </EasyDataTable>
    </div>
    <ServicesDialogs />
</template>

<style scoped>

</style>