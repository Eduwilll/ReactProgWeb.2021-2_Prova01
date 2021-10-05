import React, { useState } from 'react';
import './App.css';

class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num1 : "",
            num2 : "",
            resultado: "",
            subtracao: "subtracao",
            somar: "somar",
            multiplicacao:"multiplicacao",
            divisao: "divisao"
        };
    }

    
    handleInputChange = (event) => {
    
        console.log(event)
        console.log(event.target.num1)
        console.log(event.target.num2)
        console.log(event.target.BasicOp)
        console.log(event.target.value)
        console.log(event.target.resultado)

        this.setState({
            [event.target.name]: event.target.value

        })
        
        const x = parseFloat(this.state.num1);
        const y = parseFloat(this.state.num2);
        const soma = x + y;
        const subtracao = parseFloat( x - y)
        const multiplicacao = x * y
        const divisao = (x / y).toFixed(2)
       
        switch(event.target.value) {
            case "somar":
                this.setState({
                    resultado: soma
                })
                break;
            case "subtracao":
                this.setState({
                    resultado: subtracao
                })    
                break;
            case "multiplicacao":
                this.setState({
                    resultado: multiplicacao
                })    
                break;
            case "divisao":
                this.setState({
                    resultado: divisao
                })
                break;
        }
    }

    render() {
        
        const {resultado} = this.state
        const {num1} = this.state
        const {num2} = this.state   
        const {BasicOp} = this.state

        return (

            <div class="container-fluid">
                <fieldset class="border p-1 rounded">
                <div class="row">
                    <div class="col-md-12">
                        <p>Numero 1: <input type="text" name="num1"  onChange={this.handleInputChange} /></p>
                        <p>Numero 2: <input type="text" name="num2"  onChange={this.handleInputChange}/></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <p id ="opcao">Escolha a operação desejada</p>
                    </div>
                    <div class="col-md-6">
                        <fieldset class="border p-1 ">
                        <div class="form-group">
                            <label>
                                <input type="radio"
                                    name="BasicOp" 
                                    value={this.state.somar} 
                                    onChange={this.handleInputChange}/> Adição
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                <input type="radio"  
                                    name="BasicOp" 
                                    value={this.state.subtracao} 
                                    onChange={this.handleInputChange}/> Subtração
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                <input type="radio"
                                    name="BasicOp" 
                                    value={this.state.multiplicacao} 
                                    onChange={this.handleInputChange}/> Multiplicação
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                <input type="radio" 
                                    name="BasicOp" 
                                    value={this.state.divisao} 
                                    onChange={this.handleInputChange}/> Divisão
                            </label>
                        </div>
                        </fieldset>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12" >
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