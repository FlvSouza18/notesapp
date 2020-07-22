<template>
    <div class="tc-notes-wrapper">
        <adicionar-nota @adicionarNota="adicionarNota"/>
        <div class="tc-notes">
            <nota v-for="(nota, index) in notas" :key="index" :nota="nota"
                  @deletarNota="deletarNota" @notaAtualizar="notaAtualizar"/>
        </div>
    </div>
</template>

<script>
    import Nota from "./Nota";
    import AdicionarNota from "./AdicionarNota";

    export default {
        name: "Notas",
        components: {AdicionarNota, Nota},
        data() {
            return {
                notas: [{
                    title: 'Macaco',
                    body: 'Silvio Santos Ipsum É namoro ou amizadeemm? Ma tem ou não tem o celular do milhãouamm? Um, dois três, quatro, PIM, entendeuam? Ma vale dérreaisam? Ma não existem mulher feiam, existem mulher que não conhece os produtos Jequitiamm. O prêmio é em barras de ouro, que vale mais que dinheiroam. Patríciaaammmm... Luiz Ricardouaaammmmmm.\n' +
                        '\n' +
                        'Ma não existem mulher feiam, existem mulher que não conhece os produtos Jequitiamm. Patríciaaammmm... Luiz Ricardouaaammmmmm. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. Mah é a porta da esperançaam. Mah você não consegue né Moisés? Você não consegueam. Qual é a musicamm?\n' +
                        '\n' +
                        'É namoro ou amizadeemm? Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? Ma vale dérreaisam? Qual é a musicamm? Wellintaaammmmmmmmm. Um, dois três, quatro, PIM, entendeuam?\n' +
                        '\n' +
                        'Ma você está certo dissoam? Mah é a porta da esperançaam. Eu só acreditoammmm.... Vendoammmm. É dinheiro ou não éam? Ma tem ou não tem o celular do milhãouamm? Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae.\n' +
                        '\n' +
                        'Wellintaaammmmmmmmm. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. Um, dois três, quatro, PIM, entendeuam? Você veio da caravana de ondeammm? Ma vai pra lá. Ma não existem mulher feiam, existem mulher que não conhece os produtos Jequitiamm.'
                },{
                    title: 'Macaco',
                    body: 'Silvio Santos Ipsum Ma quem quer dinheiroam? Ma vejam só, vejam só. É bom ou não éam? Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? O prêmio é em barras de ouro, que vale mais que dinheiroam. Eu só acreditoammmm.... Vendoammmm. Ma você, topa ou não topamm.'
                }]
            }
        },
        methods: {
            adicionarNota(){
              this.notas.unshift({title: '', body: ''});
            },
            deletarNota(nota){
               this.notas.splice(this.notas.indexOf(nota), 1);
            },
            notaAtualizar(nota){

            }
        }
    }
</script>

<style lang="scss" scoped>
    .tc-notes-wrapper {
        padding-top: 30px;

        .tc-notes {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 0 auto;
        }
    }
</style>