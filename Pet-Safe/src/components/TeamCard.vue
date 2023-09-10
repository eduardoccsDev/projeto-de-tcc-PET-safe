<template>
    <div class="team-card">
        <p class="member-name">{{ memberName }}</p>
        <hr>
        <p class="member-description">{{ memberDescription }}</p>
    </div>
</template>

<script setup>
defineProps({
    memberName: String,
    memberDescription: String
})
</script>

<style scoped lang="scss">
.team-card {
    background-color: var(--primary);
    padding: 1em;
    border-radius: 10px;
    border: solid 2px #fff;
    width: 100%;
    min-height: 200px;
    box-shadow: 0px 0px 10px 0px #00000036;
    hr{
        margin-block: 1em;
        border: solid 1px #00000024;
    }
}
</style>