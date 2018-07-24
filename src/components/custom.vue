<template>
    <div class="wrapper">
        <label for="" class="label">checkbox</label>
        <v-checkbox value="apple" @change="onChange"> 苹果🍎 </v-checkbox>
        <v-checkbox value="orange" @change="onChange"> 橙子🍊 </v-checkbox>
        <!-- <p>{{values}}</p> -->
        <label for="" class="label">button</label>
        <v-button type="default" size="large">default</v-button>
        <v-button type="primary" size="large">primary</v-button>
        <v-button type="info" size="large">info</v-button>
        <v-button type="warning" size="large">warn</v-button>
        <v-button type="success" size="large">success</v-button>
        <v-button type="danger" size="large">danger</v-button>

        <v-button type="default" size="normal">default</v-button>
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

        <v-button type="default" size="small" nativeType="submit" loading>default</v-button>
    </div>
</template>
<script>
import VCheckbox from "./common/checkbox";
import VButton from "./common/button";
export default {
  components: {
    VCheckbox,
    VButton
  },
  data() {
    return {
    };
  },
  methods: {
    onChange: function(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 20px;

}
  .lable {
    display: block;
  }
</style>


