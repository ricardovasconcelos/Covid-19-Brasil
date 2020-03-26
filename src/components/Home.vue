<template>
  <div class="hello">
    <Header />
    <Panel />
    <GraphicCases />
    <GraphicDeaths />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Panel from "./Panel";
import GraphicCases from "./GraphicCases";
import GraphicDeaths from "./GraphicDeaths";
import Footer from "./Footer";

export default {
  name: "Home",
  components: {
    Header,
    Panel,
    GraphicCases,
    GraphicDeaths,
    Footer
  }
};
</script>

<style scoped></style>
