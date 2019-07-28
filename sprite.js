

function Personagem(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.quantPulos = 1;
    this.gravidade = 1.6;
    this.velocidade = 0;
    this.forcaDoPulo = 20;
    this.vel_x = 0;
    this.acc = 0.5;



    this.atualiza = function() {
        // aceleração do personagem
        this.acc = 0;
        // velocidade do personagem recebe a própria velocidade + a aceleração
        this.vel_x += this.acc;
        /* a posição x do personagem recebe a propria posição + a velocidade x */
        this.x += this.vel_x;

        /* cria a gravidade do objeto
            a velocidade recebe ela mesma + a gravidade*/
        this.velocidade += this.gravidade;
        // o y do objeto recebe o seu proprio y + a velocidade + a gravidade
        // (nessa linha a gravidade já foi adicionada pela linha acima em: this.velocidade += this.gravidade;).
        this.y += this.velocidade;

        // mantem o bloco no chao da tela.
        if (this.y + this.altura >= ALTURA) {
            this.y = ALTURA - this.altura;
            this.quantPulos = 0;
        }
    }



    this.desenha = function() {
        ctx.fillStyle = "red"; // configura uma cor
        ctx.fillRect(this.x, this.y, this.largura, this.altura); // desenha no canvas nas posiçoes definidas nos parâmentros.
    }

    this.pula = function() {
        if (this.quantPulos < maxPulos) {
        /* o método atualiza() logo acima está sempre sendo chamado no loop do jogo,
           ou seja, todas as variáveis utilizadas no método atualiza() estão
           sempre sendo utilizadas no loop do jogo. Por isso, ao atribuirmos
           um valor negativo (que no caso é: -this.forcaDoPulo) em
           this.velocidade, aqui no método this.pula(), ao chamarmos esse método this.pula(),
           esse valor negativo tbm será inserido na propriedade this.velocidade do
           método atualiza(), por isso que conseguimos dar a movimentação de pulo ao Personagem */
           this.velocidade = -this.forcaDoPulo;
           this.quantPulos++;
           console.log(this.quantPulos);
       }




    }

    this.esquerda = function() {
        this.vel_x = -5;

    }

    this.direita = function() {
        //this.x += 20;
        this.vel_x = 5;

    }

    this.stop = function() {
        this.vel_x = 0;
    }



}

// cria o jogador1
jogador1 = new Personagem(50, 50, 60, 60);
