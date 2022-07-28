<script setup lang="ts">

const route = useRoute();
console.log("route", route.params);

</script>

<template>
    <div class="flex flex-col items-center justify-center h-full space-y-4 text-xl">
        <NuxtLink to="/" class="bg-green-500 rounded-lg p-2 text-2xl font-semibold hover:bg-green-700 ">Home</NuxtLink>

        <h1>This route {{ route.params.id }}</h1>
    </div>
</template>