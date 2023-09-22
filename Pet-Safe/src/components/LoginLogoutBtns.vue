<template>
    <div class="btnsContainer">
        <router-link to="/login-registro" class="buttonLink">
            <span class="icons">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </span>
            <span class="text">
                Login/Registro
            </span>
        </router-link>
    </div>
</template>
<script setup></script>
<style scoped lang="scss">
.btnsContainer {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    padding: 25px;
    z-index: 1;

    a {
        background-color: var(--primary);
        color: var(--dark);
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 10px;
        transition: .5s;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 10px 0px #00000052;
        }
    }
}
</style>