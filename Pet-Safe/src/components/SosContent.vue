<template>
  <div class="accordion-item" id="kit-sos">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="false"
        aria-controls="collapseOne"
      >
        <i class="fa-solid fa-briefcase-medical"></i>Kit de primeiros socorros
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <div class="row">
          <div class="col-md-6">
            <ul class="list-group">
              <li class="list-group-item">
                Compressas de gaze (2 a 4 embalagens pequenas) para limpar e proteger os
                ferimentos.
              </li>
              <li class="list-group-item">
                Rolos de atadura/faixa crepe (2 rolos de tamanho médio) para fixar
                curativos e talas. Pode ser usada também para amordaçar o cão.
              </li>
              <li class="list-group-item">
                Esparadrapo micropore (1 rolo médio) para fixar a faixa crepe em curativos
                ou imobilizar as patas em gatos que arranham.
              </li>
              <li class="list-group-item">
                Tesoura pequena com ponta arredondada; para cortar pelos e a faixa crepe.
              </li>
              <li class="list-group-item">
                Antisséptico (Líquido de Dakin, Água oxigenada 10 volumes ou Iodo
                Povidine) para desinfetar ferimentos, cortes e outras lesões da pele.
              </li>
              <li class="list-group-item">
                Soro fisiológico (4 ampolas de 10 ml cada) para limpar ferimentos e
                queimaduras.
              </li>
              <li class="list-group-item">
                Pomada antibiótica; para evitar infecções em cortes e feridas.
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list-group">
              <li class="list-group-item">
                Luvas (1 par) para proteger as mãos de quem irá socorrer o pet.
              </li>
              <li class="list-group-item">
                Seringa de 10 ml; para irrigar ferimentos com antissépticos e aspirar
                secreções.
              </li>
              <li class="list-group-item">
                Termômetro para avaliar a temperatura retal.
              </li>
              <li class="list-group-item">
                Pinça, para remover espinhos e larvas da pele ou objetos estranhos da
                garganta.
              </li>
              <li class="list-group-item">
                Álcool antisséptico (1 frasco pequeno) para desinfetar as mãos de quem irá
                socorrer o pet e materiais metálicos (pinça e tesoura).
              </li>
              <li class="list-group-item">
                Focinheira de nylon (opcional) e uma toalha para evitar mordidas.
              </li>
              <li class="list-group-item">
                Lanterna pequena (opcional) para observar cavidades e avaliar o reflexo da
                pupila.
              </li>
            </ul>
          </div>
        </div>
        <p class="obs">
          Lembrando que é sempre bom ter uma caixa de transporte, coleira, uma toalha e um
          colar elizabetano.
        </p>
        <p class="font">Fonte: Hospital veterinário taquaral</p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="info-basicas">
    <h2 class="accordion-header" id="headingTwo">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        <i class="fa-solid fa-circle-info"></i>Informações básicas
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <h3 class="infoTittle">Procedimentos:</h3>
        Para socorrer um pet é fundamental que você possua conhecimento básico de como
        funciona o organismo dele. Também precisa saber definir se é um caso de urgência
        ou emergência.
        <p class="obs">
          <strong>Emergências:</strong> São situações críticas inesperadas, súbitas, nesse
          caso o pronto atendimento é fundamental. É preciso ser rápido pois a vida pode
          depender dele. Como afogamentos, paradas cardíacas ou respiratórias,
          atropelamentos, envenenamentos, choques elétricos, etc.
        </p>
        <p class="obs">
          <strong>Urgências:</strong> São de menor gravidade, mas que precisam ser
          socorrida a tempo. –vômitos ou diarréias intensos (principalmente com sangue),
          piometra (infecção uterina), sangue na urina, ou ausência de urina, etc.
        </p>
        <div class="basicInfos">
          <div class="containerInfoCard">
            <h3 class="infoTittle">Frequência cardíaca (FC)</h3>
            <div class="doubleInfoContainer">
              <img src="../assets/images/gato-icon.png" alt="gato" />
              <p>Gatos: 160 a 240 bpm<i class="fa-solid fa-heart-pulse"></i></p>
            </div>
            <div class="doubleInfoContainer">
              <img src="../assets/images/dog-icon.png" alt="cachorro" />
              <p>Cães: 70 a 130 bpm<i class="fa-solid fa-heart-pulse"></i></p>
            </div>
            <p class="obs short">
              Para avaliar a frequência cardíaca ou pulmonar, conte o número de batimentos
              ou respirações em 15 segundos e multiplique por 4 para saber o valor em 1
              minuto.
            </p>
          </div>
          <div class="containerInfoCard">
            <h3 class="infoTittle">Frequência respiratória (FR)</h3>
            <div class="doubleInfoContainer">
              <img src="../assets/images/gato-icon.png" alt="gato" />
              <p>Gatos: 10 a 40 irpm<i class="fa-solid fa-lungs"></i></p>
            </div>
            <div class="doubleInfoContainer">
              <img src="../assets/images/dog-icon.png" alt="cachorro" />
              <p>Cães: 10 a 40 irpm <i class="fa-solid fa-lungs"></i></p>
            </div>
            <p>
              Observe o peito do pet e conte cada vez que ele levantar como uma
              respiração.
            </p>
            <p class="obs short">
              Para saber se o pet está respirando, coloque um espelhinho no focinho, se
              embaçar ele está respirando.
            </p>
          </div>
          <div class="containerInfoCard">
            <h3 class="infoTittle">Temperatura retal</h3>
            <div class="doubleInfoContainer">
              <img src="../assets/images/gato-icon.png" alt="gato" />
              <p>Gatos: 37,5° a 39,5°<i class="fa-solid fa-temperature-half"></i></p>
            </div>
            <div class="doubleInfoContainer">
              <img src="../assets/images/dog-icon.png" alt="cachorro" />
              <p>Cães: 37,5° a 39,5°<i class="fa-solid fa-temperature-half"></i></p>
            </div>
            <p>
              Qualquer variação mínima dos valores acima seja para mais ou menos a
              temperatura precisa de atenção e cuidados médicos.
            </p>
            <p class="obs short">
              Passe um pouco de vaselina na ponta do termômetro e introduza – o no ânus do
              pet até a metade e levemente inclinado. Levará uns 2 minutos para saber o
              resultado.
            </p>
          </div>
        </div>
        <p class="font">Fonte: Hospital veterinário taquaral</p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="mucosa-hidratacao">
    <h2 class="accordion-header" id="headingThree">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        <i class="fa-solid fa-paw"></i>Condições das mucosas e hidratação
      </button>
    </h2>
    <div
      id="collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <h3 class="infoTittle">Coloração das mucosas:</h3>
        <div class="containerInfo flex">
          <figure class="auto">
            <img class="media" src="../assets/images/mucosa.jpg" alt="mucosas" />
            <figcaption>Fonte da imagem: Freepik</figcaption>
          </figure>
          <div class="infoTxt">
            <p><strong>Saudável:</strong></p>
            <ul>
              <li>Coloração normal, vermelho- róseo</li>
              <li>Você deve olhar na conjuntiva (interior das pálpebras) e gengiva.</li>
            </ul>
            <p><strong>Alterações:</strong></p>
            <ul>
              <li>Mucosa pálida: estresse, anemia ou hemorragia grave,</li>
              <li>
                Mucosa azulada ou arroxeada: Falta de oxigenação, alteração cardíaca ou
                pulmonar
              </li>
              <li>Mucosa ressecada: desidratação.</li>
            </ul>
            <p class="obs">Use uma lanterna para ver a mucosa melhor.</p>
          </div>
        </div>
        <h3 class="infoTittle">Condições de Hidratação:</h3>
        <p>Ilustrações:</p>
        <div class="conatinerBtns">
          <button @click="handleChangeDog" class="especieImg">
            <i class="fa-solid fa-dog"></i> Cão
          </button>
          <button @click="handleChangeCat" class="especieImg">
            <i class="fa-solid fa-cat"></i> Gato
          </button>
        </div>
        <div class="containerInfo flex">
          <div class="imagesContainer">
            <figure v-if="isDog" class="auto">
              <img
                class="media"
                src="../assets/images/desidratacao-cao.jpg"
                alt="desidratação"
              />
              <figcaption>Fonte da imagem: Pet Safe</figcaption>
            </figure>
            <figure v-else class="auto">
              <img
                class="media"
                src="../assets/images/desidratacao-gato.jpg"
                alt="desidratação"
              />
              <figcaption>Fonte da imagem: Pet Safe</figcaption>
            </figure>
          </div>
          <div class="infoTxt">
            <p><strong>Saudável:</strong></p>
            <ul>
              <li>pele elástica</li>
            </ul>
            <p>
              Através da elasticidade da pele você descobre facilmente as condições de
              hidratação de cães e gatos. Só é preciso puxá-la na região lateral do corpo
              e observar se ela volta rapidamente a posição normal. Se a pele demorar para
              voltar a posição a desidratação está muito avançada e é preciso levar ao
              médico imediatamente para aplicar soro.
            </p>
          </div>
        </div>
        <p class="font">Fonte: Hospital veterinário taquaral</p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="vomito-diarreia">
    <h2 class="accordion-header" id="headingFour">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour"
      >
        <i class="fa-solid fa-poop"></i>Vômitos e diarreias
      </button>
    </h2>
    <div
      id="collapseFour"
      class="accordion-collapse collapse"
      aria-labelledby="headingFour"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <h3 class="infoTittle">O que Observar:</h3>
        <p class="obs">
          Vômitos e diarreia merecem atenção, pois podem indicar problemas sérios.
        </p>
        <div class="basicInfos">
          <div class="containerInfoCard">
            <ul>
              <li>Pets frequentemente comem grama para aliviar desconforto gástrico.</li>
              <li>
                Vômitos podem ser causados por intoxicação, doenças bacterianas e
                desidratação.
              </li>
              <li>
                Observe o conteúdo do vômito, como aspecto espumoso, cor e o ambiente do
                pet.
              </li>
            </ul>
          </div>
          <div class="containerInfoCard">
            <ul>
              <li>
                Presença de sangue no vômito: pequenas manchas podem não ser graves, mas
                muito sangue pode indicar envenenamento ou lesões graves.
              </li>
            </ul>
          </div>
          <div class="containerInfoCard">
            <ul>
              <li>Diarreia intensa pode levar à desidratação rapidamente.</li>
              <li>
                Causas incluem vermes, intoxicações, estresse, mudanças na dieta e
                viroses.
              </li>
            </ul>
          </div>
        </div>
        <h3 class="infoTittle">Procedimentos:</h3>
        <p>Ilustrações:</p>
        <div class="conatinerBtns">
          <button @click="handleChangeDog" class="especieImg">
            <i class="fa-solid fa-dog"></i> Cão
          </button>
          <button @click="handleChangeCat" class="especieImg">
            <i class="fa-solid fa-cat"></i> Gato
          </button>
        </div>
        <div class="basicInfos">
          <div class="containerInfoCard">
            <p>1 - Retire a comida e a água do seu pet.</p>
            <figure>
              <img
                class="media altura-fixa cover"
                src="../assets/images/comida.jpg"
                alt="comida"
              />
              <figcaption>Fonte da imagem: Pet Safe</figcaption>
            </figure>
          </div>
          <div class="containerInfoCard">
            <p>2 - Prepare um soro caseiro:</p>
            <figure>
              <img
                class="media altura-fixa cover"
                src="../assets/images/soro-caseiro.jpg"
                alt="soro-caseiro"
              />
              <figcaption>
                Fonte da imagem: Pet Safe
              </figcaption>
            </figure>
            <p class="obs short">
              200ml de água fervida ou filtrada (1 copo) 1 colher de sobremesa de açúcar e
              1 pitada de sal.
            </p>
          </div>
          <div class="containerInfoCard">
            <p>3 - Verifique se ele está desidratado.</p>
            <div class="imagesContainer">
              <figure v-if="isDog" class="auto">
                <img
                  class="media altura-fixa cover"
                  src="../assets/images/desidratacao-cao.jpg"
                  alt="desidratação"
                />
                <figcaption>Fonte da imagem: Pet Safe</figcaption>
              </figure>
              <figure v-else class="auto">
                <img
                  class="media altura-fixa cover"
                  src="../assets/images/desidratacao-gato.jpg"
                  alt="desidratação"
                />
                <figcaption>Fonte da imagem: Pet Safe</figcaption>
              </figure>
            </div>
            <p class="obs short">
              Caso a desidratação seja muito severa leve-o imediatamente ao pronto
              atendimento para que não entre em choque.
            </p>
          </div>
        </div>
        <p>
          Caso seja uma desidratação leve vá dando soro caseiro com uma seringa e quando
          perceber que os vômitos pararam pode deixar um vasilha do mesmo soro para ele ir
          se hidratando. Se você perceber que em 24 horas ele não reagiu e os sintomas não
          cessaram leve-o a um veterinário.
        </p>
        <p class="obs">
          DICA: cozinhe o arroz em bastante água sem sal e sem temperos, não deixe que
          seque você irá coá-lo e depois que a água do arroz esfriar é só deixar na
          vasilha para seu pet.
        </p>
        <p class="font">Fonte: Hospital veterinário taquaral</p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="ferimentos-e-cortes">
    <h2 class="accordion-header" id="headingFive">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFive"
        aria-expanded="false"
        aria-controls="collapseFive"
      >
        <i class="fa-solid fa-bandage"></i>Ferimentos e cortes (curativos)
      </button>
    </h2>
    <div
      id="collapseFive"
      class="accordion-collapse collapse"
      aria-labelledby="headingFive"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <h3 class="infoTittle">Você vai precisar de:</h3>
        <p>
          Compressas de gaze, faixa crepe, esparadrapo, antisséptico e pomada antibiótica.
        </p>
        <div class="basicInfos">
          <div class="containerInfoCard">
            <p>1 - Estanque a hemorragia com gaze e pano limpo:</p>
            <figure>
              <img
                class="media altura-fixa"
                src="../assets/images/estancar.jpg"
                alt="estancando-ferimento"
              />
              <figcaption>Fonte da imagem: Pet Safe</figcaption>
            </figure>
            <p class="obs short">
              Aplique um pano limpo ou compres- sas de gaze sobre o local e pressione por
              alguns minutos. Mantenha a pressão até o sangramento parar
            </p>
          </div>
          <div class="containerInfoCard">
            <p>
              2 - Coloque compressas de gaze sobre o ferimento e proteja com a faixa
              crepe, se o local permitir:
            </p>
            <figure>
              <img
                class="media altura-fixa"
                src="../assets/images/colocando-gaze.jpg"
                alt="colocando-gaze"
              />
              <figcaption>Fonte da imagem: Pet Safe</figcaption>
            </figure>
            <p class="obs short">
              Fixe com esparadrapo. Nunca deixe a lesão aberta para evitar o acesso de
              moscas ao ferimento
            </p>
          </div>
          <div class="containerInfoCard">
            <p>3 - Você pode aplicar um torniquete se o sangramento for severo:</p>
            <figure>
              <img
                class="media altura-fixa"
                src="../assets/images/torniquete.jpg"
                alt="torniquete"
              />
              <figcaption>Fonte da imagem: Pet Safe</figcaption>
            </figure>
            <p class="obs short">
              Nas patas e cauda, com um pedaço de faixa crepe ou cadarço de sapato, amarre
              o membro um pouco acima da região do sangramento Afrouxe a cada 5 minutos e
              depois volte a apertar.
            </p>
          </div>
        </div>
        <p>
          Leve o animal ao veterinário para desinfecção e sutura do corte. Se isso não for
          possível imediatamente, limpe o ferimento com água oxigenada, líquido de Dakin
          ou iodo povidine. Aplique pomada antibiótica. Se um vaso sanguíneo for atingido,
          o sangramento não irá parar facilmente. Mantenha a pressão sobre a região até
          chegar ao veterinário.
        </p>
        <p class="obs">
          Como eles têm o hábito de tirar o curativo para lamber, coloque imediatamente o
          colar elisabetano. Repita o curativo duas vezes por dia e assim que possível
          leve ao veterinário.
        </p>
        <p class="font">
          Fonte: Guia de primeiros socorros para cães e gatos | Silvia Parisi
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="queimaduras">
    <h2 class="accordion-header" id="headingSix">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSix"
        aria-expanded="false"
        aria-controls="collapseSix"
      >
        <i class="fa-solid fa-fire"></i> Queimaduras
      </button>
    </h2>
    <div
      id="collapseSix"
      class="accordion-collapse collapse"
      aria-labelledby="headingSix"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <p>
          Todos sabemos que queimaduras não são fáceis de aguentar, a dor costuma ser
          insuportável mesmo em queimaduras de primeiro grau. Assim, cuide sempre para que
          seu pet não fique na cozinha, principalmente perto dos fogões.
        </p>
        <p>Ilustrações:</p>
        <div class="conatinerBtns">
          <button @click="handleChangeDog" class="especieImg">
            <i class="fa-solid fa-dog"></i> Cão
          </button>
          <button @click="handleChangeCat" class="especieImg">
            <i class="fa-solid fa-cat"></i> Gato
          </button>
        </div>
        <div class="basicInfos">
          <div class="containerInfoCard">
            <p>
              1 - Em caso a queimadura grande pegue o pet com cuidado e leve-o
              imediatamente ao veterinário:
            </p>
            <div class="imagesContainer">
              <figure v-if="isDog">
                <img
                  class="media altura-fixa"
                  src="../assets/images/segurar-cao.jpg"
                  alt="segurar-cao"
                />
                <figcaption>Fonte da imagem: Pet Safe</figcaption>
              </figure>
              <figure v-else>
                <img
                  class="media altura-fixa"
                  src="../assets/images/segurar-gato.jpg"
                  alt="segurar-gato"
                />
                <figcaption>Fonte da imagem: Pet Safe</figcaption>
              </figure>
            </div>
          </div>
          <div class="containerInfoCard">
            <p>
              2 - <span class="page__destaque">NÃO USE</span> creme dental sobre a área
              afetada:
            </p>
            <figure>
              <img
                class="media altura-fixa"
                src="../assets/images/nao-creme-dental.jpg"
                alt="nao-creme-dental"
              />
              <figcaption>Fonte da imagem: Pet Safe</figcaption>
            </figure>
          </div>
          <div class="containerInfoCard">
            <p>
              3 - Limpe com soro fisiológico (ou água mineral) e depois aplique pomada:
            </p>
            <figure>
              <img class="media altura-fixa" src="../assets/images/soro.jpg" alt="soro" />
              <figcaption>Fonte da imagem: Pet Safe</figcaption>
            </figure>
          </div>
          <div class="containerInfoCard">
            <p>4 - Não cubra o ferimento. Use o colar elisabetano do seu kit:</p>
            <div class="imagesContainer">
              <figure v-if="isDog">
                <img
                  class="media altura-fixa"
                  src="../assets/images/colar.jpg"
                  alt="colar"
                />
                <figcaption>Fonte da imagem: Pet Safe</figcaption>
              </figure>
              <figure v-else>
                <img
                  class="media altura-fixa"
                  src="../assets/images/gato-colar.jpg"
                  alt="gato-colar"
                />
                <figcaption>Fonte da imagem: Pet Safe</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <p class="obs">
          É importante ressaltar que gatos e cães brancos são propensos a queimaduras
          solares porque não possuem a pigmentação necessária na pele. Não os deixe
          expostos ao sol. Existem filtros solares específicos para eles, pergunte aos seu
          veterinário. Mas, caso ocorra um acidente você tem que ter a mão, soro
          fisiológico frio e pomada antibiótica.
        </p>
        <p class="font">Fonte: Hospital veterinário taquaral</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isDog = ref(false);

