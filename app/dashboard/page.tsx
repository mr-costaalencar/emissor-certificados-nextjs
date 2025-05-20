export function Dashboard() {
  return (
    <div className="container mt-4">
        <h1>Bem-vindo!</h1>
        <div className="list-group">
            <a href="alunos.html" className="list-group-item list-group-item-action">Gerenciar Alunos</a>
            <a href="cursos.html" className="list-group-item list-group-item-action">Gerenciar Cursos</a>
            <a href="usuarios.html" className="list-group-item list-group-item-action">Gerenciar Usuários</a>
            <a href="certificados.html" className="list-group-item list-group-item-action">Emitir Certificados</a>
            <a href="validacao.html" className="list-group-item list-group-item-action">Validar Certificado</a>
            <a href="validacao.html" className="list-group-item list-group-item-action text-danger">Sair</a>
        </div>
    </div>
  );
}