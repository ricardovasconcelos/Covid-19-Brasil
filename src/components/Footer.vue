<template>
  <div class="footer">
    <div class="footer_content">
      <h4>
        Desenvolvido por
        <a href="https://github.com/ricardovasconcelos">Ricardo Vasconcelos</a>
      </h4>
      <h5>
        All data from
        <a href="https://github.com/NovelCOVID/API">NovelCOVID </a>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel"
};
</script>

<style>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 8rem;
  width: 100%;
  font-family: "Gotham Rounded SSm A", "Gotham Rounded SSm B", system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue",
    Helvetica, sans-serif;
  color: rgb(248, 0, 0);
}
.footer_content h4 {
  font-size: 1rem;
}
.footer_content a {
  text-decoration: none;
}
.footer_content h5 {
  margin-top: 1rem;
  font-size: 0.8rem;
}

@media only screen and (max-width: 700px) {
  .footer_content h4 {
    font-size: 0.9rem;
  }

  .footer_content h5 {
    margin-top: 1rem;
    font-size: 0.7rem;
  }
}
</style>
