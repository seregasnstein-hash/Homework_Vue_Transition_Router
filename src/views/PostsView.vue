<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "Новость 1" },
        { id: 2, title: "Новость 2" },
        { id: 3, title: "Новость 3" },
        { id: 4, title: "Новость 4" },
        { id: 5, title: "Новость 5" },
      ],
      current_page: 1,
      posts_per_page: 3,
    };
  },
  computed: {
    post_paginated() {
      return this.posts.slice(
        (this.current_page - 1) * this.posts_per_page,
        this.current_page * this.posts_per_page,
      );
    },
  },
};
</script>

<template>
  <h1>Посты</h1>
  <div>
    <router-link :to="{ name: 'home' }">Главная</router-link>
    <router-link :to="{ name: 'about' }">О нас</router-link>
  </div>
  <div>
    <input v-model="current_page" />
  </div>

  <ul>
    <li v-for="post in post_paginated" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
  <div style="display: flex; gap: 12px; padding: 0 24px">
    <div
      v-for="n in Math.ceil(posts.length / posts_per_page)"
      @click="current_page = n"
      style="cursor: pointer"
      :style="{
        cursor: 'pointer',
        fontWeight: current_page == n ? 'bold' : '',
      }"
    >
      {{ n }}
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

/* Заголовок */
h1 {
  max-width: 700px;
  margin: 40px auto 25px;
  padding: 25px;
  text-align: center;
  font-size: 32px;
  color: #2c3e50;
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

/* Навигация */
h1 + div {
  max-width: 700px;
  margin: 0 auto 25px;
  padding: 15px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  gap: 25px;
}

h1 + div a {
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;
}

h1 + div a:hover {
  color: #217dbb;
}

/* Поле страницы */
h1 + div + div {
  max-width: 700px;
  margin: 0 auto 20px;
  padding: 0;
}

h1 + div + div input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #ddd;
  border-radius: 12px;
  outline: none;
  background: white;
  font-size: 16px;
  transition: 0.2s;
}

h1 + div + div input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);
}

/* Посты */
ul {
  max-width: 700px;
  margin: 0 auto 25px;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 12px;
  padding: 18px 20px;
  background: white;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
  color: #2c3e50;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  transition: 0.2s;
}

li:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

/* Пагинация */
ul + div {
  max-width: 700px;
  margin: 0 auto;
  justify-content: center !important;
  padding: 0 !important;
}

ul + div > div {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: white;
  color: #3498db;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  transition: 0.2s;
}

ul + div > div:hover {
  background: #3498db;
  color: white;
  transform: translateY(-2px);
}
</style>
