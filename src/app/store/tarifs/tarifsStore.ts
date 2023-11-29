import { defineStore } from "pinia";
import {tarifs} from '@lib/db/staticData'
import { ref, computed } from "vue";
import { ITarif } from "@/app/lib/requests/types/TarifsTypes";
import { IDialogActions } from "../lib/types/StoreTypes";
import { useToast } from "vue-toastification";

export const tarifsStore = defineStore('tarifs', () => {
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
    const defineTarifsJSON = localStorage.getItem('tarifs');
    const defineTarifs: ITarif[] | [] = defineTarifsJSON ? JSON.parse(defineTarifsJSON) : [];
    let allTarifs = ref<ITarif[] | []>(defineTarifsJSON ? defineTarifs : tarifs)
    const emptyItem:ITarif = {
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
    let activeItem = ref<ITarif>({
        id: Date.now(),
        name: '',
        price: 0,
        description: ''
    })
    let activeTarifId = ref<number>(0)

    /*
        /States
    */
   /*
   
    Getters
   */
    const getAllTarifs = computed(() => allTarifs.value)

    /*
   
    /Getters
   */
    
    const setDialogAction = (name:string,val:boolean) => {
        if(!val) activeItem.value = emptyItem
        dialogActions.value[name as keyof IDialogActions] = val
    }

    const setActiveTarif = (id:number) => {
        activeItem.value = allTarifs.value.find(el => el.id === id) as ITarif;
    }

    const deleteTarif = (id: number) => {
        allTarifs.value = allTarifs.value.filter(el => el.id !== id)
        synTarifsWithocalStorage()
        toast.error('Tarif deleted successfully!', {
            timeout: 2000
        })
    }

    const editTarif = (editedTarif:ITarif) => {
        allTarifs.value = allTarifs.value.map(el => (el.id === editedTarif.id ? {...editedTarif} : el));
        synTarifsWithocalStorage();
        activeItem.value = emptyItem
        toast.info('Tarif edited successfully!', {
            timeout: 2000
        }) 
    }

    const createTarif = (createdTarif:ITarif) => {
        allTarifs.value = [...allTarifs.value, createdTarif];
        synTarifsWithocalStorage();
        toast.success('Tarif created successfully!', {
            timeout: 2000
        })
        activeItem.value = emptyItem
    }

    const synTarifsWithocalStorage = () => {
        localStorage.setItem('tarifs',JSON.stringify(allTarifs.value))
    }


    return{
        allTarifs,
        dialogActions,
        activeTarifId,
        getAllTarifs,
        activeItem,
        setDialogAction,
        setActiveTarif,
        deleteTarif,
        editTarif,
        createTarif
    }
})