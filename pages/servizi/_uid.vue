<template>
  <div
    :style="{ 
      backgroundImage: 'url(' + document.background_image.url + '), linear-gradient(rgba(0,0,0,0.6)  20%, rgba(14,146,70,0.2) )',
      }"
    class="background py-6"
    style="position:relative"
  >
    <div class="container p-4">
      <prismic-rich-text :field="document.title" />
      <div class="card pt-6 mb-6" style="min-height: 100vh; background: rgba(255,255,255,0.85)">
        <div
          v-if="document.content && document.content.length > 0 && document.content[0].text !== ''"
        >
          <div class="card-content has-text-centered">
            <prismic-rich-text :field="document.content" />
          </div>
        </div>
        <slice-zone type="service" :uid="$route.params.uid" />
      </div>
    </div>
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  transition: "home",
  head() {
    return {
      title: this.document.meta_title,
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: this.document.meta_description
        }
      ]
    };
  },
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const page = (await $prismic.api.getByUID("service", params.uid)).data;
      return {
        document: page
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

