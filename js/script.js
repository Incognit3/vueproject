var app = new Vue({
    el: '#app',
    data: { paradiseOne: 0,
            nortsideTwo: 0
           
        },
        methods: {
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
            if(parseInt(this.paradiseOne)+parseInt(this.nortsideTwo)>0) return "grintxt";
            if(parseInt(this.paradiseOne)+parseInt(this.nortsideTwo)<0) return "redtxt";
        }

        
    }

});


       
   