<script setup lang="ts">

</script>

<template>
    <div class="max-w-[80%] w-[100%] h-[100%] flex items-center justify-around flex-col">
        <div></div>
        <figure class="h-[90px] w-[200px]">
            <img src="../assets/logoke.png" alt="image">
        </figure>
        <div class="w-[100%]">
            <div @click="$emit('about')" class="btn text-[20px] mb-[10px] text-white rounded-[3px] bg-[#01BAF1] w-[100%]">О нас</div>
            <div @click="$emit('prod')" class="btn text-[20px] mb-[10px] rounded-[3px] bg-[white] w-[100%]">Продукты</div>
            <div @click="$emit('gal')" class="btn text-[20px] mb-[10px] rounded-[3px] bg-[white] w-[100%]">Галерея</div>
        </div>
    </div>
</template>



<style></style>