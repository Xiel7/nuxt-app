<template>
    
    <div class="flex flex-row flex-wrap md:flex-nowrap h-full w-full justify-center items-center gap-2">
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
</template>

<script setup>

const pages = ref();

onMounted( async () => {
    const { result } = await $fetch('/api/firestore/query?col=pages');
    pages.value = result;
    console.log(result)
})
</script>