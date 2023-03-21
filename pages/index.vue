<template>
  <Button @click="getItems" class="tw-text-white">Get items</Button>

  <Menubar :model="items" exact class="tw-m-5" />

  <Accordion class="tw-m-5">
    <AccordionTab header="Select News Outlets">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </AccordionTab>
  </Accordion>
</template>

<script setup>
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

const items = ref([
  {
    label: 'Home',
    to: '/',
    icon: 'pi pi-home',
  }
])



async function getItems() {
  const res = await useFetch('/api/feeds?a=4')
  console.log(res)
}

</script>
