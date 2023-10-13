<template>
  <div class="container">
    <section class="page__title">
      <h1>Home</h1>
    </section>
    <hr />
    <HeroSection
      hero-tittle="Bem vindos ao Pet Safe"
      hero-description="Lorem ipsum dolor, lorem ipsum dolor"
      hero-btn-text="Saiba mais"
      hero-btn-link="/sobre"
      hero-img="assets/images/caes-e-gatos.jpg"
    />
    <section class="page__content">
      <h3 id="introducao" class="page__subTittle">Preparando a casa</h3>
      <p>
        Após decidir acolher um novo membro peludo na família, o passo inicial é garantir
        que o ambiente esteja devidamente preparado. Essa precaução visa assegurar a
        segurança e o bem-estar tanto do animal de estimação quanto de seus tutores.
        Afinal, apesar do amor incondicional que temos por nossos amigos de quatro patas,
        evitar danos aos objetos de casa é algo que todos desejamos.
      </p>
      <p>
        Além disso, é importante estar ciente de que diversos itens cotidianos podem
        representar riscos para os animais de estimação, resultando em acidentes
        domésticos, incluindo intoxicações, que são mais comuns do que muitos imaginam.
      </p>
      <p>Entre as principais causas de intoxicação de animais, podemos citar:</p>
      <div class="page__section-destaque">
        <div class="page__info-flex-container">
          <div class="page__info-flex-item">
            <div class="page__icon-container">
              <i class="fa-brands fa-pagelines"></i>
            </div>
            <p>Ingestão de plantas que possuem substâncias tóxicas para os animais.</p>
          </div>
          <div class="page__info-flex-item">
            <div class="page__icon-container">
              <i class="fa-solid fa-pills"></i>
            </div>
            <p>
              Ingestão de medicamentos que caem no chão, são deixados em locais de fácil
              acesso ou administrados de forma equivocada pelo tutor.
            </p>
          </div>
          <div class="page__info-flex-item">
            <div class="page__icon-container">
              <i class="fa-solid fa-jug-detergent"></i>
            </div>
            <p>Ingestão de produtos químicos, como os utilizados para limpeza da casa.</p>
          </div>
        </div>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" id="plantas">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <i class="fa-brands fa-pagelines"></i> Plantas
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                De forma geral, é crucial considerar que todas as plantas representam um
                potencial risco para cães e gatos, tornando necessário evitar que os
                animais as alcancem. Em situações menos graves, a ingestão de plantas pode
                levar a sintomas digestivos, como diarreia e irritações gástricas,
                frequentemente passando despercebidos pelos tutores.
              </p>
              <p>
                No entanto, em casos mais críticos, essas ingestões podem desencadear
                complicações sérias, afetando órgãos como coração, sistema sanguíneo,
                fígado, rins, sistema respiratório e sistema nervoso central.
              </p>
              <p>
                As consequências desses episódios podem ser duradouras e, em situações
                extremas, levar à morte dos animais. Entre as plantas mais perigosas para
                cães e gatos, estão:
              </p>
              <div class="page__info-flex-container list-format">
                <div class="page__info-flex-item list-format">
                  <figure class="page__img-container">
                    <img src="../assets/images/comigo-ninguem-pode.webp" alt="planta" />
                    <figcaption>Fonte da imagem: Petalas e flores</figcaption>
                  </figure>
                  <p>
                    <span class="page__destaque"
                      >Comigo-ninguém-pode, costela- de-adão e Philodendron (Imbé):</span
                    >
                    possuem uma substância chamada de oxalato de cálcio, que provoca
                    irritação e inchaço nas mucosas (boca, faringe, etc.), podendo levar à
                    asfixia e até à morte. Alterações gastrointestinais também são comuns.
                  </p>
                </div>
                <div class="page__info-flex-item list-format list-invert">
                  <figure class="page__img-container">
                    <img src="../assets/images/cica.jpg" alt="planta" />
                    <figcaption>Fonte da imagem: Viveiro rosário</figcaption>
                  </figure>
                  <p>
                    <span class="page__destaque">Cica:</span>
                    todas as partes da planta podem causar intoxicação, porém as sementes
                    são especialmente perigosas. A cica pode provocar alterações renais,
                    hepáticas e do sistema nervoso central.
                  </p>
                </div>
                <div class="page__info-flex-item list-format">
                  <figure class="page__img-container">
                    <img src="../assets/images/azaleia.webp" alt="planta" />
                    <figcaption>Fonte da imagem: Jardim exótico</figcaption>
                  </figure>
                  <p>
                    <span class="page__destaque">Azaléia, Espirradeira e Kalanchoe:</span>
                    podem provocar alterações cardíacas, como arritmias e fibrilações.
                  </p>
                </div>
                <div class="page__info-flex-item list-format list-invert">
                  <figure class="page__img-container">
                    <img src="../assets/images/lirio.webp" alt="planta" />
                    <figcaption>Fonte da imagem: Viva decora</figcaption>
                  </figure>
                  <p>
                    <span class="page__destaque">Lírio:</span>
                    planta bastante comum nos lares brasileiros, é especialmente palatável
                    para os gatos. A ingestão de suas folhas e flores provoca alterações
                    renais, hepáticas e pancreáticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by
              default, until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall appearance, as well
              as the showing and hiding via CSS transitions. You can modify any of this
              with custom CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by
              default, until the collapse plugin adds the appropriate classes that we use
              to style each element. These classes control the overall appearance, as well
              as the showing and hiding via CSS transitions. You can modify any of this
              with custom CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import FixedAlert from "../components/FixedAlert.vue";
import HeroSection from "../components/HeroSection.vue";
</script>
