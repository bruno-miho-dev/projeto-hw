let dadosProduto = {}; // variável para guardar os dados do produto

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  const post20 = document.getElementById("post-20min");
  const modal = new bootstrap.Modal(document.getElementById("compraModal"));
  const compraForm = document.getElementById("compraForm");
  // const contadorElem = document.getElementById("timer");
  const todosContadores = document.querySelectorAll(".timer");

  // let timerInterval;
  let timersAtivos = false; // flag para iniciar apenas uma vez

  // Verifica tempo do vídeo
  video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 1214) {
      // 20min14seg = 1214s
      post20.classList.remove("d-none");
      if (!timersAtivos) {
        iniciarTodosOsContadores(20 * 60);
        timersAtivos = true;
      }
    }
  });

  // Inicia cronômetro para TODOS
  function iniciarTodosOsContadores(segundos) {
    todosContadores.forEach((contadorElem) => {
      iniciarContador(contadorElem, segundos);
    });
  }

  // Inicia cronômetro
  function iniciarContador(elem, segundos) {
    function formatTime(s) {
      const min = String(Math.floor(s / 60)).padStart(2, "0");
      const sec = String(s % 60).padStart(2, "0");
      return `${min}:${sec}`;
    }

    elem.textContent = formatTime(segundos);

    const timerInterval = setInterval(() => {
      segundos--;
      elem.textContent = formatTime(segundos);
      if (segundos <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  // Botões de compra
  document.querySelectorAll(".botao-compra").forEach((btn) => {
    btn.addEventListener("click", () => {
      dadosProduto = {
        produto: btn.getAttribute("data-produto"),
        preco: btn.getAttribute("data-preco"),
        imagem: btn.getAttribute("data-imagem"),
      };
      modal.show();
    });
  });

  // Finalizar compra
  compraForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = compraForm
      .querySelector("input[placeholder='Nome']")
      .value.trim();
    const email = compraForm
      .querySelector("input[placeholder='Email']")
      .value.trim();
    const telefone = compraForm
      .querySelector("input[placeholder='Telefone']")
      .value.trim();

    if (!nome || !email || !telefone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    const dadosCliente = {
      nome,
      email,
      telefone,
      ...dadosProduto,
    };

    localStorage.setItem("dadosCompra", JSON.stringify(dadosCliente));
    window.location.href = "obrigado.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const telefone = document.getElementById("telefone");

  telefone.addEventListener("input", (e) => {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
      valor = valor.replace(/^(\d*)/, "($1");
    }

    e.target.value = valor;
  });
});
