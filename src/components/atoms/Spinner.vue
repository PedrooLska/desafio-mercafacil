<template>
  <div class="grid">
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100vh;
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #ff3d58;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
