<template>
    <div>
         {{ date }}
    </div>
    <Calendar v-model="date" showTime/>
</template>

<script setup>
import { useGlobalStore } from "@/store/globalStore";
import Calendar from 'primevue/calendar';

const store = useGlobalStore()
const name = store.fullName
const date = ref(null)
</script>