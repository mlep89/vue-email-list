/*generare 10 indirizzi email e stamparli in pagina 
all'interno di una lista*/
var root = new Vue({
    el: '#root',
    data: {
    emailList: [],
    message: 'Hello World'
    },
    mounted() {
    const self = this;
    for (i=0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (result) {
         console.log(result.data.response);
         self.emailList += result.data.response;
     });
    }
    }
    });