
<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const counter = ref(0);



</script>

<template>
  <div class="h-full w-full">
    <div class="flex flex-row ">
      <NuxtLink to="/"
        class="mr-4 bg-green-500 text-white rounded-lg p-2 text-2xl font-semibold hover:bg-green-700 gap-2">Home
      </NuxtLink>
      <NuxtLink to="/search"
        class="mr-4 bg-green-500 text-white rounded-lg p-2 text-2xl font-semibold hover:bg-green-700 gap-2">Search
      </NuxtLink>
      <NuxtLink to="/page-view"
        class="bg-green-500 text-white rounded-lg p-2 text-2xl font-semibold hover:bg-green-700 gap-2">Page View
      </NuxtLink>
    </div>
    <div class="flex flex-col items-center justify-center h-full space-y-4">
      <p class=" text-xl">Here's a counter:</p>
      <div class="flex items-center justify-center">

        <button @click="counter++" class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
          +
        </button>
        <span class="mx-2">{{ counter }}</span>
        <button @click="counter--" class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
          -
        </button>
      </div>
    </div>
  </div>

</template>
