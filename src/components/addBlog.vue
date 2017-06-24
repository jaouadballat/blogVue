<template>
    <div id="add-blog">
		<h2>Add a New Blog</h2>
		<h3 v-if="submited">Post added successfly</h3>
		<form v-if="!submited">
			<label for="">Title:</label>
			<input type="text" required  v-model.lazy="blog.title"/>
			<label for="">Content:</label>
			<textarea v-model.lazy="blog.content"></textarea>	
		<div id="checkboxes">
			<label>Ninja</label>
			<input type="checkbox" value="Ninja" v-model="blog.categories">
			<label>Wizard</label>
			<input type="checkbox" value="Wizard" v-model="blog.categories">
			<label>Mario</label>
			<input type="checkbox" value="Mario" v-model="blog.categories">
			<label>Cheese</label>
			<input type="checkbox" value="Cheese" v-model="blog.categories">
		</div>
		<label >Authors:</label>
		<select v-model="blog.author">
			<option v-for="author in authors">{{ author }}</option>
		</select>
			<button v-on:click.prevent="post">Add Blog</button>		
		</form>
		<div id="preview">
			<h3>Preview Blog</h3>
			<p>Blog Title: {{ blog.title }}</p>
			<p>Blog Content:</p>
			<p> {{ blog.content }}</p>
			<p>Blog Categories:</p>
			<ul>
				<li v-for="category in blog.categories">{{ category }}</li>
			</ul>
		<p>Author: {{ blog.author }}</p>
		</div>
    </div>
</template>

<script>

export default {
	data(){
		return{
			submited:false,
			blog:{
				title:"",
				content:"",
				categories:[],
				author:""
			},
			authors:['jaouad', 'mohammed', 'hakim']
		}
	},
	methods:{
		post(){
			this.$http.post('https://jsonplaceholder.typicode.com/posts',{
				title:this.blog.title,
				content: this.blog.content,
				postId:1
			}).then((data)=>{
				this.submited = true;
			})
		}
	}	
}

</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>