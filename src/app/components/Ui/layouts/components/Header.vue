<template>
    <div class="container__base py-5  border-b border-secondary bg-white px-4 shadow-sm flex justify-between mb-5">
        <div class="w-60">
            <SearchBar />
        </div>
        <div class="flex gap-5 items-center">
            <NamedAvatar color="primary" full-name="Shuhrat Safoev" />
           <BaseHeading color="secondary">
                shukhrat.safoev@mail.ru 
            </BaseHeading> 
            <BaseButton flat>
                Logout
            </BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from '../../Buttons/BaseButton.vue';
import BaseHeading from '../../Headings/BaseHeading.vue';
import SearchBar from './SearchBar.vue';
import NamedAvatar from '../../Avatar/NamedAvatar.vue'


</script>

<style scoped>

</style>