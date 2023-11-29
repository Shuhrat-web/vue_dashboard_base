<script setup lang="ts">
import type { Header } from "vue3-easy-data-table";
import BaseButton from '../../Ui/Buttons/BaseButton.vue';
// import TarifsDialogs from './components/TarifsDialogs.vue';
import { IDialogActions } from '@/app/store/lib/types/StoreTypes';
import BaseHeading from '@components/Ui/Headings/BaseHeading.vue'
import { usersStore } from "@store/users/usersStore";
import UsersDialogs from "./components/UsersDialogs.vue";

    const users = usersStore();
    const headers:Header[] = [
        {
            text: 'First name',
            value: 'firstName',
        },
        {
            text: 'Last name',
            value: 'lastName',
        },
        {
            text: 'Father\'s name',
            value: 'fathersName'
        },
        {
            text: 'MSISDN',
            value: 'msisdn'
        },
        {
            text: 'Actions',
            value: 'actions'
        },
    ]

    
    const setAction = (id:number,type:'delete'|'edit') => {
        users.setActiveUser(id);        
        users.setDialogAction(type as keyof IDialogActions,true)
    }
</script>
<template>
    <div>
        <div class="flex justify-between items-center mb-5">
            <BaseHeading size="2xl">
                Users list
            </BaseHeading>
            <BaseButton @click="users.setDialogAction('create',true)" flat>
                Add
            </BaseButton>
        </div>
        <EasyDataTable
            show-index
            class="relative"
            :headers="headers"
            :items="users.getallUsers"
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
        <UsersDialogs />
    </div>
</template>

<style scoped>

</style>