function handleChangeDog() {
  isDog.value = true;
}
function handleChangeCat() {
  isDog.value = false;
}
</script>
<style lang="scss" scoped>
.conatinerBtns {
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  margin-bottom: 10px;

  button {
    background-color: var(--primary);
    color: var(--dark);
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.containerInfoCard {
  padding-inline: 10px;
  width: 100%;
}

.flex {
  display: flex;
  gap: 20px;

  @media (max-width: 668px) {
    flex-direction: column;
  }
}

.infoTxt {
  width: 100%;

  @media (max-width: 668px) {
    ul {
      padding: 5px;
    }
  }
}

.media.altura-fixa {
  width: 100% !important;
  height: 210px;
  object-fit: contain;

  &.cover{
    object-fit:cover;
  }
}

.media {
  width: 300px;
  border-radius: 20px;
  border: solid 2px var(--primary-opacity);

  @media (max-width: 668px) {
    width: 100%;
  }
}

figure {
  width: 100%;

  &.auto {
    width: auto;
  }
}

figcaption {
  text-align: center;
  font-size: 12px;
  font-style: italic;
}

.accordion-button {
  i {
    margin-right: 10px;
  }
}

.accordion-button:not(.collapsed) {
  color: var(--dark);
  background-color: var(--primary-opacity);
}

.accordion-button:focus {
  border-color: var(--primary);
}

li {
  font-size: 14px;
}

.font {
  font-style: italic;
  font-size: 12px;
}

.obs {
  margin-block: 20px;
  background-color: var(--primary-opacity);
  padding: 5px;
  border-radius: 5px;

  &.short {
    font-size: 14px;
  }
}

.infoTittle {
  font-size: 20px;
  border-bottom: solid 2px #0000000c;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (max-width: 668px) {
    text-align: left;
    font-size: 18px !important;
  }
}

.basicInfos {
  display: flex;
  margin-block: 30px 0px;
  gap: 10px;

  @media (max-width: 668px) {
    flex-direction: column;
  }
}

.doubleInfoContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 50px;
    background-color: var(--primary);
    border-radius: 10px;
    padding: 10px;
    object-fit: contain;

    @media (max-width: 668px) {
      width: 40px;
      padding: 5px;
    }
  }

  p {
    font-weight: 600;

    i {
      margin-left: 10px;

      &.fa-heart-pulse {
        background-color: rgb(255, 95, 95);
        padding: 3px;
        color: #fff;
        border-radius: 100%;
      }

      &.fa-temperature-half {
        background-color: rgb(255, 95, 95);
        padding: 4px 7px;
        color: #fff;
        border-radius: 100%;
      }

      &.fa-lungs {
        background-color: rgb(255, 95, 95);
        padding: 4px 3px;
        color: #fff;
        border-radius: 100%;
      }
    }
  }
}
</style>
