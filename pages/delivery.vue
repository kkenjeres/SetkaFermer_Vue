<template>
  <div>
    <section class="page-header">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <div class="headTitleWrapper">
              <h1 class="display-3 with-back">
                Как заказать
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="main-delivery" class="info-section">
      <b-container>
        <b-row>
          <b-col lg="12">
            <p class="display-4 weight-reg">
              Заказ
            </p>
            <ol>
              <li>
                Добавьте в корзину интересующую Вас позицию каталога. Перейдите
                в корзину и введите необходимое количество рулонов шарнирной
                сетки по каждой добавленной позиции. 1 рулон - 50 метров
                (оптовая цена рассчитывается автоматически, опт от 10 рулонов).
              </li>

              <li>
                Выбирите необходимый способ получения продукции. Введите город
                до которого необходимо осуществить доставку. При выборе
                "Доставка до терминала" расположение близжайшего к вам терминала
                уточняйте у менеджера по продажам.
              </li>

              <li>
                Введите контактную информацию. При наличии
                организационно-правовой формы пожадуйста введите ИНН и приложите
                карту партнёра.
              </li>

              <li>
                Нажмите кнопку офрмить заказ. После оформления заказа менеджер
                свяжется с Вами в кратчайшие сроки для подвтерждения заказа.
              </li>
            </ol>
            <p>
              Доставка рассчитывается ответственными транспортными компаниями,
              которые заслужили доверия на рынке грузоперевозок -
              <a href="https://gtdel.com/">GTD</a>,
              <a href="https://nrg-tk.ru/">Энергия</a>,
              <a href="https://www.jde.ru/">ЖелДорЭкспедиция</a>,
              <a href="https://pecom.ru/">ПЭК</a>,
              <a href="https://www.baikalsr.ru/">Байкал Сервис</a>.
            </p>
            <p>Отправка груза по всей России.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="for-payoneers" class="info-section">
      <b-container>
        <b-row>
          <b-col lg="12">
            <p class="display-4 weight-reg">
              Оплата
            </p>
            <p>
              Возможна оплата по факту получения груза в пределах г. Волгограда
              и г. Волжского.
            </p>
            <p>
              Срок выполнения заказа зависит от объема или наличия на складе.
            </p>
            <p>
              Доставку Вы оплачиваете транспортной компании, самостоятельно при
              получении груза. Самый выгодный вариант вне зависимости от
              направления- это доставка догрузом.
            </p>
          </b-col>

          <b-col lg="12" class="sber">
            <div class="inf">
              <h3>
                Внимание! При оплате через сбербанк онлайн для физических лиц
                комиссия не взимается.
              </h3>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Как заказать',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Для заказа Вам нужно просто позвонить по номеру 8-927-536-03-60. Или написать на почту setka.fermer@gmail.com. Для жителей Волгограда возможен самовывоз.'
        },
        { hid: 'keywords', name: 'keywords', content: 'Сетка оцинкованная, cетка для вольеров, 3д панели купить, cетка рабица краснодар, cетка шарнирная краснодар' }
      ]
    }
  }
}
</script>

<style lang="scss">
#main-delivery {
  background-color: #dde1e6;
  ol {
    padding-left: 15px;
    li {
      padding-left: 16px;
      padding-bottom: 16px;
    }
  }
}
#for-payoneers {
  background-color: #c1c7cd;
}

.sber {
  color: white;
  background-color: #24a148;
  margin-top: 64px;
  .inf {
    padding: 48px 0;
  }
}
</style>
