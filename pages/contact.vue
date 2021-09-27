<template>
  <div>
    <section class="page-header">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <div class="headTitleWrapper">
              <h1 class="display-3 with-back">
                Контакты
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="info-section">
      <b-container>
        <b-row>
          <b-col lg="6" class="company-info">
            <div class="contact-title">
              <p class="h2 weight-reg">
                ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ
              </p>
            </div>

            <ul>
              <li>ООО "Сетка-Фермер"</li>
              <li>Телефон: <a href="tel:79275360360">+7 (927) 536 03-60</a></li>
              <li>
                E-mail:
                <a
                  href="mailto:setka.fermer@gmail.com"
                >setka.fermer@gmail.com</a>
              </li>
              <li>ОГРН 1173443012863</li>
              <li>ИНН/КПП 3460069303/346001001</li>
              <li>ОКВЭД 25.93, 47.52, 46.69, 46.62, 33.20, 25.99</li>
              <li>ОКФС 16</li>
              <li>Юридический адрес: 400011 г. Волгоград ул. Парковая д.20</li>
              <li>
                Фактический адрес: 400057 г. Волгоград ул. Промысловая д.15
              </li>
              <li>Банк: Южный филиал ПАО "ПРОМСВЯЗЬБАНК"</li>
              <li>р/с 40702810401000020860</li>
              <li>к/с 30101810100000000715</li>
              <li>БИК: 041806715</li>
            </ul>
            <div class="social-links">
              <div class="soc-link-items">
                <a
                  class="contact-item"
                  href="tel:+79275360360"
                ><font-awesome-icon
                  :icon="['fas', 'phone-square']"
                /></a>
                <a
                  class="contact-item"
                  href="https://www.youtube.com/channel/UC4w6AUNRX11k9CYjmQiC9ew"
                ><font-awesome-icon
                  :icon="['fab', 'youtube']"
                /></a>
                <a
                  class="contact-item"
                  href="https://wa.me/79275360360"
                ><font-awesome-icon
                  :icon="['fab', 'whatsapp']"
                /></a>
                <a
                  class="contact-item"
                  href="https://www.instagram.com/setka_fermer_russia/?hl=ru"
                ><font-awesome-icon
                  :icon="['fab', 'instagram']"
                /></a>
              </div>
            </div>
          </b-col>
          <b-col id="main-form" lg="6">
            <div class="contact-title">
              <p class="h2 weight-reg">
                ЗАДАТЬ ВОПРОС
              </p>
            </div>
            <b-form @submit="sendMessage">
              <b-form-group
                id="input-group-1"
                label="Ваш Email:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="email"
                  required
                  placeholder="Введите Ваш Email"
                />
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Ваш вопрос или пожелание:"
                label-for="textarea1"
              >
                <b-form-textarea
                  id="textarea1"
                  v-model="message"
                  required
                  placeholder="Введите Ваш вопрос или пожелание"
                  rows="5"
                  max-rows="10"
                />
              </b-form-group>

              <b-button type="submit" variant="primary" squared>
                Отправить
              </b-button>
              <p v-if="foo" class="status successs">
                Сообщение отправлено. Спасибо!
              </p>
              <p v-if="bar" class="status error">
                Ошибка! Попробуйте ещё раз.
              </p>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5efc802e5e9177c95ede19615342aa0487364d4b47fa4a485f6619e9602783b1&amp;source=constructor"
        width="100%"
        height="600"
        frameborder="0"
        title="ООО Сетка-Фермер - Как добраться"
      />
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      message: '',
      foo: false,
      bar: false
    }
  },
  methods: {
    async sendMessage (evt) {
      evt.preventDefault()
      this.foo = false
      this.bar = false
      this.$yandexMetrika.reachGoal('otpravka_zapros')
      const message = new FormData()
      message.append('email', this.email)
      message.append('message', this.message)
      await axios.post('https://setka-fermer.ru/mail-contact.php', message).then(() => {
        this.foo = true
      }).catch(() => {
        this.bar = true
      })
    }
  },
  head () {
    return {
      title: 'Контакты',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Задайте вопросы о шарнирной сетки в графе контакты. Запросить  инструкцию по монтажу шарнирной сетки." '
        },
        { hid: 'keywords', name: 'keywords', content: 'Сетка Фермерская, cетка для забора, cетка для дачи, cетка Узловая дфл, rупить сетку для забора' }
      ]
    }
  }
}
</script>

<style lang="scss">
.company-info {
  ul {
    list-style-type: none;
    padding: 0 0 32px !important;
    li {
      list-style-type: none;
      &::before {
        content: none !important;
      }
    }
  }
}

.contact-item {
  background: #0f62fe !important;
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  &:hover {
    transform: scale(1.3);
    transition: 0.1s;
  }
}

#main-form {
  input,
  textarea {
    border: none;
    border-bottom: 1px solid gray;
    border-radius: 0px;
    margin-bottom: 48px;
  }
}
т .contact-title {
  height: 128px;
}

.status {
  padding: 24px 0;
}

.successs {
  color: green;
}

.error {
  color: red;
}
</style>
