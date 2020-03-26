<template>
  <div class="header">
    <div class="header_content">
      <h1>Covid-19 Brasil</h1>
      <img :src="image" class="logoCovid" />
    </div>
  </div>
</template>

<script>
import image from "../assets/icon.png";
export default {
  name: "Header",
  data() {
    return {
      image
    };
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 6rem;
  background-color: #fdfdf6;
}
.header_content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header_content h1 {
  font-family: "Gotham Rounded SSm A", "Gotham Rounded SSm B", system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue",
    Helvetica, sans-serif;
  color: #fd3700;
  font-size: 3rem;
}
.logoCovid {
  width: 6em;
}

@media only screen and (max-width: 950px) {
  .header_content h1 {
    font-size: 2rem;
  }
}
</style>
