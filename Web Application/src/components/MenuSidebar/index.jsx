import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'

import styles from './styles.module.css'
import axios from 'axios'

import { baseApiUrl } from '../../services/baseApiUrl.js'

export default function Main(props) {

	const [redirect, setRedirect] = useState(false)
	const [logged, setLogged] = useState(false)

	const routeSelected = async (e, route) => {
		console.log(route)
		if (route != '/login') {
			console.log(axios.defaults.headers.common['Authorization'])
			const validToken = await axios.post(`${baseApiUrl}/validate-token`)
				.then(res => res.data)
				.catch(err => console.log(err))

			console.log(validToken)
			if (validToken) {
				console.log('Token VÀLIDO!')
				setLogged(true)
				return
			} else {
				console.log(redirect)
				console.log('Token INVÀLIDO!')
				redirectToLogin()
				setLogged(false)
				return null
			}
		}
	}

	const redirectToLogin = () => {
		 setRedirect(true)
		 setTimeout(() => {
			setRedirect(false)
		 },500)
		 return
	}

	const onShowLogin = () => {
		axios.defaults.headers.common['Authorization'] = ''
		localStorage.removeItem('userData')
	}

	return (
		<body>
			{redirect && <Redirect to='/login' />}
			<div className={styles.sidebar}>
				<div className={styles.logoDetails}>
					<i class="fas fa-paw"></i>
					<span>Pata Amiga</span>
				</div>
				<ul className={styles.navList} >
					<li >
						<Link to="/adocoes" tabindex="-1" onClick={(e) => routeSelected(e, '/adocoes')}>
							<i class="fas fa-heart" ></i>
							<span className={styles.linksName} >Adoção</span>
						</Link>
					</li>
					<li>
						<Link to="/animais" tabindex="-1">
							<i class="fas fa-dog"></i>
							<span className={styles.linksName}>Animais</span>
						</Link>
					</li>
					<li>
						<Link to="/interessados" tabindex="-1">
							<i class="far fa-id-card"></i>
							<span className={styles.linksName}>Interessados</span>
						</Link>

					</li>
					<li>
						<Link to="/lar-temporario" tabindex="-1">
							<i class="fas fa-home"></i>
							<span className={styles.linksName}>Lar temporário</span>
						</Link>

					</li>
					<li >
						<Link to="/doacoes" tabindex="-1">
							<i class="fas fa-hand-holding-usd"></i>
							<span className={styles.linksName}>Doações</span>
						</Link>

					</li>
					<li>
						<Link to="/eventos" tabindex="-1">
							<i i class="fas fa-calendar-day"></i>
							<span className={styles.linksName}>Eventos</span>
						</Link>

					</li>
					<li>
						<Link to="/denuncias" tabindex="-1">
							<i class="fas fa-bullhorn"></i>
							<span className={styles.linksName}>Denúncias</span>
						</Link>

					</li>

					<li>
						<Link to="/colaboradores" tabindex="-1">
							<i class="fas fa-users"></i>
							<span className={styles.linksName}>Colaboradores</span>
						</Link>

					</li>
					<li className={styles.logout}>
						<Link to="/login" tabindex="-1" onClick={onShowLogin}>
							<i class="fas fa-sign-out-alt" id="log_out"></i>
							<span className={styles.linksName}>Desconectar</span>
						</Link>
					</li>

				</ul>
			</div>
			<section className={styles.homeSection} id="content">
				{props.children}
			</section>
		</body>
	);
}
