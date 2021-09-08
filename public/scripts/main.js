import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check") 

checkButtons.forEach(button => {
    //adicionar escuta por função junto ao delete 
    button.addEventListener("click", handleClick)

    //adicionar escuta individual
    // button.addEventListener("click", event => {
    //     //Abrir modal
    //     modalTitle.innerHTML = "Marcar como lida"
    //     modal.open()
    // })
})


/*Quando o botão delete for clicado ele abre a modal */
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    //adicionar escuta por função junto ao marcar como lido 
    button.addEventListener("click", (event) => handleClick(event, false))
    
    //adicionar escuta individual
    // button.addEventListener("click", event => {
    //     modalTitle.innerHTML = "Excluir esta pergunta"
    //     modal.open()
    // })
})

function handleClick(event, check = true){
    //Alteração simples de título e descrição da modal
    // modalTitle.innerHTML= check ? "Marcar como lida" : "Excluir"
    // modalDescription.innerHTML= check ? "Deseja marcar esta pergunta como lida?" : "Tem certeza que deseja excluir esta pergunta?"

    //Alteração concatenada com template string dos textos da modal
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    
    const slug = check ? "check" : "delete"
    
    const roomId = document.querySelector("#room-id").dataset.id
    
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)
    
    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    
    //abrir modal
    modal.open()
}
