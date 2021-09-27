<template>
  <div>
    <section
      id="header"
      class="text-center mainheader"
      :style="{
        'background-image': 'url(' + require('~/assets/imgs/Farm22.jpg') + ')',
      }"
    >
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <div class="hieght-50">
              <h1 class="display-1 main-title">
                ШАРНИРНАЯ СЕТКА
              </h1>
              <type-writer />
              <div class="social-links">
                <div class="soc-link-items">
                  <a
                    href="tel:+79275360360"
                  ><font-awesome-icon
                    :icon="['fas', 'phone-square']"
                  /></a>
                  <a
                    href="https://www.youtube.com/channel/UC4w6AUNRX11k9CYjmQiC9ew"
                  ><font-awesome-icon
                    :icon="['fab', 'youtube']"
                  /></a>
                  <a
                    href="https://wa.me/79275360360"
                  ><font-awesome-icon
                    :icon="['fab', 'whatsapp']"
                  /></a>
                  <a
                    href="https://www.instagram.com/setka_fermer_russia/?hl=ru"
                  ><font-awesome-icon
                    :icon="['fab', 'instagram']"
                  /></a>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="brief-info">
      <b-container>
        <b-row class="brief">
          <b-col md="6" lg="6" class="reestr">
            <div class="info-fl">
              <p class="display-4 brief-title">
                Надёжный поставщик
              </p>

              <p class="discharged-text">
                ООО "Сетка-Фермер" включена в реестр надёжных поставщиков в 2020
                году
              </p>

              <p class="discharged-text">
                НАЦИОНАЛЬНЫЙ РЕЕСТР - это проект, направленный на выявление и
                поддержку наиболее эффективных производителей товаров, работ и
                услуг.
              </p>
              <div class="cart-img-wrapper">
                <b-img
                  src="~/assets/imgs/logo1.svg"
                  class="full-size"
                  fluid
                  alt="ООО Сетка-фермер"
                />
              </div>

              <b-button variant="primary" to="/catalog" squared>
                Подробнее
              </b-button>
            </div>
          </b-col>
          <b-col md="6" lg="6" class="market">
            <div class="cart-img">
              <b-img src="~/assets/imgs/cart-big.svg" center fluid />
            </div>
            <div class="info-fl">
              <p class="display-4 brief-title">
                Интернет магазин
              </p>

              <ul>
                <li>5 транспортных компаний для расчёта доставки</li>
                <li>Удобная навигация</li>
                <li>Автоматический расчёт параметров груза</li>
              </ul>
              <b-button variant="primary" to="/catalog" squared>
                В каталог
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="compare" class="info-section">
      <b-container>
        <b-row>
          <b-col cols="12">
            <p class="display-4 weight-reg">
              Сравнение ограждения участка в 1 Га
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <b-img
              src="~/assets/imgs/rabica.png"
              center
              fluid
              alt="Сетка-Рабица"
            />
            <p class="h4">
              СЕТКА РАБИЦА
            </p>
            <p class="discharged-text">
              Сетка рабица ОЦ: 1.5 м х 40 рулонов(400п.м.)= 40 446 р
              <br>Проволока для натяжения сетки: <br>ОЦ: d = 2 мм х 800
              метров = 1 400 р <br>Труба: проф 2 м (80х40х2мм) х 133 шт = 39
              900 р
            </p>
          </b-col>
          <b-col lg="6">
            <b-img
              src="~/assets/imgs/sharnir.png"
              center
              fluid
              alt="Купить шарнирную сетку"
            />
            <p class="h4">
              ШАРНИРНАЯ СЕТКА
            </p>
            <p class="discharged-text">
              Сетка шарнирная OЦ: 1.5 м x 8 рулонов(400п.м.)= 26 800 р
              <br>Проволока для крепления к столбам: <br>ОЦ d = 2 мм х 50
              метров = 85 р <br>Труба: проф 2 м (80х40х2мм) х 67 шт = 19 950 р
            </p>
          </b-col>
        </b-row>

        <b-row class="text-center total-compare-sec">
          <b-col lg="12">
            <p class="total-compare display-4">
              <span>81 746 руб</span> &gt; 46 835 руб
            </p>
          </b-col>
          <b-col lg="12">
            <p>40% выгоды при использовании шарнирной сетки</p>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="info-section advantages">
      <b-container>
        <h2 class="display-4 weight-reg">
          Преимущества шарнирной сетки
        </h2>
        <b-row>
          <b-col lg="5">
            <p class="h4">
              ШАРНИРНАЯ СЕТКА
            </p>
            <ul>
              <li>рулоны по 50 метров и небольшого диаметра.</li>
              <li>итоговая стоимость на 40% выгоднее рабицы</li>
              <li>
                для монтажа не нужно натягивать проволоку и на монтаж идет в 2
                раза меньше столбов (ставятся от 5-10 метров)
              </li>
              <li>
                выдерживает большие нагрузки (разрывная прочность каждой
                проволоки 2мм - 500 кг) и не провисает со верменем
              </li>
            </ul>

            <p class="h4">
              СЕТКА РАБИЦА
            </p>
            <ul>
              <li>для монтажа нужно натягивать проволоку и загибать концы</li>
              <li>
                рулоны по 10 метров, что увеличивает объем и стоимость доставки
              </li>
              <li>со временем теряет натяжение и провисает</li>
              <li>
                за счет даже малого механического воздействия распускаются концы
                и образуются дыры
              </li>
            </ul>
          </b-col>

          <b-col lg="7">
            <b-img
              src="~/assets/imgs/compare-new.jpg"
              center
              fluid
              style="box-shadow: 0 2px 10px -1px rgba(87, 97, 100, 0.45)"
              alt="Шарнирная сетка преимущества"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="bankInfo">
      <b-container>
        <b-row>
          <b-col lg="4">
            <div class="bank-img-wrapper">
              <b-img
                src="~/assets/imgs/otp_bank.png"
                center
                fluid
                alt="Шарнирная сетка купить в кредит"
              />
            </div>
          </b-col>
          <b-col lg="8">
            <p class="h4 titles">
              ПРИОБРЕТАЙТЕ СЕЙЧАС, ПЛАТИТЕ ПОТОМ
            </p>
            <p class="discharged-text">
              В сотрудничестве с банком ОТП компания ООО Сетка-Фермер
              предоставляет возможность оформить покупку шарнирной сетки в
              кредит. Кредит можно оформить в любом отделении банка ОТП в вашем
              регионе. Переплата составляет 1.5% в месяц.
            </p>
            <p class="discharged-text">
              Для получения более подробной информации оставьте заявку
              менедежеру продаж заполнив контактную форму нажав на кнопку ниже.
            </p>
            <div />
            <div>
              <b-button v-b-modal.modal-1>
                Оставить заявку
              </b-button>

              <b-modal
                id="modal-1"
                onclick="document.querySelector('.info.container').textContent = 'Успешно отправлено.'"
                ok-title="Отправить"
                cancel-title="Отмена"
              >
                <div>
                  <b-form v-if="show" @submit="onSubmit" @reset="onReset">
                    <b-form-group
                      id="input-group-1"
                      label="Ваш телефон:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="phone"
                        placeholder="Напишите телефон"
                        required
                      />
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Ваше Имя:" label-for="input-2">
                      <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Ваше имя"
                        required
                      />
                    </b-form-group>

                    <b-button type="submit" variant="primary">
                      Отправить
                    </b-button>
                    <b-button type="reset" variant="danger">
                      Отмена
                    </b-button>
                  </b-form>
                </div>
              </b-modal>
            </div>

            <!-- Form

            <div>
              <b-form v-if="show" @submit="onSubmit" @reset="onReset">
                <b-form-group
                  id="input-group-1"
                  label="Ваш телефон:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="phone"
                    placeholder="Напишите телефон"
                    required
                  />
                </b-form-group>

                <b-form-group id="input-group-2" label="Ваше Имя:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Ваше имя"
                    required
                  />
                </b-form-group>

                <b-button type="submit" variant="primary">
                  Отправить
                </b-button>
                <b-button type="reset" variant="danger">
                  Отмена
                </b-button>
              </b-form>
            </div>

            Form-->

            <div
              id="exampleModal"
              class="modal fade"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 id="exampleModalLabel" class="modal-title">
                      New message
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input id="recipient-name" type="text" class="form-control">
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea id="message-text" class="form-control" />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="technology" class="info-section">
      <b-container>
        <b-row>
          <b-col cols="12">
            <p class="display-4 weight-reg">
              Технология производства
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <b-img
              src="~/assets/imgs/500x400_fence_width.png"
              center
              fluid
              alt="Шарнирная сетка - технология производства"
            />
          </b-col>
          <b-col lg="6">
            <p>
              Продольные ячейки производятся в 3-х размерах: 7.5 см, 10 см, 15
              см.
            </p>
            <p>
              Чем шире ячейка, тем ниже стоимость. Возможна ширина по
              индивидуальному заказу.
            </p>
            <p>
              Производство шарнирной сетки осуществляется согласно ТУ
              25.93.13-001-15819636-2018
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="info-section video-main">
      <b-container>
        <b-row>
          <b-col lg="5">
            <div style="padding-right: 48px">
              <p class="h4 titles">
                МАКСИМАЛЬНО ПРОСТОЙ МОНТАЖ
              </p>
              <p class="text-p-48">
                Автобаны, сельскохозяйственные угодья и заповедники, дачные и
                земельные участки, частные строительные объекты, промышленные
                территории, виноградники и сады, вольеры.
              </p>

              <p class="h4 titles">
                ШИРОКИЙ ПРОФИЛЬ ПРИМЕНЕНИЯ
              </p>
              <p>
                Автобаны, сельскохозяйственные угодья и заповедники, дачные и
                земельные участки, частные строительные объекты, промышленные
                территории, виноградники и сады, вольеры.
              </p>
            </div>
          </b-col>
          <b-col lg="7">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/DfLpLIz8Ovw"
              allowfullscreen
            />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="info-section areas-of-use">
      <b-container>
        <h2 style="color: white" class="display-4 weight-reg">
          Области применения
        </h2>
        <b-row>
          <b-col
            v-for="(img, indexPh) in this.photo[0]"
            :key="indexPh"
            sm="12"
            md="4"
            lg="4"
            class="mg-case"
          >
            <div class="cases-wrapper">
              <b-img
                :src="`${require(`~/assets/imgs/small/${img.replace(
                  'big/',
                  ''
                )}`)}`"
                center
                fluid
                alt="Шарнирная сетка применение"
              />
              <div class="opencaseModal" @click="CHANGE_MODAL([indexPh, 0])" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TypeWriter from '../components/TypeWriter.vue'
