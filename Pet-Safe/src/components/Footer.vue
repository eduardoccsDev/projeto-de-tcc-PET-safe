<template>
    <footer>
        <div class="container">
            <section class="content__footer">
                <p>Lorem ipsum dolor lorem - Lorem ipsum dolor lorem - Lorem ipsum dolor lorem</p>
            </section>
            <section class="copyright">
                Todos os direitos © reservados - Pet Safe
            </section>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
    footer {
        background-color: var(--dark-alt);
        text-align: center;
        display: flex;
        padding-block: 20px;
        .container{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            .content{
                &__footer{
                    color: #fff;
                }
            }
            .copyright{
                color: var(--primary);
            }
        }
    }
</style>