import React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'

import Routes from './../../config/router.jsx'

export default function Main() {
	return (
		<body>
			<div className={'sidebar'}>
				<div className={'logoDetails'}>
					<i className="bx bxl-c-plus-plus" />
				</div>
				<ul className="nav-list">
					<li >
						<Link to='/home' >
							<i className="bx bx-grid-alt" />
							<span className={'linksName'}>Home</span>
						</Link>
						<span className={'tooltip'}>Home</span>
					</li>
					<li>
						<Link to="/animais">
							<i className="bx bxs-user" />
							<span className={'linksName'}>Animais</span>
						</Link>
						<span className={'tooltip'}>Animais</span>
					</li>
					<li >
						<Link to="/adocoes">
							<i className="bx bxs-heart" />
							<span className={'linksName'}>Adoção</span>
						</Link>
						<span className={'tooltip'}>Adoção</span>
					</li>
					<li>
						<Link to="/interessados">
							<i className="bx bxs-user-detail" />
							<span className={'linksName'}>Interessados em adotar</span>
						</Link>
						<span className={'tooltip'}>Interessados em adotar</span>
					</li>
					<li>
						<Link to="/lar-temporario">
							<i className="bx bxs-cog" />
							<span className={'linksName'}>Lar temporário</span>
						</Link>
						<span className={'tooltip'}>Lar temporário</span>
					</li>
					<li >
						<Link to="/doacoes">
							<i className="bx bx-donate-heart" />
							<span className={'linksName'}>Doações</span>
						</Link>
						<span className={'tooltip'}>Doações</span>
					</li>
					<li>
						<Link to="/eventos">
							<i className="bx bx-calendar-event" />
							<span className={'linksName'}>Eventos</span>
						</Link>
						<span className={'tooltip'}>Eventos</span>
					</li>
					<li>
						<Link to="/denuncias">
							<i className="bx bxs-megaphone" />
							<span className={'linksName'}>Denúncias</span>
						</Link>
						<span className={'tooltip'}>Denúncias</span>
					</li>

					<li>
						<Link to="/colaboradores">
							<i className="bx bxs-user-account " />
							<span className={'linksName'}>Voluntários</span>
						</Link>
						<span className={'tooltip'}>Voluntários</span>
					</li>
					<Link to="/login">
						<li className={'profile'}>
							<i className="bx bx-log-out" id="log_out" />
						</li>
					</Link>
				</ul>
			</div>
			<section className={'homeSection'} id="content">
				<Routes></Routes>
			</section>
		</body>
	);
}
