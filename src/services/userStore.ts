import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => {
    return { 
        user: {
            username: '',
            _id: '',
            permissions: [],
            roles: [],
            email: '',
        } 
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    logout(){
        this.user = {
            username: '',
            _id: '',
            permissions: [],
            roles: [],
            email: '',
        } 
    },
    login(data: any){
        this.user = {
            username: data.username,
            _id: data._id,
            permissions: data.permissions,
            roles: data.roles,
            email: data.email,
        } 
    }
  },
})