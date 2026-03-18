//simulaçao banco de dados
const fruits =[
    {id: 1, nome: "morango", cor:"vermelho"},
    {id:2, nome:"manga", cor:"laranja/amarelo"}
]

export class fruitService{
    getall() {
        return fruits
    }
}

export const fruitService = new fruitService()
