<template>
  <div
    :style="{ 
      backgroundImage: 'url(' + document.background.url + '), linear-gradient(rgba(0,0,0,0.6)  20%, rgba(14,146,70,0.2) )',
      }"
    style="position:relative"
    class="background py-6"
  >
    <div class="container p-4">
      <h1>Piante</h1>
      <div class="card" style="min-height: 100vh; background: rgba(255,255,255,0.9)">
        <b-tabs v-model="activeTab">
          <b-tab-item label="Alberature">
            <slice-zone type="piante" uid="alberature" />
          </b-tab-item>
          <b-tab-item label="Arbusti">
            <slice-zone type="piante" uid="arbusti" />
          </b-tab-item>
          <b-tab-item label="Conifere">
            <slice-zone type="piante" uid="conifere" />
          </b-tab-item>
          <b-tab-item label="Frutti">
            <slice-zone type="piante" uid="frutti" />
          </b-tab-item>
          <b-tab-item label="Mediterranee">
            <slice-zone type="piante" uid="mediterranee" />
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  head: {
    title: "Vendita Piante | Vivai Previdi Guido",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Vendita piante con ampia scelta di alberature, arbusti, conifere, piante da frutto, mediterranee."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  transition: "home",
  data() {
    return {
      activeTab: 0
    };
  },
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const page = (await $prismic.api.getByUID("page", "piante")).data;
      return {
        document: page
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