export default {
  components: {
    TypeWriter
  },
  head () {
    return {
      title: 'Главная',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Шарнирная сетка(аналог рабицы) от Волгоградского производителя с расчётом доставки.Всё цены указаны в каталоге.Опт от 500 метров. Тел. для связи: 8-927-536-03-60.'
        },
        { hid: 'keywords', name: 'keywords', content: 'Шарнирная сетка от производителя, сварная сетка купить, cетка рабица купить, юнимакс краснодар' }
      ]
    }
  },
  methods: {
    ...mapMutations('photoItem', ['CHANGE_MODAL']),
    goal1 () {
      this.$yandexMetrika.reachGoal('otpravka_kredit')
    },
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  computed: {
    ...mapState('photoItem', ['photo'])
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  }
}
</script>

<style lang="scss">
#compare .h4 {
  padding: 32px 0 8px;
}

.discharged-text {
  line-height: 36px;
}
.text-p-48 {
  padding-bottom: 48px;
}

.titles {
  display: block;
  margin-bottom: 24px;
}
.cart-img {
  position: absolute;
  bottom: -32px;
  right: -32px;
  width: 512px;
  img {
    fill: #a2a9b0;
  }
}
.reestr {
  background-color: #dde1e6;
}
.market {
  background-color: #c1c7cd;
  position: relative;
  overflow: hidden;
}

