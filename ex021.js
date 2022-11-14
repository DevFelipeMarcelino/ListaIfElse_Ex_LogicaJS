// 21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

function clicar() {
    let HoraInicio = document.querySelector(".HoraInicio").value;
    let HoraFim = document.querySelector(".HoraFim").value;

    if (HoraFim > HoraInicio) {
        let duracao= parseInt(HoraFim) - parseInt(HoraInicio);
        document.querySelector(".resultado").innerHTML = "O jogo durou " + duracao+ " horas";
    } else {
        let duracao= parseInt(24) - (parseInt(HoraInicio) - parseInt(HoraFim));
        document.querySelector(".resultado").innerHTML = "O jogo durou " + duracao+ " horas";
    }
}