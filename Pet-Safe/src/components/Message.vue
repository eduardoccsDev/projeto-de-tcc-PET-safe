<template>
    <transition name="slide">
        <div v-if="showMsg" class="msg__container">
            <div class="msg__text" :class="{ 'msg__marquee': isMessageTooLong }">
                <p  :class="isMobileClass">{{ msgText }}</p>
            </div>
            <div class="msg__btns">
                <a v-if="isAction" class="msg__actionBtn" :href="actionLink">Saiba mais</a>
                <button @click="closeMsg" class="msg__close">X</button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { onBeforeUnmount, computed } from 'vue';

defineProps({
    msgText: {
        type: String,
        default: "{ Mensagem... }"
    },
    isAction: {
        type: Boolean,
        default: false
    },
    actionLink: {
        type: String,
        default: "#"
    }
});

const isMobile = ref(false);
const { emit } = defineEmits(['close']);
const showMsg = ref(false);
const isMessageTooLong = ref(false);

function closeMsg() {
    showMsg.value = false;
    emit('close');
}

const updateIsMobile = (mediaQuery) => {
    isMobile.value = mediaQuery.matches;
};

const mobileMediaQuery = window.matchMedia("(max-width: 668px)");
mobileMediaQuery.addEventListener('change', updateIsMobile);
updateIsMobile(mobileMediaQuery);

onBeforeUnmount(() => {
    mobileMediaQuery.removeEventListener('change', updateIsMobile);
});

const isMobileClass = computed(() => {
    return {
        'msg__marquee-text': isMobile.value,
    };
});

// Verifique o armazenamento local para ver se a mensagem já foi exibida antes
const hasMessageBeenDisplayed = localStorage.getItem('messageDisplayed');

if (!hasMessageBeenDisplayed) {
    showMsg.value = true;
    // Marque a mensagem como exibida no armazenamento local
    localStorage.setItem('messageDisplayed', 'true');
}

onMounted(() => {
    // Verifique se o texto da mensagem é muito longo
    const messageElement = document.querySelector('.msg__text');
    if (messageElement && messageElement.offsetWidth < messageElement.scrollWidth) {
        isMessageTooLong.value = true;
    }
});
</script>

<style scoped lang="scss">
.msg {
    &__container {
        background-color: var(--dark-alt);
        display: flex;
        justify-content: space-between;
        padding: 1em;
        align-items: center;
        border-bottom: solid 3px var(--primary);
        z-index: 2;

        @media(max-width:668px) {
            padding-inline-start: 5em;
            font-size: 14px;
            padding-inline-end: 0em
        }
    }

    &__text {
        color: #fff;
        width: 100%;

        @media(max-width:668px) {
            width: 240px;
        }
    }

    &__btns {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        @media(max-width:668px){
            background-color: var(--dark-alt);
            z-index: 1;
            padding-inline-end: .5em;
            width: 35%;
        }
    }

    &__actionBtn {
        background-color: var(--primary);
        color: var(--dark);
        padding: .5em .3em;
        border-radius: 5px;
        transition: .5s;
        text-decoration: none;

        &:hover {
            transform: scale(1.05);
        }

        @media(max-width:668px) {
            padding: 0.2em 0.3em;
        }
    }

    &__close {
        color: #fff;
        font-size: 17px;
        background-color: rgb(243, 88, 88);
        padding-inline: .4em;
        border-radius: 100%;
        transition: .5s;
        margin-left: 1em;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 10px 0px rgba(243, 88, 88, 0.623);
        }

        @media(max-width:668px) {
            margin-left: .8em;
        }
    }

    &__marquee-container {
        overflow: hidden;
        white-space: nowrap;
    }

    &__marquee-text {
        animation: marquee 15s linear infinite;
        @media(max-width:668px){
            display: block ruby;
        }
    }
}

@keyframes marquee {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>