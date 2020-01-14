# Burger Queen

## Índice

* [1. Resumo](#1-resumo)
* [2. Sobre os menus](#2-sobre-os-menus)
* [3. Funcionalidades do projeto](#3-funcionalidade-do-projeto)
* [4. Tecnologias utilizadas](#4-tecnologias-utilizadas)


***

## 1. Resumo

O projeto tem como objetivo desenvolver uma interface para facilitar e agilizar o trabalho dos colaboradores de um restaurante. Em primeiro lugar, uma interface para que os garçons possam fazer os pedidos no salão e enviar para a cozinha. Em segundo lugar, uma interface para que o cozinheiro possa ver esses pedidos na ordem que foram feitos e finalizar o pedido. Em terceiro lugar, uma interface para que os gaçons possam ver o pedido finalizado na cozinha. Em resumo, são 3 histórias de usuário.

## 2. Sobre os menus

São 2 menus. Um de café da manhã e outro para o resto do dia.

| Ítem                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Misto Quente              |   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia:
>
>| Ítem                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Refrigerante 500ml         |     7|
>|Refrigerante 750ml         |    10|
>

## 3. Funcionalidade do Projeto

Filtrar os Menus entre café da manhã e resto do dia;
Selecionar os itens para fazer o pedido;
Nos hambúrgueres há a possibilidade de escolher extras e opções;
Uma vez que esses itens são adicionados ao pedido, também são adicionados o nome e mesa do cliente;
Adiciona os itens;
Conforme os itens são adicionados, eles também são somados no total da conta;
Por fim, envia o pedido para o banco de dados e logo para a cozinha.


## 4.Tecnologias utilizadas:

JavaScript (ES6);
React Hooks;
React Router Dom;
Aphrodite;
Firebase;
