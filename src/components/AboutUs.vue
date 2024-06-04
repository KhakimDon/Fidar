<script setup lang="ts">

</script>

<template>
    <div class="max-w-[80%] pt-[20px] text-justify text-[14px] w-[100%] h-[100%] flex items-center flex-col">
      <h1 class="text-[27px] sm:text-[30px] sm:font-[700] font-[600] mb-[10px]">{{ $t("aboutBtn") }}</h1>
      <p class="pl-[25px] text-[17px] text-left smm sm:pl-[50px] sm:text-[25px] sm:font-[600] sm:text-white sm:mt-[20px] sm:leading-[45px]">
        {{$t("about")}}
      </p>
    </div>
</template>



<style>
.smm{
  word-wrap: break-word !important;
  word-break: break-all !important;
}
</style>