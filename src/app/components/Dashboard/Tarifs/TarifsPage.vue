<script setup lang="ts">
import { tarifsStore } from '@store/tarifs/tarifsStore';
import type { Header } from "vue3-easy-data-table";
import BaseButton from '../../Ui/Buttons/BaseButton.vue';
import TarifsDialogs from './components/TarifsDialogs.vue';
import { IDialogActions } from '@/app/store/tarifs/lib/types/TarifTypes';
import BaseHeading from '@components/Ui/Headings/BaseHeading.vue'

    const tarifs = tarifsStore();
    const headers:Header[] = [
        // {
        //     text: 'ID',
        //     value: 'id'
        // },
        {
            text: 'Name',
            value: 'name',
        },
        {
            text: 'Description',
            value: 'description',
        },
        {
            text: 'Actions',
            value: 'actions'
        }
    ]

    
    const setAction = (id:number,type:'delete'|'edit') => {
        tarifs.setActiveTarif(id);        
        tarifs.setDialogAction(type as keyof IDialogActions,true)
    }
</script>

<template>
    <div>
        <div class="flex justify-between items-center mb-5">
            <BaseHeading size="2xl">
                Tarifs list
            </BaseHeading>
            <BaseButton @click="tarifs.setDialogAction('create',true)" flat>
                Add
            </BaseButton>
        </div>
        <EasyDataTable
            show-index
            class="relative"
            :headers="headers"
            :items="tarifs.getAllTarifs"
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
    <TarifsDialogs />
</template>

<style scoped>

</style>