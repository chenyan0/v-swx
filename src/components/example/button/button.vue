<template>
     <div class="section">
        <div class="main">
          <p class="section-label">Button</p>
          <v-button type="default" size="large" loading>default</v-button>
          <v-button type="primary" size="large" loading>primary</v-button>
          <v-button type="info" size="large">info</v-button>
          <v-button type="warning" size="large">warn</v-button>
          <v-button type="success" size="large">success</v-button>
          <v-button type="danger" size="large">danger</v-button>
          <v-button type="default" size="normal" loading>default</v-button>
          <v-button type="primary" size="normal">primary</v-button>
          <v-button type="info" size="normal">info</v-button>
          <v-button type="warning" size="normal">warn</v-button>
          <v-button type="success" size="normal">success</v-button>
          <v-button type="danger" size="normal">danger</v-button>
          <v-button type="default" size="small">default</v-button>
          <v-button type="primary" size="small">primary</v-button>
          <v-button type="info" size="small">info</v-button>
          <v-button type="warning" size="small">warn</v-button>
          <v-button type="success" size="small">success</v-button>
          <v-button type="danger" size="small">danger</v-button>
          <v-button type="default" size="small" disabled>default</v-button>
          <v-button type="primary" size="small" disabled>primary</v-button>
          <v-button type="info" size="small" disabled>info</v-button>
          <v-button type="warning" size="small" disabled>warn</v-button>
          <v-button type="success" size="small" disabled>success</v-button>
          <v-button type="danger" size="small" disabled>danger</v-button>
        </div>
      </div>
</template>
<script>
  import VButton from "../../common/button";

export default {
    components: {
            VButton
        },
}
</script>

<style lang="scss" scoped>
@import './button';
</style>



