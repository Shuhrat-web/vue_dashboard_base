<script setup lang="ts">
import { Ref, reactive,ref,watch } from 'vue';
import BaseTextField from '@components/Ui/TextFields/BaseTextField.vue'
import BaseButton from '@components/Ui/Buttons/BaseButton.vue'
import { usersStore } from '@store/users/usersStore';
import { IUserFormProps } from '../../lib/types/UsersPageTypes';
import Multiselect from '@vueform/multiselect'
import { servicesStore } from '@/app/store/services/servicesStore';
import { tarifsStore } from '@/app/store/tarifs/tarifsStore';
import { IUser } from '@/app/lib/requests/types/UsersTypes';
import { IService } from '@/app/lib/requests/types/ServicesTypes';

const users = usersStore() 
const services = servicesStore()
const tarifs = tarifsStore()

const props = defineProps<IUserFormProps>()
const servicesOptions = services.getAllServices.map(el => {
    return {
        value: el.id,
        label: el.name
    }
}) 
const activeServices:Ref<number[]> = ref([])
const tarifsOptions = tarifs.getAllTarifs.map(el => {
    return {
        value: el.id,
        label: el.name
    }
}) 
const activeTarif = ref<number>(0)

let activeItem = reactive(props.activeItem ? props.activeItem :
    {
        id: 0,
        firstName: '',
        lastName: '',
        fathersName: '',
        tarif: null,
        msisdn: 0.0000000,
        services: null
    }
)

watch(() => users.activeItem, (item:IUser) => {
    const editableItem = JSON.parse(JSON.stringify(item)) 
    activeItem = editableItem
    if(item.tarif) activeTarif.value = item.tarif.id
    if(item.services) activeServices.value = item.services.map(el => el.id)
})

const submitForm = () => {
    activeItem.tarif = tarifs.getAllTarifs?.find(tarif => tarif.id == activeTarif.value)
    let selectedServices:IService[] | [] = []
    services.getAllServices?.map((service:IService) => {
        if(activeServices.value.includes(service.id))selectedServices = [...selectedServices, service]
    })
    activeItem.services = selectedServices
    props.conFirmForm(activeItem)
}


</script>
<template>
    <form @submit.prevent="submitForm()">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <BaseTextField 
                required
                label="First Name" 
                v-model="activeItem.firstName" />
                <BaseTextField 
                required
                label="Last name" 
                v-model="activeItem.lastName" />
                <BaseTextField 
                required
                label="Father's name"
                v-model="activeItem.fathersName" />
                <BaseTextField 
                required
                label="MSISDN"
                textfield-type="number"
                v-model="activeItem.msisdn" />
                <div class="flex flex-col">
                    <label class="text-md font-medium mb-1">
                        Services
                    </label>
                    <Multiselect
                    v-model="activeServices"
                    required
                    :classes="{
                        containerActive: '',
                        tag: 'bg-primary/60 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap min-w-0 rtl:pl-0 rtl:pr-2 rtl:mr-0 rtl:ml-1'
                    }"
                    mode="tags"
                    :options="servicesOptions"
                    />
                </div>
                <div class="flex flex-col">
                    <label class="text-md font-medium mb-1">
                        Tarifs
                    </label>
                    <Multiselect
                    required
                    v-model="activeTarif"
                    :classes="{
                        containerActive: '',
                        tag: 'bg-primary/60 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap min-w-0 rtl:pl-0 rtl:pr-2 rtl:mr-0 rtl:ml-1'
                    }"
                    :options="tarifsOptions"
                    />
                </div>
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
<style src="@vueform/multiselect/themes/default.css"></style>
