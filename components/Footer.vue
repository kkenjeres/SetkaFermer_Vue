<template>
  <section id="footer" class="footer">
    <b-container>
      <b-row>
        <b-col lg="3" md="3" sm="12">
          <ul>
            <li>
              <nuxt-link to="/">
                Главная
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">
                О нас
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/catalog">
                Цены
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/delivery">
                Оплата и доставка
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">
                Контакты
              </nuxt-link>
            </li>
          </ul>
        </b-col>
        <b-col lg="3" md="3" sm="12">
          <ul>
            <li>
              <a href="https://national-reestr.ru/"> Национальный реест </a>
            </li>
            <li>
              <a href="https://www.rusprofile.ru/id/11031296">
                Доп. информация
              </a>
            </li>
          </ul>
        </b-col>
        <b-col lg="4" md="3" offset-lg="2" class="footer-contact">
          <div class="footer-soc-row">
            <a
              href="https://www.instagram.com/setka_fermer_russia/"
            ><font-awesome-icon
              :icon="['fab', 'instagram']"
            /></a>
            <a
              href="https://www.youtube.com/channel/UC4w6AUNRX11k9CYjmQiC9ew"
            ><font-awesome-icon
              :icon="['fab', 'youtube']"
            /></a>
          </div>
          <div>
            <p class="h4">
              <a href="mailto:setka.fermer@gmail.com">setka.fermer@gmail.com</a>
            </p>
            <p class="h4">
              <a href="tel:+79275360360">+7 (927) 536 03-60</a>
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <div class="copyright">
            <p>2020 - ООО "Сетка-Фермер". Все права защещены.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss">
@media (max-width: 576px) {
  .footer-contact {
    margin-top: 64px;
  }
}

.footer {
  background-color: #121619;
  padding: 48px 0 0 16px;
  color: white;

  .h4 {
    font-weight: 300;
  }

  .footer-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    a {
      color: white;
    }
  }

  .footer-soc-row {
    width: 100%;
    svg {
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;
    li {
      list-style-type: none;
      a {
        color: white;
      }
    }
  }
}

.copyright {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid white;
}
</style>
