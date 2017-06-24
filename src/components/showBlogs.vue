<template>
    <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blogs Article</h1>
      <div class="single-blog" v-for="blog in blogs">
        <h1 v-ranbow>{{ blog.title | to-uppercase }}</h1>
        <article>{{ blog.body |snipped }}</article>
      </div> 
    </div>
</template>

<script>


export default {

  data(){
    return{
      blogs: []
    }
  },
  methods:{
    
  },
  filters:{
    toUppercase(input){
      return input.toUpperCase();
    },
    snipped(input){
      return input.slice(0, 100)+"...";
    }
  },
  directives:{
    'ranbow':{
      bind(el, binding, vnode){
        el.style.color = "#"+Math.random().toString().slice(2, 8);
      }
    },
    'theme':{
        bind(el, binding, vnode){
          if(binding.value === 'wide'){
            el.style.maxWidth = '1200px'
          }
          else if(binding.value === 'narrow'){
            el.style.maxWidth = '560px'
          }

          if(binding.arg === 'column'){
            el.style.background = '#ddd',
            el.style.padding = '20px'
          }
  }
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(data=>{
      this.blogs = data.body.slice(0, 10)
    })
  } 
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  margin: 10px 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: #eee;
}

</style>