import { IService } from "../requests/types/ServicesTypes"
import { ITarif } from "../requests/types/TarifsTypes"
import { IUser } from "../requests/types/UsersTypes"

export const services:IService[] = [
    {
        id: 1,
        name: 'Example service',
        price: 10,
        description: 'lorem ipsum dolor sit amet'
    },
    {
        id: 2,
        name: 'Example service 2',
        price: 10,
        description: 'lorem ipsum dolor sit amet 2'
    },
]

export const tarifs:ITarif[] = [
    {
        id: 1,
        name: 'Example tarif',
        price: 5,
        description: 'lorem ipsum dolor sit amet'
    },
    {
        id: 2,
        name: 'Example tarif 2',
        price: 5,
        description: 'lorem ipsum dolor sit amet'
    },
]

export const users:IUser[] = [
    {
        id: 1,
        firstName: 'Shuhrat',
        lastName: 'Safoev',
        fathersName: 'Rahimdzhonovich',
        tarif:  {
            id: 1,
            name: 'Example tarif',
            price: 5,
            description: 'lorem ipsum dolor sit amet'
        },
        msisdn: 955545654,
        services: [
            {
                id: 1,
                name: 'Example service',
                price: 10,
                description: 'lorem ipsum dolor sit amet'
            },
        ]
    },
]