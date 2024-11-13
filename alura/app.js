function criaCartao(categoria, pergunta, resposta) {
    let  container = document.getElementById('conteiner')
    let  cartao = document.createElement('articles')
    cartao.className = 'cartao'

cartao.innerHTML = `
   div class="cartao__conteudo">
                    <h3>programaçao</h3>
                    <div class="cartao__conteudo__pergunta">
                       <p> qual a capital do Brasil?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>a capital do brasil é Brasilia</p>
                    </div>
                </div>
`
container.appendChild(cartao)

}
