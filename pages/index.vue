<template>
    <div>
         {{ name }}
    </div>
</template>

<script setup>
import { useGlobalStore } from "@/store/globalStore";

const store = useGlobalStore()

const name = store.fullName
</script>