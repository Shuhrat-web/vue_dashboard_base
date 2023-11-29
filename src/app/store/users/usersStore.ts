import { defineStore } from "pinia";
import {users} from '@lib/db/staticData'
import { ref, computed } from "vue";
import { IDialogActions } from "../lib/types/StoreTypes";
import { useToast } from "vue-toastification";
import { IUser } from "@lib/requests/types/UsersTypes";

export const usersStore = defineStore('users', () => {
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
    const defineUsersJSON = localStorage.getItem('users');
    const defineUsers: IUser[] | [] = defineUsersJSON ? JSON.parse(defineUsersJSON) : [];
    let allUsers = ref<IUser[] | []>(defineUsersJSON ? defineUsers : users)
    const emptyItem:IUser = {
        id: Date.now(),
        firstName: '',
        lastName: '',
        fathersName: '',
        tarif: null,
        msisdn: 0.0000000,
        services: null
    }
    const dialogActions = ref<IDialogActions>({
        delete: false,
        edit: false,
        create: false
    })
    let activeItem = ref<IUser>({
        id: Date.now(),
        firstName: '',
        lastName: '',
        fathersName: '',
        tarif: null,
        msisdn: 0.0000000,
        services: null
    })
    let activeUserId = ref<number>(0)

    /*
        /States
    */
   /*
   
    Getters
   */
    const getallUsers = computed(() => allUsers.value)

    /*
   
    /Getters
   */
    
    const setDialogAction = (name:string,val:boolean) => {
        if(!val) activeItem.value = emptyItem
        dialogActions.value[name as keyof IDialogActions] = val
    }

    const setActiveUser = (id:number) => {
        activeItem.value = allUsers.value.find(el => el.id === id) as IUser;
    }

    const deleteUser = (id: number) => {
        allUsers.value = allUsers.value.filter(el => el.id !== id)
        synUsersWithocalStorage()
        toast.warning('User deleted successfully!', {
            timeout: 2000
        })
    }

    const editUser = (editedUser:IUser) => {
        allUsers.value = allUsers.value.map(el => (el.id === editedUser.id ? {...editedUser} : el));
        synUsersWithocalStorage();
        activeItem.value = emptyItem
        toast.info('User edited successfully!', {
            timeout: 2000
        }) 
    }

    const createUser = (createdUser:IUser) => {
        allUsers.value = [...allUsers.value, createdUser];
        synUsersWithocalStorage();
        toast.success('User created successfully!', {
            timeout: 2000
        })
        activeItem.value = emptyItem
    }

    const synUsersWithocalStorage = () => {
        localStorage.setItem('users',JSON.stringify(allUsers.value))
    }


    return{
        allUsers,
        dialogActions,
        activeUserId,
        getallUsers,
        activeItem,
        setDialogAction,
        setActiveUser,
        deleteUser,
        editUser,
        createUser
    }
})