import Link from 'next/link'
import '../styles/Not-Found.sass'

export default function NotFound() {
    return (
        <div className="not-found__container" >
            <p className="not-found__error-code">404</p>
            <p className="not-found__error-message">Página não encontrada</p>
            <p className="not-found__error-description">
                Conteúdo não encontrado ou não existe
            </p>
            <Link href="/" className="not-found__link">
                Voltar
            </Link>
        </div>
    )
}