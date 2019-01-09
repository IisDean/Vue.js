
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
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