<template>
          <div class="painel">
          <h2 class="painel-titulo" @dblclick="visivel =!visivel"> {{ titulo }} </h2>
          <transition name="painel-fade">
            <div class="painel-conteudo" v-show='visivel'>
              <slot></slot>
            </div>
          </transition>
      </div>
</template>


<script>
  export default {
    props: ['titulo'],

    data(){
      return{
        visivel: true
      }

    }
}
</script>


<style scoped>
.painel {
    padding: 0 auto;
    border: solid 11px #A9C6D9;
    display: inline-block;
    margin: 30px;
    box-shadow: 5px 5px 5px #A9C6D9;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 0.5px;
    background: #BBDDF2;
    margin: 0px 0px 3px 0px;
    padding: 0px;
    text-transform: uppercase;
  }

  * {
    box-shadow: 0.5px 0.5px 0.5px 0.5px;
  }

  .painel-fade-enter, .painel-leave-active{
    opacity: 0;
  }

  .painel-fade-enter-active, .painel-fade-leave-active{
    transition: opacity .3s;
  }

</style>
