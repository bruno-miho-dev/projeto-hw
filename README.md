# Projeto — H&W Development

Este projeto foi desenvolvido para o **Desafio de Admissão — H&W Development**, conforme o briefing fornecido.

---

## Objetivo

> Construir:
>
> ✅ Uma **Página de Vendas (VSL)** com vídeo, seções dinâmicas, ofertas, FAQ e popup de compra.  
> ✅ Uma **Página de Agradecimento**, exibindo os dados do cliente, produto comprado e bônus.

---

## Estrutura do Projeto

```text
projeto-hw/
├── assets/
├── css/
│ └── styles.css # Estilos customizados
├── img/ # Imagens do produto, bônus e selos
├── js/
│ └── main.js # Lógicas em JavaScript
├── video/ # Vídeo VSL (mais de 30min)
├── index.html # Página de Vendas
├── obrigado.html # Página de Agradecimento
├── README.md
```

---

## Tecnologias Utilizadas

✅ **HTML5**
✅ **CSS3 (com Bootstrap 5)**
✅ **JavaScript Vanilla**
✅ Responsividade: garantida com Bootstrap 5

---

## Páginas

### Página de Vendas (`index.html`)

✔ Vídeo de longa duração (>30min)
✔ Mudança de layout aos 20:14 do vídeo
✔ Contador regressivo (20:00)
✔ Seções: vídeo, referências, ofertas, garantia, FAQ, rodapé
✔ Modal com formulário de compra (Nome, Email, Telefone)
✔ Máscara para telefone (JS puro)
✔ Validação dos campos
✔ Responsiva para desktop, tablet e mobile
✔ Salva os dados no `localStorage` e redireciona para a página de agradecimento

---

### Página de Agradecimento (`obrigado.html`)

✔ Título personalizado com nome do cliente
✔ Dados do produto comprado (nome, preço, imagem)
✔ Bônus dinâmico baseado na oferta escolhida (nome e imagem)
✔ Texto explicativo e instruções pós-compra
✔ Botão para voltar à loja
✔ Responsiva para desktop, tablet e mobile

---

## Funcionalidades Extras

✨ Modal estilizado com cores agradáveis e UI consistente
✨ Cartões de produto e bônus com sombra e espaçamento
✨ Código organizado e comentado para fácil manutenção

---

## Como Testar

1️⃣ Abrir `index.html` em um navegador moderno
2️⃣ Assistir ao vídeo ou avançar para após os 20:14 para ver o layout completo
3️⃣ Clicar em uma das ofertas para abrir o modal
4️⃣ Preencher o formulário e finalizar compra
5️⃣ Verificar os dados dinâmicos exibidos em `obrigado.html`

---

## Observações

⚠ Não utiliza frameworks, APIs externas, PHP ou banco de dados.
⚠ Todo o processamento é feito no front-end, utilizando `localStorage` para persistir os dados entre as páginas.

---

## Desenvolvido por

Bruno Miho

---

```

```
