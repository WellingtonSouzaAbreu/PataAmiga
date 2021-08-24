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
						<Link to='/painel-de-controle' >
							<i className="bx bx-grid-alt" />
							<span className={'linksName'}>Painel de Controle</span>
						</Link>
						<span className={'tooltip'}>Painel de Controle</span>
					</li>
					<li>
						<Link to="/animais"> {/* Não encontrei um cahorro par ao ícone */}
							<i className="bx bxs-user" /> {/* TODO - Creio que seria melhor se tivesse uma tela que mostrasse os animais e a partir daí mostrasse suas 
																	histórias de resgate, afinal, cada cão tem um resgate. Aqui estava resgate*/}
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
					<li >
						<Link to="/doacoes">
							<i className="bx bx-donate-heart" />
							<span className={'linksName'}>Doações</span>
						</Link>
						<span className={'tooltip'}>Doações</span>
					</li>
					<li>
						<Link to="/colaboradores">
							<i className="bx bxs-user-account " />
							<span className={'linksName'}>Voluntários</span>
						</Link>
						<span className={'tooltip'}>Voluntários</span>
					</li>
					<li>
						<Link to="/usuarios">
							<i className="bx bxs-user-detail" /> {/* TODO à discutir. A ONG terá acesso direto aos dados do usuários? */}
							<span className={'linksName'}>Usuários do App</span>
						</Link>
						<span className={'tooltip'}>Usuários do App</span>
					</li>
					<li>
						<Link to="/configuracoes">
							<i className="bx bxs-cog" />
							<span className={'linksName'}>Configurações</span>
						</Link>
						<span className={'tooltip'}>Configurações</span>
					</li>
					<li className={'profile'}>
						<i className="bx bx-log-out" id="log_out" />
					</li>
				</ul>
			</div>
			<section className={'homeSection'} id="content">
				<Routes></Routes>
			</section>
		</body>
	);
}
