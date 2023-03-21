import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useGlobalStore = defineStore('useGlobalStore', () => {

    // State properties
    const firstName = ref('john')
    const lastName = ref('Smith')

    // Getters
    const fullName = computed(() => `${firstName.value} ${lastName.value}`)

    // Actions
    function rename(name) {
        firstName.value = name
    }
  
    return {
        firstName,
        lastName,
        fullName,
        rename,
    }
})