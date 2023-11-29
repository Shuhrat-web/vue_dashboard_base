import { defineStore } from "pinia";
import {services} from '@lib/db/staticData'
import { ref, computed } from "vue";;
import { IDialogActions } from "../lib/types/StoreTypes";
import { useToast } from "vue-toastification";
import { IService } from "@/app/lib/requests/types/ServicesTypes";

export const servicesStore = defineStore('services', () => {
    /*
        hooks
    */
    const toast = useToast();

    /*
        /hooks
    */
    /*
        States
    */
    const defineServicesJSON = localStorage.getItem('services');
    const defineServices: IService[] | [] = defineServicesJSON ? JSON.parse(defineServicesJSON) : [];
    let allServices = ref<IService[] | []>(defineServices.length !== 0 ? defineServices : services)
    const emptyItem:IService = {
        id: Date.now(),
        name: '',
        price: 0,
        description: ''
    }
    const dialogActions = ref<IDialogActions>({
        delete: false,
        edit: false,
        create: false
    })
    let activeItem = ref<IService>({
        id: Date.now(),
        name: '',
        price: 0,
        description: ''
    })
    let activeServiceId = ref<number>(0)

    /*
        /States
    */
   /*
   
    Getters
   */
    const getAllServices = computed(() => allServices.value)

    /*
   
    /Getters
   */
    
    const setDialogAction = (name:string,val:boolean) => {
        if(!val) activeItem.value = emptyItem
        dialogActions.value[name as keyof IDialogActions] = val
    }

    const setActiveService = (id:number) => {
        activeItem.value = allServices.value.find(el => el.id === id) as IService;
    }

    const deleteService = (id: number) => {
        allServices.value = allServices.value.filter(el => el.id !== id)
        synServicesWithocalStorage()
        toast.error('Service deleted succesessfully!', {
            timeout: 2000
        })
    }

    const editService = (editedService:IService) => {
        allServices.value = allServices.value.map(el => (el.id === editedService.id ? {...editedService} : el));
        synServicesWithocalStorage();
        activeItem.value = emptyItem
        toast.info('Service edited successfully!', {
            timeout: 2000
        }) 
    }

    const createService = (createdServicef:IService) => {
        allServices.value = [...allServices.value, createdServicef];
        synServicesWithocalStorage();
        toast.success('Service created successfully!', {
            timeout: 2000
        })
    }

    const synServicesWithocalStorage = () => {
        localStorage.setItem('services',JSON.stringify(allServices.value))
    }


    return{
        allServices,
        dialogActions,
        activeServiceId,
        getAllServices,
        activeItem,
        setDialogAction,
        setActiveService,
        deleteService,
        editService,
        createService
    }
})