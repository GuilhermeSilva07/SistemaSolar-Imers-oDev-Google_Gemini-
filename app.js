function pesquisar() {
  
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo_pesquisa").value
  
    if (!campoPesquisa) {
      alert("Nenhum planeta foi encontrado!")
      return 
  }

  //campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";
  let titulo = ""; 
  let descricao = "";
  
    // Itera sobre cada planeta no array de planetas
    for (let planeta of planetas) {
      titulo = planeta.titulo.toLowerCase()
      descricao = planeta.descricao.toLowerCase()

      if(planeta.titulo.includes(campoPesquisa) || planeta.descricao.includes(campoPesquisa))
      {
         // cria um novo elemento
         resultados += `
         <div class="item-resultado">
             <h2>
                 <a href="#" target="_blank">${planeta.titulo}</a>
                 <img src=${planeta.imagem} class="planeta_imagem">
             </h2>
             <p class="descricao-meta">${planeta.descricao}</p>
             <p class="descricao-meta">${planeta.Atmosfera}</p>
             <p class="descricao-meta">${planeta.Temperatura}</p>
             <a href=${planeta.link} target="_blank">Mais informações</a>
         </div>
       `;   
      }

      //if (!resultados) {
        //resultados = "<p>Nada foi encontrado</p>"
    //}

    }
  
    // Atualiza o conteúdo HTML da seção de resultados
    section.innerHTML = resultados;
  }