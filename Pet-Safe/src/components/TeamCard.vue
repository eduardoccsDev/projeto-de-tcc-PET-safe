<template>
    <div :class="teamCardClasses">
        <p class="member-name">
            <i class="fa-solid fa-user-large"></i> - {{ memberName }}
            <button @click="handleExpanded" v-if="isMobile"></button>
        </p>
        <hr>
        <p class="member-description">
            <i class="fa-solid fa-message"></i> - {{ memberDescription }}
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { defineProps } from 'vue';

defineProps({
    memberName: {
        type: String,
        default: "{ Nome }"
    },
    memberDescription: {
        type: String,
        default: "{ Descrição }"
    }
});

const isMobile = ref(false);
const isExpanded = ref(false);

const updateIsMobile = (mediaQuery) => {
    isMobile.value = mediaQuery.matches;
};

const mobileMediaQuery = window.matchMedia("(max-width: 668px)");
mobileMediaQuery.addEventListener('change', updateIsMobile);
updateIsMobile(mobileMediaQuery);

onBeforeUnmount(() => {
    mobileMediaQuery.removeEventListener('change', updateIsMobile);
});

function handleExpanded() {
    isExpanded.value = !isExpanded.value;
};

const teamCardClasses = computed(() => {
    return {
        'team-card': true,
        'mobile-card': isMobile.value,
        'card-expanded': isExpanded.value
    };
});
</script>

<style scoped lang="scss">
.team-card {
    background-color: var(--primary);
    padding: 1em;
    border-radius: 10px;
    border: solid 2px #fff;
    width: 100%;
    height: 200px;
    box-shadow: 0px 0px 10px 0px #00000036;

    &.mobile-card {
        height: 55px;
        overflow: hidden;
        transition: .5s;

        &.card-expanded {
            height: 200px;

            .member-name {
                button {
                    &::after {
                        content: "-"
                    }
                }
            }
        }

        .member-name {
            button {
                &::after {
                    content: "+";
                }

                display: block;
                float: inline-end;
                background-color: var(--dark);
                color: #fff;
                padding: .1em .5em;
                border-radius: 100%;
                cursor: pointer;
            }
        }
    }

    i {
        background-color: var(--dark);
        color: #fff;
        padding: .3em;
        text-align: center;
        border-radius: 100%;

    }

    hr {
        margin-block: 1em;
        border: solid 1px #00000024;
    }
}
</style>