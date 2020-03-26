<template>
  <div class="graphic">
    <div class="title_content">
      <h1 class="title_graphic">Gráfico de Casos Confirmados</h1>
    </div>
    <area-chart :data="chartData" :colors="['#0a0a01a8']" />
  </div>
</template>

<script>
import history from "../service/history";
export default {
  name: "GraphicCases",
  data() {
    return {
      chartData: {}
    };
  },
  async mounted() {
    try {
      const res = await history.get();
      console.log(res.data);
      this.chartData = res.data.timeline.cases;
      console.log(this.chartData);
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
  margin-bottom: 3rem;
  text-align: center;
}
@media only screen and (max-width: 950px) {
  .title_content h1 {
    font-size: 2em;
  }
}
</style>
