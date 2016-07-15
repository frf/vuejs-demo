new Vue({
    el:"body",
    data: {
        cep:'',
        endereco: {},
        naoLocalizado: false
    },
    methods:{
        buscar: function ()
        {
            var self = this;
            if(/^[0-9]{8}$/.test(this.cep)){
                jQuery.getJSON('http://viacep.com.br/ws/'+this.cep+'/json/',function (endereco) {
                    self.endereco = endereco;
                    jQuery(self.numero).focus();
                });
            }
        }
    }
});

