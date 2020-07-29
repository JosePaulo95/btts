var App = new Vue({
  el: "#app",
  data() {
    return {
      times:[
        {
          nome: "flamengo",
          atk: 1.29,
          def: 0.25
        },
        {
          nome: "corinthians",
          atk: 1.2,
          def: 0.5
        },
        {
          nome: "FC sermao",
          atk: 3.01,
          def: 1.15
        }
      ],
      timeHome: null,
      timeAway: null
    }
  },  
  computed: {
    
  },
  
  methods: {
    selecionarHome(time){
      this.timeHome = time;
    },
    selecionarAway(time){
      this.timeAway = time;
    },
    golsHome(mostrar_casas_decimais=false){
      if(mostrar_casas_decimais){
        return (Math.round(this.timeHome.atk*this.timeAway.def*100))/100
      }else{
        return Math.round(this.timeHome.atk*this.timeAway.def)
      }
    },
    ambasMarcam(){
      return this.golsAway()>0 && this.golsHome()>0;
    },
    golsAway(mostrar_casas_decimais=false){
      if(mostrar_casas_decimais){
        return (Math.round(this.timeHome.def*this.timeAway.atk*100))/100
      }else{
        return Math.round(this.timeHome.def*this.timeAway.atk)
      }
    }
  }
});
