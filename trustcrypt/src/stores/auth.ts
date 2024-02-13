import {defineStore} from "pinia";

interface iAuthStore {
    name: string,
    email: string,
    password: string,
    status: boolean,
}

export const useAuthStore = defineStore('auth', {
    state: (): iAuthStore => ({
        name: '',
        email: '',
        password: '',
        status: false,
    }),
    getters: {},
    actions: {}
})