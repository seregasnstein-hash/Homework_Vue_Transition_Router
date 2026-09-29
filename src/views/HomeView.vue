<script>
export default {
  data() {
    return {
      search_name: "",
      users: [
        { id: 1, first_name: "Алтынбек" },
        { id: 2, first_name: "Алмас" },
        { id: 3, first_name: "Алия" },
      ],

    };
  },
  computed: {
    users_filtered() {
      if (!this.search_name) return this.users;
      return this.users.filter((user) =>
        user.first_name
          .toLocaleLowerCase()
          .includes(this.search_name.toLocaleLowerCase()),
      );
    },
    
  },
};
</script>

<template>
  <div>
    <h1>Добро пожаловать на главную страницу</h1>
    <div>
      <router-link :to="{ name: 'about' }">О нас</router-link>
      <router-link :to="{name: 'posts'}"> Посты</router-link>
    </div>
    <div class="search-box">
      <input
        v-model="search_name"
        type="text"
        placeholder="Поиск пользователей..."
        class="search-input"
      />
    </div>
    <ul>
      <li v-for="user in users_filtered">
        <router-link :to="{ name: 'users', params: { id: user.id } }">{{
          user.first_name
        }}</router-link>
      </li>
    </ul>

    
    <!-- <router-link to="/users/22">user 2</router-link> -->
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

body > div {
  min-height: 100vh;
}

div {
  padding: 20px;
}

h1 {
  margin: 0 auto 25px;
  max-width: 700px;
  text-align: center;
  font-size: 32px;
  color: #2c3e50;
}

/* Навигация */
div > div:nth-child(2) {
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

div > div:nth-child(2) a {
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;
}

div > div:nth-child(2) a:hover {
  color: #217dbb;
}

/* Поиск */
.search-box {
  max-width: 700px;
  margin: 0 auto 25px;
  padding: 0;
}

.search-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #ddd;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  background: white;
  transition: 0.2s;
}

.search-input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);
}

/* Список пользователей */
ul {
  max-width: 700px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 10px;
}

li a {
  display: block;
  padding: 16px 20px;
  background: white;
  border-radius: 10px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  transition: 0.2s;
}

li a:hover {
  transform: translateY(-2px);
  background: #3498db;
  color: white;
  box-shadow: 0 6px 15px rgba(52, 152, 219, 0.25);
}
</style>
