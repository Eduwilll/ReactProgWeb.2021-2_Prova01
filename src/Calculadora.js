import React from 'react';
import './index.css';

class Operacoes extends React.Component {
// Criando o construtor para receber as tres variaveis necessarias para o projeto
  constructor(props) {
    super(props);
    this.state = {
      numero1: 0,
      numero2: 0,
      resultado: 0
    };
    this.handleNumero1 = this.handleNumero1.bind(this);
    this.handleNumero2 = this.handleNumero2.bind(this);
  }
//setando as variaveis para que ela possam ser modificadas ao longo do codigo
  handleNumero1(event) {
    this.setState({
      numero1: Number(event.target.value),
    });
  }
  handleNumero2(event) {
    this.setState({
      numero2: Number(event.target.value),
    });
  }
  //criando as funçôes para que o calculo seja feito, e fazendo com que eles consigam ser modificados
  opera(op) {
    switch (op) {
      case 'somar':
        this.setState({
          resultado: this.state.numero1 + this.state.numero2
        });
        break;
      case 'subtrair':
        this.setState({
          resultado: this.state.numero1 - this.state.numero2
        });
        break;
      case 'multiplicar':
        this.setState({
          resultado: this.state.numero1 * this.state.numero2
        });
        break;
      case 'dividir':
        this.setState({
          resultado: this.state.numero1 / this.state.numero2
        });
        break;
    }
  }
  //criando a renderização da pagina para que consiga visualizar
  render() {
    return (
      <div class="container" id= "container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="card ">
              <div class="card-header text-center">
                Web
              </div>
              <div class="card-body " id="fundo">
                <h5 class="card-title text-center">Calculadora feita por Juan Carlos Fernandes dos Santos</h5>
                <p class="card-text text-center">Calculadora-Prova01</p>
                <form class="text-center">
                  <div class="form-group ">
                    <label for="n1">Número 1  -    </label>
                    <input value={this.state.numero1} onChange={this.handleNumero1} />
                  </div>
                  <div class="form-group">
                    <label for="n2">Número 2  -     </label>
                    <input value={this.state.numero2} onChange={this.handleNumero2} />
                  </div>
                </form >
                <form class="">
                  <div class="form-group row" >
                    <label for="n1" href="opcao" class="col-sm-7 col-form-label text-right" >Selecione a opção desejada:</label>
                    <div class="col-sm-3">
                      <fieldset class="border p-1">
                        <div class="form-group">

                          <label onClick={() => this.opera('somar')}>
                            <input type="radio" name="radio1" />{' '}
                            Adição
                          </label>
                        </div>
                        <div class="form-group">
                          <label onClick={() => this.opera('subtrair')}>
                            <input type="radio" name="radio1" />{' '}
                            Subtração
                          </label>
                        </div>
                        <div class="form-group">
                          <label onClick={() => this.opera('multiplicar')}>
                            <input type="radio" name="radio1" />{' '}
                            Multiplicação
                          </label>
                        </div>
                        <div class="form-group">
                          <label onClick={() => this.opera('dividir')}>
                            <input type="radio" name="radio1" />{' '}
                            Divisão
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </form>
                <form class="text-center">
                  <label for="resultado" >Resultado-</label>
                  <input value={this.state.resultado} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Operacoes
