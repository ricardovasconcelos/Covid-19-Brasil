<template>
  <div class="panel">
    <div class="panel_content">
      <img :src="image" class="brasilImage" />
      <div class="text_data">
        <div class="text_data_content">
          <h1>Casos Confirmados</h1>
          <p>{{ cases }}</p>
        </div>
        <div class="text_data_content">
          <h1>Mortes Confirmadas</h1>
          <p>{{ deaths }}</p>
        </div>
        <div class="text_data_content">
          <h1>Casos Confirmados Hoje</h1>
          <p>{{ casesToday }}</p>
        </div>
        <div class="text_data_content">
          <h1>Mortes Confirmadas Hoje</h1>
          <p>{{ deathsToday }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../assets/brasil.png";
import data from "../service/data";
export default {
  name: "Panel",
  data() {
    return {
      image,
      cases: "",
      casesToday: "",
      deaths: "",
      deathsToday: ""
    };
  },
  async mounted() {
    try {
      const res = await data.get();
      this.cases = res.data.cases;
      this.casesToday = res.data.todayCases;
      this.deaths = res.data.deaths;
      this.deathsToday = res.data.todayDeaths;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style>
.panel {
  padding-top: 2rem;
  width: 100%;
  background-color: #fdfdf6;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel_content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
}
.text_data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
}
.text_data_content {
  text-align: center;
  margin-bottom: 5rem;
  margin-left: 2rem;
  margin-right: 1rem;
  height: 100%;
  font-family: "Gotham Rounded SSm A", "Gotham Rounded SSm B", system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue",
    Helvetica, sans-serif;
}

.text_data_content p {
  font-weight: bold;
  font-size: 3em;
  margin-top: 1rem;
  color: rgb(63, 11, 11);
}
.panel_content h1 {
  font-family: "Gotham Rounded SSm A", "Gotham Rounded SSm B", system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue",
    Helvetica, sans-serif;
  color: rgb(248, 0, 0);
  font-size: 2.5em;
}
.brasilImage {
  width: 35em;
}

@media only screen and (max-width: 599px) {
  .brasilImage {
    width: 15em;
  }
}

@media only screen and (max-width: 950px) {
  .brasilImage {
    width: 18em;
  }
  .panel_content {
    display: flex;
    flex-direction: column;
  }
  .text_data {
    display: grid;
    grid-template-columns: 1fr;
    width: 50%;
    text-align: center;
  }
  .text_data_content {
    text-align: center;
    margin: 2rem 0rem 0rem 0rem;
  }
  .panel_content h1 {
    font-family: "Gotham Rounded SSm A", "Gotham Rounded SSm B", system-ui,
      -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue",
      Helvetica, sans-serif;
    color: rgb(248, 0, 0);
    font-size: 2em;
  }
}
@media only screen and (max-width: 1200px) {
  .text_data_content p {
    font-size: 2.5em;
  }
  .panel_content h1 {
    font-size: 2em;
  }
}
</style>
