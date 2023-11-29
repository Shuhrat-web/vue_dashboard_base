<script setup lang="ts">
import BaseButton from '../../Buttons/BaseButton.vue';
import BaseHeading from '../../Headings/BaseHeading.vue';
import SearchBar from './SearchBar.vue';
import NamedAvatar from '../../Avatar/NamedAvatar.vue'
import { IHeaderProps } from '../lib/types/LayoutTypes';

defineProps<IHeaderProps>()

</script>
<template>
    <div class="py-5 border-b border-secondary bg-white px-4 shadow-sm mb-5">
        <div class="container__base flex justify-between ">
            <div class="w-60 flex gap-2">
                <BaseButton @click="toggleShowHeader()" size="none" type="text">
                    <v-icon :name=" !show ? 'hi-menu' : 'hi-menu-alt-3'" />
                </BaseButton>
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
    </div>
</template>


<style scoped>

</style>