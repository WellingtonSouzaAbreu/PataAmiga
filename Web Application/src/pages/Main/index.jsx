import React from 'react';
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

import Routes from './../../config/router.jsx'

export default function Main() {
	return (
		<body>
			<div className={styles.sidebar}>
				<div className={styles.logoDetails}>
					<i class="fas fa-paw"></i>
					<span>Pata Amiga</span>
				</div>
				<ul className={styles.navList}>
					<li >
						<Link to="/adocoes">
							<i class="fas fa-heart"></i>
							<span className={styles.linksName}>Adoção</span>
						</Link>
					</li>
					<li>
						<Link to="/animais">
							<i class="fas fa-dog"></i>
							<span className={styles.linksName}>Animais</span>
						</Link>
					</li>
					<li>
						<Link to="/interessados">
							<i class="far fa-id-card"></i>
							<span className={styles.linksName}>Interessados</span>
						</Link>

					</li>
					<li>
						<Link to="/lar-temporario">
							<i class="fas fa-home"></i>
							<span className={styles.linksName}>Lar temporário</span>
						</Link>

					</li>
					<li >
						<Link to="/doacoes">
							<i class="fas fa-hand-holding-usd"></i>
							<span className={styles.linksName}>Doações</span>
						</Link>

					</li>
					<li>
						<Link to="/eventos">
							<i i class="fas fa-calendar-day"></i>
							<span className={styles.linksName}>Eventos</span>
						</Link>

					</li>
					<li>
						<Link to="/denuncias">
							<i class="fas fa-bullhorn"></i>
							<span className={styles.linksName}>Denúncias</span>
						</Link>

					</li>

					<li>
						<Link to="/colaboradores">
							<i class="fas fa-users"></i>
							<span className={styles.linksName}>Colaboradores</span>
						</Link>

					</li>
					<li className={styles.logout}>
						<Link to="/login">
							<i class="fas fa-sign-out-alt" id="log_out"></i>
							<span className={styles.linksName}>Desconectar</span>
						</Link>
					</li>

				</ul>
			</div>
			<section className={styles.homeSection} id="content">
				<Routes></Routes>
			</section>
		</body>
	);
}
