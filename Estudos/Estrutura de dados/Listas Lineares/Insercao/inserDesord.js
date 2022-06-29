/* 
Inserção em listas nao ordenadas.

- Objetivo: Deseja-se inserir o elemento X no vetor V não ordenado com N elementos;

- A inserção será feita no FINAL do vetor. 

- Prevenção de overflow
    - seja M i numero máximo de elementos que o vetor V poderá armazenar;
    - somente poderemos efetuar a inserção de X quando N < M, isto é, quando ainda existe espaço disponível no vetor. 
    - quando N=M, o vetor V está com sua capacidade de armazenamento esgotada. Nessa situação, a inserção de um novo elemento em V provocaria overflow.

- Prevenção de elementos repetidos
    Utilização da busca como subrotina do algoritmo de inserção.
        - Para evitar a existencia de elementos repetidos, deve-se efetuar previamente uma busca do elemento X que desejamos inserir em V;
        - Se a busca retornar sinalizando que X já pertence a V, não efetuaremos a inserção.
*/

// ex inserção de um elemento X no vetor V não ordenado com N elementos: 