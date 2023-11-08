import React from "react"
import Card from "../components/Card"
import FormGroup from "../components/form-group"

class Login extends React.Component{

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log(this.state.email)
        console.log(this.state.senha)
    }
    render(){
        return(
           <div className='container'>
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                        <div className="bs-docs-section">
                            <Card title='Login'>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                               <FormGroup label='Email: *' htmlFor='inputEmail'>
                                                    <input
                                                        value={this.state.email}
                                                        onChange={e => this.setState({email: e.target.value})}
                                                        type='email'
                                                        className='form-control' 
                                                        id='inputEmail' 
                                                        aria-describeby='emailHelp' 
                                                        placeholder='Digite o Email' />
                                               </FormGroup>
                                               <FormGroup label='Senha: *' htmlFor='inputSenha'>
                                                    <input 
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        type='password' 
                                                        className='form-control' 
                                                        id='inputSenha' 
                                                        placeholder='Digite a senha' />
                                               </FormGroup>
                                                <button className="btn btn-success mt-3 me-3" onClick={this.entrar}>Entrar</button>
                                                <button className="btn btn-danger mt-3">Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
           </div> 
        )
    }
}

export default Login