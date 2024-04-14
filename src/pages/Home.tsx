import Projects from './Projects'

function Home() {
	return (
		<div className="max-w-prose">
			<section>
				<h1>
					Olá, meu nome é <code>Daniel</code>!
				</h1>
				<h2>
					Instrutor de informática <code>&</code>
					<br />
					Desenvolvedor fullstack <code>&</code>
					<br />
					Gamer Geek
				</h2>

				<p>
					Este é meu cantinho na web, cheio de código limpo e designs que se
					ajustam perfeitamente em qualquer dispositivo. Dê uma espiada nos meus
					projetos e, se algo chamar sua atenção, me mande uma mensagem. Vamos
					criar algo legal juntos!
				</p>

				<hr className="max-w-prose border-gray-800 mb-4" />

				<img
					src="https://skillicons.dev/icons?i=html,css,js,react,tailwind,nodejs,python,mysql&theme=dark"
					alt="Skill Icons"
				/>

				<img src="/images/dev.svg" alt="" />
			</section>

			<Projects />
		</div>
	)
}

export default Home
