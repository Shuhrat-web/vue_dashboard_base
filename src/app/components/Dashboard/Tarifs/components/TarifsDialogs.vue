
<script setup lang="ts">
    import { tarifsStore } from '@store/tarifs/tarifsStore';
    import BaseHeading from '@components/Ui/Headings/BaseHeading.vue'
    import BaseDialog from '@components/Ui/Dialog/BaseDialog.vue'
    import BaseButton from '@/app/components/Ui/Buttons/BaseButton.vue';
    import { ITarif } from '@/app/lib/requests/types/TarifsTypes';
    import TarifForm from './forms/TarifForm.vue'

    const tarifs = tarifsStore() 

    const toggleDeleteAction = (show:boolean) => {
        tarifs.setDialogAction('delete',show)
    }

    const toggleEditAction = (show:boolean) => {
        tarifs.setDialogAction('edit',show)
    }
    const toggleCreateAction = (show:boolean) => {
        tarifs.setDialogAction('create',show)
    }
    const confirmDelete = () => {
        if(tarifs.activeItem)tarifs.deleteTarif(tarifs.activeItem.id)
        toggleDeleteAction(false)
    }
    const confirmEdit = (item:ITarif) => {
        toggleEditAction(false)
        tarifs.editTarif(item)
    }

    const confirmCreate = (item:ITarif) => {
        tarifs.createTarif(item)
        toggleCreateAction(false)
    }
</script>

<template>
    <div>
        <BaseDialog 
        size="sm"
        :toggle-show="toggleDeleteAction"
        :show="tarifs.dialogActions.delete">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Confirm the action
                </BaseHeading>
            </template>
            <p class="text-center">
                Are you sure, that you want to delete  "{{ tarifs.activeItem.name }}"?
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
        :show="tarifs.dialogActions.edit">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Editing "{{ tarifs.activeItem.name }}"
                </BaseHeading>
            </template>
            <TarifForm
                :active-item="tarifs.activeItem"
                :con-firm-form="confirmEdit"
                :toggle-cancle="toggleEditAction"
             />
        </BaseDialog>
        <BaseDialog
        :toggle-show="toggleCreateAction"
        :show="tarifs.dialogActions.create">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Creating
                </BaseHeading>
            </template>
            <TarifForm
                :active-item="tarifs.activeItem"
                :con-firm-form="confirmCreate"
                :toggle-cancle="toggleCreateAction"
             />
        </BaseDialog>
    </div>
</template>

<style scoped>

</style>