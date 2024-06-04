<script setup lang="ts">

</script>

<template>
    <div class="max-w-[80%] w-[100%] h-[100%] flex items-center justify-around flex-col">
        <div></div>
        <figure class="h-[90px] w-[200px]">
            <img src="../assets/logoke.png" alt="image">
        </figure>
        <div class="w-[100%]">
            <div @click="$emit('about')" class="sm:h-[70px] btn text-[20px] mb-[10px] text-white rounded-[3px] bg-[#01BAF1] w-[100%]">{{  $t("aboutBtn") }}</div>
            <div @click="$emit('prod')" class="sm:h-[70px] btn text-[20px] mb-[10px] rounded-[3px] bg-[white] w-[100%]">{{  $t("products") }}</div>
            <div @click="$emit('gal')" class="sm:h-[70px] btn text-[20px] mb-[10px] rounded-[3px] bg-[white] w-[100%]">{{  $t("gallery") }}</div>
        </div>
    </div>
</template>



<style></style>