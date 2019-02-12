// var data = {
//         header: 'Counter Program',
//         count:0
// };
// Vue.component('counter', {
//     data: function(){
//         return data
//     },
//     template:`<div><h2>{{header}}</h2>
//                 <button v-on:click="count++">+</button>
//                 <span>{{count}}</span>
//             </div>`,
//     methods:{
//         increase:function(){
//             this.count++;
//         }
//     }
// });
// new Vue({
//     el: "#app"
// });

// Vue.component('section-header',{
//     template:'<h2>Header</h2>'
// });
// var comp1 = {
//     template:'<div>Content 1</div>'
// };
// var comp2 = {
//     template:'<div>Content 2</div>'
// };
// var footer = {
//     template:'<p><b>Footer</b></p>'
// };
// new Vue({
//     el: "#app1",
//     components:{
//         'section-content':comp1,
//         'section-footer':footer
//     }
// });
// new Vue({
//     el: "#app2",
//     components:{
//         'section-content':comp2
//     }
// });

// Vue.component('counter', {
//     data: function(){
//         return {
//             header: 'Counter Program',
//             count:0
//         }
//     },
//     template:`<div><h2>{{header}}</h2>
//                 <button v-on:click="increase">+</button>
//                 <span>{{count}}</span>
//             </div>`,
//     methods:{
//         increase:function(){
//             this.count++;
//         }
//     }
// });
// new Vue({
//     el: "#app3"
// });

Vue.component('counter', {
    data: function(){
        return {
            header: 'Social Program.',
            count: 0,
            paradiseOne: 0,
            nortsideTwo: 0
        }
    },
    template:`<div><h2>{{header}}</h2>
                <button v-on:click="colbigo">+</button>
                <span>{{count}}</span>
                 <input type="text" v-model="paradiseOne" v-bind:class="autz()">
   			   <input type="text" v-model="nortsideTwo" v-bind:class="autz2()">
            </div>`,
    
    methods:{
        increase:function() {
            this.count++;
    	
    	},
        autz: function() {
             if (parseInt(this.paradiseOne) > 0) return "green";
             if (parseInt(this.paradiseOne) < 0) return "red";
              
        },

         autz2: function() {
             if (parseInt(this.nortsideTwo) > 0) return "green";
             if (parseInt(this.nortsideTwo) < 0) return "red";
              
        },
        total:function() {
           	return parseInt(this.paradiseOne)+parseInt(this.nortsideTwo);
        
        },
        colbigo:function(){
            console.log(this.tot);
            this.count = Number(this.paradiseOne)+Number(this.nortsideTwo);
            
        }

    }

});

new Vue({
    el: "#app4"

});