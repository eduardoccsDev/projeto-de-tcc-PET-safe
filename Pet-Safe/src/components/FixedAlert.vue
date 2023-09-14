<template>
    <section class="fixed-alert">
        <div class="fixed-alert__tittle-container">
            <div v-if="haveIcon" class="icon">
                <i :class="icon"></i>
            </div>
            <h3 class="fixed-alert__tittle">{{ alertTittle }}</h3>
        </div>
        <hr>
        <p class="fixed-alert__text">{{ alertText }}</p>
    </section>
</template>
<script setup>
defineProps({
    alertText: {
        type: String,
        default: "{ Mensagem... }"
    },
    alertTittle: {
        type: String,
        default: "{ Título... }"
    },
    icon: {
        type: String,
    },
    haveIcon: {
        type: Boolean,
        default: false
    }
});
</script>
<style scoped lang="scss">
.fixed-alert {
    background-color: var(--primary-opacity);
    border-radius: 10px;
    border: solid 2px var(--primary);
    padding: 20px;
    margin-block: 20px;
    &__text{
        @media(max-width:668px){
            font-size: 14px;
        }
    }

    &__tittle-container {
        display: flex;
        align-items: center;
        gap: 10px;
        .icon{
            text-align: center;
            i{
                background-color: var(--dark);
                color: #fff;
                font-size: 20px;
                width: 32px;
                padding: 5px;
                border-radius: 100%;
            }
        }
    }

}
</style>