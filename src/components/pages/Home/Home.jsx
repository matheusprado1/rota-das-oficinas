import { Container } from "./styles";

const Home = () => {
    return (
        <Container>
            <h1>Bem vindo ao Teste de Programação Rota das Oficinas - Matheus Prado</h1>
            <h2>Para navegar entre as tarefas basta clicar nos links no header</h2>
            <h3>O projeto consiste em um teste de programação que envolve o desenvolvimento de três tarefas diferentes. As tarefas são:</h3>
            <ol>
                <li>Conversor de Números: Um programa que recebe um número romano como entrada e o converte para seu equivalente arábico e vice-versa.</li>
                <li>Jogo da Vida de John Horton Conway: Uma implementação do famoso "Jogo da Vida" criado por John Horton Conway. O jogo simula a evolução de células em uma grade, seguindo regras simples.</li>
                <li>Divisor de Contas de Restaurante: Um programa que recebe o valor total da conta de um restaurante, o número de pessoas e calcula quanto cada pessoa deve pagar, considerando uma divisão justa.</li>
            </ol>
            <p>Para acessar o código fonte do projeto, visite o seguinte link: <a href="https://github.com/matheusprado1/rota-das-oficinas">https://github.com/matheusprado1/rota-das-oficinas</a></p>
        </Container>
    );
};

export default Home;
