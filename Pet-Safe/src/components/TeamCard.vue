<template>
  <div :class="teamCardClasses">
    <p class="member-name">
      <i class="fa-solid fa-user-large"></i> - {{ memberName }}
      <button @click="handleExpanded" v-if="isMobile"></button>
    </p>
    <hr />
    <div class="member-informations">
      <p class="member-description">
        {{ memberDescription }}
      </p>
      <!-- <p class="member-function">Função: Lorem ipsum</p> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, computed } from "vue";

defineProps({
  memberName: {
    type: String,
    default: "{ Nome }",
  },
  memberDescription: {
    type: String,
    default: "{ Descrição }",
  },
});

const isMobile = ref(false);
const isExpanded = ref(false);

const updateIsMobile = (mediaQuery) => {
  isMobile.value = mediaQuery.matches;
};

const mobileMediaQuery = window.matchMedia("(max-width: 668px)");
mobileMediaQuery.addEventListener("change", updateIsMobile);
updateIsMobile(mobileMediaQuery);

onBeforeUnmount(() => {
  mobileMediaQuery.removeEventListener("change", updateIsMobile);
});

function handleExpanded() {
  isExpanded.value = !isExpanded.value;
}

const teamCardClasses = computed(() => {
  return {
    "team-card": true,
    "mobile-card": isMobile.value,
    "card-expanded": isExpanded.value,
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
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
  .member-informations {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .member-description {
    font-size: 14px;
    margin-bottom: 0px !important;
  }

  .member-function {
    font-style: italic;
    font-size: 14px;
    margin-bottom: 0px !important;
  }

  &.mobile-card {
    height: 55px;
    overflow: hidden;
    transition: 0.5s;

    &:hover {
      transform: scale(1);
    }

    &.card-expanded {
      height: 200px;

      .member-name {
        button {
          &::after {
            content: "Exibir -";
            padding-inline-end: 1px;
          }
        }
      }
    }

    .member-name {
      button {
        &::after {
          content: "Exibir +";
        }

        display: block;
        float: inline-end;
        background-color: var(--dark);
        color: #fff;
        padding: 0.1em 0.5em;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }

  i {
    background-color: var(--dark);
    color: #fff;
    padding: 5px;
    text-align: center;
    border-radius: 100%;
  }
}
</style>
