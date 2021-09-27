
<template>
  <section :id=" height " class="catalog-section-row">
    <b-container fluid>
      <b-row>
        <b-col lg="3" md="3" sm="1" xs="1">
          <p class="h3 title-row">
            Высота {{ height }} см
          </p>
          <p class="catalog-subtitle subtitle-catalog">
            Оцинкованная проволока диаметром 2 мм
          </p>
        </b-col>
        <slot />
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    height: Number
  }
}
</script>