.areas-of-use {
  background-color: #0f62fe;
}

.advantages {
  background-color: #0f62fe;
  color: white;
}

.info-fl {
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  padding: 0 32px 64px;
  position: relative;
  ul {
    margin-left: 0 !important;
    padding: 0 0 32px;

    li {
      list-style-type: none;
      padding-bottom: 16px;
      &::before {
        content: "—";
        margin-right: 8px;
      }
    }
  }
  .cart-img-wrapper {
    width: 90%;
    padding: 32px 0 48px;
    .full-size {
      width: 100% !important;
    }
  }
}

.brief {
  margin-top: 32px;
}

.brief-title {
  display: block;
  margin: 64px 0 48px;
}

.weight-reg {
  font-weight: 400 !important;
  margin-bottom: 96px;
  display: block;
}
.mainheader {
  overflow: hidden;
  background-position: bottom;
  background-color: #21272a;
}
.video-main {
  background-color: #21272a;
  color: white;
}
.section-title {
  // font-size: 60px;
  font-weight: 400;
  padding-bottom: 64px;
  margin: 0;
}
.info-section {
  padding: 128px 0;
  ul {
    margin-left: 0 !important;
    padding: 32px 0 32px;
    li {
      list-style-type: none;
      padding-bottom: 8px;
      &::before {
        content: "—";
        margin-right: 8px;
      }
    }
  }
}
.bankInfo {
  background-color: #dde1e6;
  padding: 64px 0;
}
.mg-case {
  margin-bottom: 32px;
}
.cases-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 10px -1px rgba(87, 97, 100, 0.45);
}
.opencaseModal {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: black;
    opacity: 50%;
    &::after {
      content: "СМОТРЕТЬ";
      position: absolute;
      color: white;
    }
  }
}
.bank-img-wrapper {
  height: 250px;
  width: 250px;
  margin: 0 auto;
}
.hieght-50 {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  .main-title {
    color: #ffffff;
  }
}

.social-links {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .soc-link-items {
    background: transparent;
    display: inherit;

    a {
      background: white;
      color: #0f62fe;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 8px;
      &:hover {
        transform: scale(1.3);
        transition: 0.1s;
      }
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
}

.total-compare {
  color: #0f62fe;
  span {
    color: white;
  }
}

.total-compare-sec {
  padding: 24px 0;
  margin-top: 40px;
  background-color: #c1c7cd;
  // color: white;
  position: relative;
  box-shadow: 0 2px 10px -1px rgba(87, 97, 100, 0.45);
}

@media (max-width: 767.98px) {
  .opencaseModal {
    display: none;
  }
}

@media (max-width: 576px) {
  .display-4 {
    font-size: 2rem;
  }

  .display-1 {
    font-size: 2.5rem;
  }

  .display-3 {
    font-size: 3rem;
  }
  .typed-text {
    font-size: 1rem;
  }
}
</style>
