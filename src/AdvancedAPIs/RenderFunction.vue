<script setup>
import MyRenderBox from '@/components/RenderComponent.vue'
</script>
<template>
    <MyRenderBox :is-visible="true" extra-class="my-style">
        <p>Saya adalah konten slot yang akan di-clone</p>
    </MyRenderBox>
</template>