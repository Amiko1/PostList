<template>
  <div> 
    <base-spinner v-if="isLoading"></base-spinner>
    <div v-for="post in posts" :key="post.id" class="blog-post">
      <div class="blog-img">
        <img src="../images/postImage.jpg" alt="postimage" />
      </div>
      <div class="blog-post__info">
        <h5>February</h5>
        <h5>2/12/2021</h5>
        <h2>
          {{ post.title }}
        </h2>
        <p>
          {{ post.body }}
        </p>
        <p>{{ post.id }}</p>

        <router-link :to="this.$route.path + '/' + post.id">
          <button>Edit Post</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSpinner from "../components/BaseSpinner.vue";
export default {
  components: {
    BaseSpinner,
  },
  data() {
    return {
      posts: null,
      isLoading: false,
      editIsOpen: false,
    };
  },
  created() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      this.isLoading = true;

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      this.isLoading = false;
      const responseData = await response.json();
      this.posts = responseData;

      
    },

    openEdit() {
      this.editIsOpen = true;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Chau+Philomene+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");

h5 {
  font-family: "Concert One", cursive;
}
h2 {
  font-family: "Concert One", cursive;
  font-weight: 700;
  color: #585858;
}
body {
  background-color: #eee;
}
.blog-post {
  width: 90vw;
  max-width: 55rem;
  min-height: 300px;
  display: flex;
  margin: auto;
  margin-top: 3em;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0px 3px 20px -2px rgba(0, 0, 0, 0.75);
  background-color: white;
  transition: 0.3s ease-in;
}
button {
  padding: 1rem;
  font-family: "Concert One", cursive;
  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  background-color: #750080;
}

button:hover {
  cursor: pointer;
  opacity: 0.7;
}

.blog-post:hover {
  transform: scale(1.1);
  background-color: aliceblue;
  cursor: pointer;
}
p {
  color: #585858;
  font-family: "Concert One", cursive;
  font-weight: 400;
}
img {
  margin-top: 0.5em;
  width: 20em;
  transform: translateX(-40px);
  border-radius: 10px;
  box-shadow: 0px 3px 20px -2px rgba(0, 0, 0, 0.75);
}

.blog-img {
  width: 30%;
}

.blog-post__info {
  margin-left: 4em;
}

@media screen and (max-width: 800px) {
  .blog-post {
    padding: 2.5rem;
    flex-direction: column;
    min-height: 400px;
    width: 80vw;
  }

  img {
    width: 80vw;
    height: 120%;

    transform: translateY(-70px);
  }

  .blog-img {
    height: 50%;
  }
  .blog-post__info {
    margin-left: 0;
  }
}
</style>
