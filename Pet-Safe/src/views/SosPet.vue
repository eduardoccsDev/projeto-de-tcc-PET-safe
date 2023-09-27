<template>
    <div class="container">
        <section class="page__title" id="topo">
            <h1>Primeiros socorros</h1>
        </section>
        <hr>
        <section class="page__content">
            <div :class="retratil">
                <div class="controles">
                    <p v-if="!isHidden">Ocultar mensagem</p>
                    <p v-else>Exibir mensagem</p>
                    <button @click="handleExpanded"></button>
                </div>
                <FixedAlert :have-icon="true" icon="fa-solid fa-user-nurse" alert-tittle="Pet Safe"
                    alert-text="O projeto procura auxiliar os tutores a entenderem e administrarem os primeiros socorros básicos em casos de intoxicação, envenenamento, desmaios, vômitos, febres, dores e traumas, até que o atendimento veterinário profissional possa ser obtido. O sistema não substitui a importância de buscar ajuda de um veterinário, mas atua como uma ferramenta para instruir os responsáveis sobre como agir em situações básicas." />
            </div>
            <div class="guiaContainer">
                <h2>Guia de informações</h2>
                <div class="guia">
                    <a href="#imobilizacao">Imobilização</a>
                    <a href="#imobilizacao">Imobilização</a>
                    <a href="#imobilizacao">Imobilização</a>
                </div>
            </div>
            <div id="imobilizacao" class="sectionGuia">
                <div class="controleGuia">
                    <h3>Imobilização</h3>
                    <a href="#topo">Voltar ao início</a>
                </div>
                <div class="cardGuia">
                    <img src="../assets/images/guias/imobilizacao-1.png" alt="Imobilização" class="imgCard">
                    <h4>Cão de grande porte:</h4>
                    <p class="instrucaoGuia">Envolva o pescoço do animal com o seu braço o máximo possível, mantendo a outra mão livre para tomar outra ação se necessário.</p>
                    <p class="direitosGuia">Font: Primeiros socorros para cães <br> Por BRUCE FOGLE</p>
                </div>
                <div class="cardGuia">
                    <img src="../assets/images/guias/imobilizacao-1.png" alt="Imobilização" class="imgCard">
                    <h4>Cão de pequeno porte:</h4>
                    <p class="instrucaoGuia">Agarre o focinho do cão, de forma suave e firme. Faça um pouco de pressão contra o corpo dele com o cotovelo de seu braço livre enquanto segue com a imobilização.</p>
                    <p class="direitosGuia">Font: Primeiros socorros para cães <br> Por BRUCE FOGLE</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import FixedAlert from '../components/FixedAlert.vue';
import { ref, computed } from "vue";

const isHidden = ref(false);
function handleExpanded() {
    isHidden.value = !isHidden.value;
};

const retratil = computed(() => {
    return {
        'retratil': true,
        'msg-hidden': isHidden.value
    };
});
</script>
<style lang="scss" scoped>
.retratil {
    display: flex;
    flex-wrap: wrap;
    transition: .5s;
    height: fit-content;

    button {
        &::after {
            content: "Exibir -";
        }
    }

    &.msg-hidden {
        height: 50px;
        overflow: hidden;
        transition: 0.5s;
        margin-bottom: 10px;

    button {
        &::after {
            content: "Exibir +";
        }
    }
}

.controles {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;

    p {
        margin: 0 !important;
    }

    button {
        background-color: var(--primary);
        color: var(--dark);
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 16px;
    }
}
}

.guiaContainer {
    padding: 20px;
    background-color: var(--primary);
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;

    h2 {
        margin-bottom: 20px;
    }

    .guia {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        justify-content: center;

        a {
            text-decoration: none;
            color: var(--dark);
            background-color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            transition: .5s;

            &:hover {
                transform: scale(1.05);
            }
        }
    }
}

.sectionGuia{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .controleGuia{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        a{
            text-decoration: none;
            color: var(--dark);
            &:hover{
                text-decoration: underline;
            }
        }
    }
    .cardGuia{
        padding: 10px;
        border-radius: 10px;
        background-color: var(--primary-opacity);
        border: solid 2px var(--primary);
        width: 300px;
        .imgCard{
            width: 100%;
            border-radius: 5px;
        }
        h4{
            padding-bottom: 5px;
            border-bottom: solid 2px #00000019;
            margin-bottom: 5px;
        }
        .instrucaoGuia{
            margin-bottom: 5px !important;
        }
        .direitosGuia{
            font-size: 12px;
            font-style: italic;
        }
    }
}
</style>