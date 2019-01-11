
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

Vue.component('button-counter', {
	data: function(){
		return {
			count: 0,
			isShow: false
		}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

var app = new Vue({
	el: '#app',
	data: {
		obj: '123',
		groceryList: [
	      { id: 0, text: '蔬菜' },
	      { id: 1, text: '奶酪' },
	      { id: 2, text: '随便其它什么人吃的东西' }
	    ],
	    html: '<p style="color: #f00;">123456</p>',
	    isButtonDisabled: true,
	    message: "hello!",
	    firstName: 'Foo',
	    lastName: 'Bar',
	    checked: false,
	    checkedNames: []
	},
	created: function(){
		console.log('a is:'+this.obj);
	},
	computed: {
		reverseMessage: function(){
			return this.message.split('').reverse().join('');
		},
		fullName: function(){
			return this.firstName +' '+ this.lastName;
		}
	}
});
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [{ id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }],
    postFontSize: 1
  }
})