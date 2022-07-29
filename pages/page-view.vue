<script setup lang="ts">
const { data } = await useFetch("/api/page-view");
const time = useTimeAgo(computed(() => data.value.startAt));
const pageView = data.value.pageView;
const jsonPlaceHolder = data.value.jsonPlaceHolder;
const { userId, title } = jsonPlaceHolder;
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
      <NuxtLink to="/counter"
        class="bg-green-500 text-white rounded-lg p-2 text-2xl font-semibold hover:bg-green-700 gap-2">Counter
      </NuxtLink>
    </div>
    <div class="flex h-full w-full justify-center items-center">
      <div class="flex flex-col flex-wrap md:flex-nowrap justify-center items-center bg-gray-400 h-52 w-full rounded-xl gap-2 ">
        <div class="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-3">
          <p class="font-semibold">JSON: <span class="text-2xl font-bold">{{ title }}</span></p>
        </div>
        <div class="flex-row flex gap-2">
          <p class="font-semibold text-xs text-white">Page View : {{ pageView }}</p>
          <p class=" text-xs text-white">( {{ time }} )</p>
        </div>
      </div>
    </div>
  </div>



</template>