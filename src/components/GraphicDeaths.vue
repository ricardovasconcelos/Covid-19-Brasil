<template>
  <div class="graphic">
    <div class="title_content">
      <h1 class="title_graphic">Gráfico de Mortes Confirmadas</h1>
    </div>
    <area-chart :data="chartData" :colors="['#0a0a01a8']" />
  </div>
</template>

<script>
import history from "../service/history";
export default {
  name: "GraphicDeaths",
  data() {
    return {
      chartData: {}
    };
  },
  async mounted() {
    try {
      const res = await history.get();

      this.chartData = res.data.timeline.deaths;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style>
.graphic {
  width: 90%;
  margin: auto;
}
.title_content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title_content h1 {
  font-family: "Gotham Rounded SSm A", "Gotham Rounded SSm B", system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue",
    Helvetica, sans-serif;
  color: rgb(248, 0, 0);
  font-size: 3em;
  margin-top: 5rem;
  text-align: center;
}
@media only screen and (max-width: 950px) {
  .title_content h1 {
    font-size: 2em;
    margin-top: 2rem;
  }
}
</style>
