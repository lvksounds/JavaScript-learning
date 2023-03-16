// a api fetch provê ao navegador uma interface para a execução de requisições http através de Promises

/*
SINTAXE:
fetch(input: string, {
    method?: "GET" | "POST" | "PUT" | "DELETE",
    mode?: "navigate" | "same-origin" | "no-cors" | "cors",
    headers?: { [ key: string ]: any }
  }): Promise<Response>
*/

/* 
Metodos 

then: permite definir o bloco executado mediante o cumprimento de uma promise retornando um objeto do tipo Response

catch: permite deifnir o bloco executando mediante a rejeição de uma promise 
*/