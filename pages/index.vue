<script setup lang="ts">

const pages = ref();

onMounted(async () => {
    const { result } : any = await $fetch('/api/firestore/query?col=pages');
    pages.value = result;
});

// useIntervalFn(async () => {
//     if(isProxyEmpty(pages.value)) {
//         const { result } : any = await $fetch('/api/firestore/query?col=pages');
//         pages.value = result;
//     } else {
//         pages.value = [];
//     }
// }, 5000);


</script>
<template>
    <div class="h-full w-full">
        <div class="flex flex-row ">
            <NuxtLink to="/search"
                class="mr-4 bg-green-500 text-white  rounded-lg p-2 text-2xl font-semibold hover:bg-green-700 gap-2">
                Search</NuxtLink>
            <NuxtLink to="/page-view"
                class="mr-4 bg-green-500 text-white rounded-lg p-2 text-2xl font-semibold hover:bg-green-700 gap-2">
                Page View</NuxtLink>
            <NuxtLink to="/counter"
                class="bg-green-500 text-white rounded-lg p-2 text-2xl font-semibold hover:bg-green-700 gap-2">
                Counter</NuxtLink>
        </div>
        <div class="flex flex-col md:flex-row md:flex-nowrap h-full w-full justify-center items-center gap-2">
            <div v-for="page in pages" class="card w-96 bg-green-600 text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">{{ page.title }}</h2>
                    <p>{{ page.description }}</p>
                    <div class="card-actions justify-end">
                        <button class="btn">Visit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
