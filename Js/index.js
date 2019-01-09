/**
 * Created by Liumin on 2018/5/25.
 */

var a1 = {
    template: '<p>this is my header</p>'
};

var obj = {
    message : 'hello',
    rawHtml : "<span style='color: red;'>你好啊</span>",
};

var vm = new Vue({
    el : '#app',
    data : obj,
    methods: {
        reversedMessage : function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('');
        }
    }
});

var vm2 = new Vue({
    el : '#apple',
    data : {
        name : 'a',
        isOk : false,
        isHidden : true,
        message : '',
        textMessage : '',
        checked : true,
        checkedNames : [],
        radioNames : '',
        selected : '',
        options : [
            { text: 'One',value : 'A' },
            { text: 'Two',value : 'B' },
            { text: 'Three',value : 'C' },
        ],
        number : 1,
        counter: 1,
        href : 'https:www.baidu.com',
        is : false,
        loginType : 'username',
        classObj : {
            active : true,
            'J-tel-submit' : false
        },
        items : [
            {message: 1},
            {message: 2}
        ]
    },
    components: {
        'my-header': a1
    },
    methods: {
        greet : function(value,event){
            // `this` 在方法里指向当前 Vue 实例
//                    alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            console.log(value);
            if (event) {
//                        alert(event.target.tagName)
            }
        }
    }
});