module.exports = app => {
    const jwt = require('jwt-simple')
    const { authSecret } = require('./../config/.env')
    const bcrypt = require('bcrypt-nodejs')

    const generateStaticPage = async (req, res) => {

        const user = await getUserLoginAccess(req.body.user)

        if (!user) {
            console.log('Usuário não encontrado')
            return res.status(500).send('Usuário não encontrado')
        }

        console.log(user)

        const token = await generateToken(user)

        const HTMLPage = `
        <!DOCTYPE html>
        <html lang="pt-br">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.js"
                integrity="sha512-RT3IJsuoHZ2waemM8ccCUlPNdUuOn8dJCH46N3H2uZoY7swMn1Yn7s56SsE2UBMpjpndeZ91hm87TP1oU6ANjQ=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <title>Recuperar senha de acesso</title>
        </head>
        
        <body onload='checkState()'>
            <div class='container' style="display: flex;justify-content: center;margin-top: 30px;flex-direction: column;">
                
            </div>
        
        
            <script>
                const checkState = async() => {
                    const endpoint = location.href.split('/')[4]
            await axios.get(\`http://192.168.2.183:500/already-changed?endpoint=\` + endpoint)
                        .then(res => {
                            if(res.data){
                                document.getElementsByClassName('container')[0].innerHTML = \`
                                <h2 style="margin: auto;">Senha alterada com sucesso!</h2>
                                <br/>
                                <h2 style="margin: auto;">Para trocar de senha, solicite novamente.</h2>
                            \`
                            }else{
                                document.getElementsByClassName('container')[0].innerHTML = \`
                                <div class='form'>
                                    <h3>Recuparação de senha</h3>
                                    <div>
                                        <label>Nova senha: <input type='password' id='password' /></label> <span>(ViewPassword - ícone)</span>
                                    </div>
                                    <br />
                                    <div>
                                        <label>Confirmar senha: <input type='password' id='confirmPassword' /></label> <span>(ViewPassword -
                                            ícone)</span>
                                    </div>
                                    <br />
                                    <div  style="visibility: hidden;">
                                        <input type='text' id='token' value=${token}></input>
                                    </div>
                                    <button onclick='saveNewPassword()'>Alterar senha</button>
                                </div>
                                \`
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            window.alert('Erro ao alterar senha!')
                        })
                }
                
                const saveNewPassword = async () => {
                    const password = document.querySelector('#password').value
                    const confirmPassword = document.querySelector('#confirmPassword').value
                    const token = document.querySelector('#token').value
        
                    console.log(password)
                    console.log(confirmPassword)
                    console.log(token)
        
                    if (password.length < 8) {
                        window.alert('Senha muito curta!')
                        return
                    }
        
                    if (password != confirmPassword) {
                        window.alert('As senha são diferentes!')
                        return
                    }
        
                    // TODO Tornar o ip dinâmico
                    const endpoint = location.href.split('/')[4]

                    await axios.put(\`http://192.168.2.183:500/recovery-password?endpoint=\` + endpoint, { password, token })
                        .then(res => {
                            document.getElementsByClassName('container')[0].innerHTML = \`
                                <h2 style="margin: auto;">Senha alterada com sucesso!</h2>
                                <br/>
                                <h2 style="margin: auto;">Para trocar de senha, solicite novamente.</h2>
                            \`
                        })
                        .catch(err => {
                            console.log(err)
                            window.alert('Erro ao alterar senha!')
                        })
                }
            </script>
        </body>
        
        </html>
        
        `
        const endpoint = Date.now()

        console.log(user)
        console.log(endpoint)

        app.config.middlewares.newRoutes(`/recuperar-senha/${endpoint}`, HTMLPage)
        
        const url= `http://192.168.2.183:500/recuperar-senha/${endpoint}`
        res.status(200).send(url)
    }

    const getUserLoginAccess = async (user) => {
        return await app.db('users')
            .select('id', 'cellNumber', 'email')
            .where({ cellNumber: user })
            .first()
            .then(user => {
                return user
            })
            .catch(err => {
                console.log(err)
            })
    }

    const generateToken = (user) => {
        return jwt.encode(user, authSecret)
    }

    const decodeToken = (token) => {
        return jwt.decode(token, authSecret)
    }

    const sendEmail = () => {
        let nodemailer = require('nodemailer');

        let remetente = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'wellingtonsouza.wsa100@gmail.com',
                pass: 'Outubro10'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let emailASerEnviado = {
            from: 'Ton <wellingtonsouza.wsa100@gmail.com>',
            to: 'wellingtonsouza@gmail.com',
            subject: 'Enviando Email com Node.js',
            text: 'Estou te enviando este email com node.js'
        };

        res.status(200)
        /*  await remetente.sendMail(emailASerEnviado)
             .then(info => {
                 console.log(info)
                 res.status(200).send(info)
             })
             .catch(err => {
                 console.log(err)
                 res.status(500).send(err)
             }) */
    }

    const saveNewPassword = async (req, res) => {
        const endpoint = req.query.endpoint
        const token = req.body.token
        let password = req.body.password

        const user = await decodeToken(token)
        password = await encryptPassword(password)

        console.log(user)
        console.log(password)
        console.log(token)

        await app.db('users')
            .update({ password: password })
            .where({ id: user.id })
            .then(_ => {
                app.config.middlewares.staticEndpoints.push(endpoint)
                return res.status(200).send()
            })
            .catch(err => {
                console.log(err)
                return res.status(500).send(err)
            })
    }

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const endpointAlreadyUsed = async (req, res) => {
        const endpoint = req.query.endpoint
        console.log(endpoint)

        const alreadyUsed = await filterEndpoints(endpoint)

        res.status(200).send(alreadyUsed)
    }

    const filterEndpoints = async (endpoint) => {
        console.log(app.config.middlewares.staticEndpoints)
        return await !!app.config.middlewares.staticEndpoints.filter((currentPoint) => endpoint == currentPoint).length
    }

    return { generateStaticPage, saveNewPassword, endpointAlreadyUsed }
}
