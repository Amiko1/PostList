<template>
  <div class="form"> 
    <form @submit.prevent="onSubmit">
      <input id="input" v-model.trim="title" :placeholder="posts.title" />

      <textarea id="textarea" v-model.trim="description"> </textarea>
      <button type="submit" class="button">SAVE</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      description: "",
      posts: [],
    };
  },

  methods: {
    onSubmit() {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          id: this.id,
          desc: this.description,
          title: this.title,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        

      this.$router.replace("/postlists");
    },
    async loadPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const responseData = await response.json();
      this.posts = responseData.find((post) => post.id == this.id);
      this.description = this.posts.body;
      console.log(this.description);
    },
  },
  
  created() {
    this.loadPosts();
  },
};
</script>

<style scoped>
.form {
  margin-top: 10em;
}
.button {
  margin-left: 38%;
  width: 25%;
}

input,
textarea {
  display: block;
  width: 90%;
  max-width: 780px;
  height: 40px;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #14213d;
  border: 2px solid #8d99ae;
  border-radius: 20px;
  margin: 20px auto;
  outline: none;
}

textarea {
  height: 250px;
  font-size: 18px;
}
</style>
