
<script setup lang="ts">
    import BaseHeading from '@components/Ui/Headings/BaseHeading.vue'
    import BaseDialog from '@components/Ui/Dialog/BaseDialog.vue'
    import BaseButton from '@components/Ui/Buttons/BaseButton.vue';
    import ServicesForm from './forms/ServicesForm.vue'
    import { servicesStore } from '@store/services/servicesStore';
    import { IService } from '@/app/lib/requests/types/ServicesTypes';

    const services = servicesStore() 

    const toggleDeleteAction = (show:boolean) => {
        services.setDialogAction('delete',show)
    }

    const toggleEditAction = (show:boolean) => {
        services.setDialogAction('edit',show)
    }
    const toggleCreateAction = (show:boolean) => {
        services.setDialogAction('create',show)
    }
    const confirmDelete = () => {
        if(services.activeItem)services.deleteService(services.activeItem.id)
        toggleDeleteAction(false)
    }
    const confirmEdit = (item:IService) => {
        toggleEditAction(false)
        services.editService(item)
    }

    const confirmCreate = (item:IService) => {
        services.createService(item)
        toggleCreateAction(false)
    }
</script>

<template>
    <div>
        <BaseDialog 
        size="sm"
        :toggle-show="toggleDeleteAction"
        :show="services.dialogActions.delete">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Подтвердите действие
                </BaseHeading>
            </template>
            <p class="text-center">
                Вы уверены что хотите удалить "{{ services.activeItem.name }}"?
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
        :show="services.dialogActions.edit">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Редактирование "{{ services.activeItem.name }}"
                </BaseHeading>
            </template>
            <ServicesForm
                :active-item="services.activeItem"
                :con-firm-form="confirmEdit"
                :toggle-cancle="toggleEditAction"
             />
        </BaseDialog>
        <BaseDialog
        :toggle-show="toggleCreateAction"
        :show="services.dialogActions.create">
            <template v-slot:header>
                <BaseHeading centered size="2xl">
                    Создание
                </BaseHeading>
            </template>
            <ServicesForm
                :active-item="services.activeItem"
                :con-firm-form="confirmCreate"
                :toggle-cancle="toggleCreateAction"
             />
        </BaseDialog>
    </div>
</template>

<style scoped>

</style>