<script></script>

<template>
  <div>
    <h1>Добро пожаловать на страничку о нас</h1>
    <div class="link">
      <router-link :to="{ name: 'home' }">Главная</router-link>
      <router-link :to="{ name: 'posts' }">Посты</router-link>
    </div>
  </div>
</template>

<style scoped>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  color: #222;
}

div {
  min-height: 100vh;
  padding: 40px 20px;
}

/* Заголовок */
h1 {
  max-width: 700px;
  margin: 0 auto 30px;
  padding: 30px;
  text-align: center;
  font-size: 32px;
  color: #2c3e50;
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

/* Навигация */
div > a {
  display: inline-block;
  margin-right: 15px;
  padding: 12px 22px;
  background: white;
  border-radius: 10px;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  transition: 0.2s;
}

div > a:hover {
  background: #3498db;
  color: white;
  transform: translateY(-2px);
}
.link{
  display: flex;
  width: 100%;
  min-height: 100px;
  justify-content: center;
  align-items: center;
}

</style>

