<template>
    <section class="hero-section" :style="{ 'background-image': 'url(' + heroImg + ')' }">
        <div class="hero-section__content">
            <div class="hero-section__txt">
                <div v-if="heroTittle" class="hero-section__tittle">
                    {{ heroTittle }}
                </div>
                <div v-if="heroDescription" class="hero-section__description">
                    {{ heroDescription }}
                </div>
            </div>
            <router-link v-if="heroBtnLink" :to="heroBtnLink" class="hero-section__btn">{{ heroBtnText }}</router-link>
        </div>
    </section>
</template>
<script setup>
defineProps({
    heroTittle: {
        type: String
    },
    heroDescription: {
        type: String
    },
    heroBtnText: {
        type: String
    },
    heroBtnLink: {
        type: String,
        default: "#"
    },
    heroImg: {
        type: String,
        default: "#"
    },
});
</script>
<style scoped lang="scss">
.hero-section {
    height: 300px;
    display: flex;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    box-shadow: inset 0 0 0 2000px #00634e51;
    margin-bottom: 40px;

    @media(max-width:668px) {
        height: 200px;
    }

    &__content {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: #1a1a1abb;
        color: #fff;
        padding: 15px 20px;
        border-radius: 0px 20px 20px 0px;

        @media(max-width:668px) {
            padding: 5px 10px;
    }
    }

    &__tittle {
        font-size: 26px;

        @media(max-width:668px) {
            font-size: 20px;
        }
    }

    &__description {
        font-size: 14px;
    }

    &__btn {
        margin-top: 10px;
        text-decoration: none;
        background-color: var(--primary);
        padding: 10px 15px;
        color: var(--dark);
        border-radius: 5px;
        transition: .5s;
        width: fit-content;

        &:hover {
            transform: scale(1.05);
        }

        @media(max-width:668px) {
            padding: 2px 5px;
            font-size: 14px;
            margin-bottom: 5px;
            margin-top: 5px;
        }
    }
}
</style>