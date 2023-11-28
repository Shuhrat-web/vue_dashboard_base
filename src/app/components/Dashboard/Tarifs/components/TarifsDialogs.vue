
<script setup lang="ts">
    import { tarifsStore } from '@store/tarifs/tarifsStore';
    import BaseHeading from '@components/Ui/Headings/BaseHeading.vue'
    import BaseDialog from '@components/Ui/Dialog/BaseDialog.vue'
    import BaseButton from '@/app/components/Ui/Buttons/BaseButton.vue';
    import { reactive,watch } from 'vue';
    import { ITarif } from '@/app/lib/requests/types/TarifsTypes';
    import BaseTextField from '@/app/components/Ui/TextFields/BaseTextField.vue';

    const tarifs = tarifsStore() 
    let activeItem:ITarif = reactive({
        id: Date.now(),
        name: '',
        price: 0,
        description: ''
    })

    watch(() => tarifs.activeItem, (item) => {
        activeItem = JSON.parse(JSON.stringify(item))
    })

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
    const confirmEdit = () => {
        toggleEditAction(false)
        tarifs.editTarif(activeItem)
    }

    const confirmCreate = () => {
        tarifs.createTarif(activeItem)
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
                    Подтвердите действие
                </BaseHeading>
            </template>
            <p class="text-center">
                Вы уверены что хотите удалить "{{ tarifs.activeItem.name }}"?
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
                    Редактирование "{{ tarifs.activeItem.name }}"
                </BaseHeading>
            </template>
            <form @submit.prevent="confirmEdit()">
                <div class="grid grid-cols-2 gap-5">
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
                    <BaseButton @click="toggleEditAction(false)" flat type="danger">
                        Отмена
                    </BaseButton>
                    <BaseButton :btn="false" flat type="success">
                        Подтвердить
                    </BaseButton>
                </div>
            </form>
        </BaseDialog>
        <BaseDialog
        :toggle-show="toggleCreateAction"
        :show="tarifs.dialogActions.create">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Создание
                </BaseHeading>
            </template>
            <form @submit.prevent="confirmCreate()">
                <div class="grid grid-cols-2 gap-5">
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
                    <BaseButton @click="toggleCreateAction(false)" flat type="danger">
                        Отмена
                    </BaseButton>
                    <BaseButton :btn="false" flat type="success">
                        Подтвердить
                    </BaseButton>
                </div>
            </form>
        </BaseDialog>
    </div>
</template>

<style scoped>

</style>