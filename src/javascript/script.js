$(document).ready(function () {
  // Seleciona todos os elementos <section> e os itens de navegação com a classe .nav-item
  const sections = $('section');
  const navItems = $('.nav-item');

  // Evento que dispara ao rolar a página (scroll)
  $(window).on('scroll', function () {
    const header = $('header'); // Seleciona o cabeçalho
    let activeSectionIndex = 0; // Índice da seção ativa
    const scrollPosition = $(window).scrollTop() - $('#navbar').outerHeight(); // Calcula a posição de rolagem, descontando a altura da barra de navegação

    // Ajusta a sombra do cabeçalho dependendo da posição da rolagem
    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none'); // Remove a sombra quando no topo
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)'); // Adiciona sombra ao rolar
    }

    // Itera por cada seção para identificar qual está atualmente visível
    sections.each(function (i) {
      const section = $(this); // A seção atual
      const sectionTop = section.offset().top - 96; // Posição superior da seção ajustada
      const sectionBottom = sectionTop + section.outerHeight(); // Posição inferior da seção

      // Verifica se a posição de rolagem está dentro dos limites da seção atual
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i; // Define o índice da seção ativa
        return false; // Encerra a iteração após encontrar a seção ativa
      }
    });

    // Remove a classe 'active' de todos os itens de navegação
    navItems.removeClass('active');
    // Adiciona a classe 'active' ao item de navegação correspondente à seção ativa
    $(navItems[activeSectionIndex]).addClass('active');
  });

  // Configurações do ScrollReveal para animações de entrada em diferentes elementos
  ScrollReveal().reveal('.candy', {
    distance: '20%', // Distância do movimento inicial
    origin: 'left', // Origem do movimento (lado esquerdo)
    duration: 2000, // Duração da animação em milissegundos
  });

  ScrollReveal().reveal('#home_cta', {
    distance: '20%',
    origin: 'left',
    duration: 2000,
  });

  ScrollReveal().reveal('#depoimentos_chef', {
    distance: '20%',
    origin: 'left',
    duration: 1000,
  });

  ScrollReveal().reveal('.feedback', {
    distance: '20%',
    origin: 'right',
    duration: 1000,
  });

  // Evento de clique para o botão de menu móvel
  $('#mobile_btn').on('click', function () {
    // Alterna a classe 'active' no menu móvel para mostrar/esconder
    $('#mobile_menu').toggleClass('active');
    // Alterna a classe do ícone do botão (entre o ícone padrão e 'fa-x')
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });
});
