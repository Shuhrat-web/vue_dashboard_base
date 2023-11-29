
<script setup lang="ts">
    import BaseHeading from '@components/Ui/Headings/BaseHeading.vue'
    import BaseDialog from '@components/Ui/Dialog/BaseDialog.vue'
    import BaseButton from '@/app/components/Ui/Buttons/BaseButton.vue';
    import UserForm from './forms/UserForm.vue';
    import { usersStore } from '@/app/store/users/usersStore';
    import { IUser } from '@/app/lib/requests/types/UsersTypes';

    const users = usersStore() 

    const toggleDeleteAction = (show:boolean) => {
        users.setDialogAction('delete',show)
    }

    const toggleEditAction = (show:boolean) => {
        users.setDialogAction('edit',show)
    }
    const toggleCreateAction = (show:boolean) => {
        users.setDialogAction('create',show)
    }
    const confirmDelete = () => {
        if(users.activeItem)users.deleteUser(users.activeItem.id)
        toggleDeleteAction(false)
    }
    const confirmEdit = (item:IUser) => {
        toggleEditAction(false)
        users.editUser(item)
    }

    const confirmCreate = (item:IUser) => {
        users.createUser(item)
        toggleCreateAction(false)
    }
</script>

<template>
    <div>
        <BaseDialog 
        size="sm"
        :toggle-show="toggleDeleteAction"
        :show="users.dialogActions.delete">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Confirm the action
                </BaseHeading>
            </template>
            <p class="text-center">
                Are you sure, that you want to delete  "{{ users.activeItem.firstName }}"?
            </p>
            <template v-slot:footer>
                <div class="flex justify-center items-center gap-5">
                    <BaseButton @click="toggleDeleteAction(false)" flat type="danger">
                        Отмена
                    </BaseButton>
                    <BaseButton @click="confirmDelete()" flat type="success">
                        Подтвердить
                    </BaseButton>
                </div>
            </template>
        </BaseDialog>
        <BaseDialog
        :toggle-show="toggleEditAction"
        :show="users.dialogActions.edit">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Editing "{{ users.activeItem.firstName }}"
                </BaseHeading>
            </template>
            <UserForm
                :active-item="users.activeItem"
                :con-firm-form="confirmEdit"
                :toggle-cancle="toggleEditAction"
             />
        </BaseDialog>
        <BaseDialog
        :toggle-show="toggleCreateAction"
        :show="users.dialogActions.create">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Creating
                </BaseHeading>
            </template>
            <UserForm
                :active-item="users.activeItem"
                :con-firm-form="confirmCreate"
                :toggle-cancle="toggleCreateAction"
             />
        </BaseDialog>
    </div>
</template>

<style scoped>

</style>