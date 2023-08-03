import { defineStore } from 'pinia'

export const useUserStore = defineStore('userAuth', {
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
  persist: true,
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