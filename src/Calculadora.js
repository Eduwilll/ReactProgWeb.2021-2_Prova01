import React from 'react';
import './App.css';
//Class Componente
class Calculadora extends React.Component {
    //construtor
    constructor(props) {
        super(props);
        this.state = {
            num1 : "",
            num2 : "",
            resultado: "",
    
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    //definem o estado novo, de acordo com o campo de entrada que está sendo editado no momento.
    handleInputChange = (event) => {
    
        console.log(event)
        console.log(event.target.num1)
        console.log(event.target.num2)
        console.log(event.target.value)
        console.log(event.target.resultado)
        //Atualiza em tempo real os valores dos eventos.
        this.setState({
            [event.target.name]: event.target.value
        })
        //switch recebendo o valor dos radios para fazer as operacoes
        switch(event.target.value) {
            case "somar":
                this.setState({
                    resultado: parseFloat(this.state.num1) + parseFloat(this.state.num2)
                })
                break;
            case "subtracao":
                this.setState({
                    resultado: parseFloat(this.state.num1) - parseFloat(this.state.num2)
                })    
                break;
            case "multiplicacao":
                this.setState({
                    resultado: parseFloat(this.state.num1) * parseFloat(this.state.num2)
                })    
                break;
            case "divisao":
                this.setState({
                    resultado: (parseFloat(this.state.num1) / parseFloat(this.state.num2)).toFixed(2)
                })
                break;
            default:
                break;
        }
     
    }
    //Renderizando Elementos
    render() {
        
        const {resultado} = this.state
        const {num1} = this.state
        const {num2} = this.state   
        const {BasicOp} = this.state
  
        return (

            <div className="container-fluid">
                <fieldset className="border p-1 rounded">
                <div className="row">
                    <div className="col-md-12">
                        <p>Numero 1: <input type="text" name="num1"  onChange={this.handleInputChange} /></p>
                        <p>Numero 2: <input type="text" name="num2"  onChange={this.handleInputChange}/></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p id ="opcao">Escolha a operação desejada</p>
                    </div>
                    <div className="col-md-6">
                        <fieldset className="border p-1 border-secondary">
                        <div className="form-group">
                            <label >
                                <input type="radio"
                                    name="BasicOp" 
                                    value="somar"
                                    onChange={this.handleInputChange}/> Adição
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="radio"  
                                    name="BasicOp" 
                                    value="subtracao"
                                    onChange={this.handleInputChange}/> Subtração
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="radio"
                                    name="BasicOp" 
                                    value="multiplicacao" 
                                    onChange={this.handleInputChange}/> Multiplicação
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="radio" 
                                    name="BasicOp" 
                                    value="divisao"
                                    onChange={this.handleInputChange}/> Divisão
                            </label>
                        </div>
                        </fieldset>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" >
                        <p>Resultado: <input type="text" name="resultado" value={resultado} onChange={this.handleInputChange}/></p>
                        <p>Num1:{num1} Num2:{num2} Radio:{BasicOp} resultado:{resultado} </p>
                    </div>
                </div>
                </fieldset>
            </div>
        );
    }
  }
  
  export default Calculadora;