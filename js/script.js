  var app = new Vue({
        el: '#app',
        data: {
            pegers: '',
            numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        methods: {
            checkInfo: function() {    
                console.log(this.pegers);
                    if (this.numbers.indexOf(this.pegers) == -1) {
                        this.numbers.indexOf(this.pegers);
                        this.numbers.push(this.pegers); }
                    
                    else {
                    console.log(false); 

            }
        }
    }
})

var app = new Vue({
    el: '#appTwo',
    data: {
        login: '',
        password: '',
        date: '',
        age: 22,
        email: ''
       
    },
    
    methods: {
        loginInfo:function() {

            // # code...
        
        }
    }
});