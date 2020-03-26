<template>
  <div id="spinner"></div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style>
#spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #0a0a01a8;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>