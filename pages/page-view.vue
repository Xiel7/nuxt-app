<script setup lang="ts">
const {data} = await useFetch("/api/page-view");
const time = useTimeAgo(computed(() => data.value.startAt));
const pageView = data.value.pageView;
const jsonPlaceHolder = data.value.jsonPlaceHolder;
const {userId, title} = jsonPlaceHolder;
</script>

<template>

<div class="flex h-full w-full justify-center items-center">

    <div class="flex flex-row flex-wrap justify-center items-center bg-gray-400 h-52 w-full rounded-xl gap-2 ">
        <div class="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-3">
            <p class="font-semibold">JSON: <span class="text-2xl font-bold">{{ title }}</span></p>
        </div>
        <div class="flex-row flex gap-2">
            <p class="font-semibold text-xs ">Page View : {{ pageView }}</p>
            <p class=" text-xs">( {{ time }} )</p>
        </div>
    </div>
</div>


</template>