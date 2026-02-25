import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simplified location matching for server-side meta injection
const NEIGHBORHOODS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", 
  "Vila Hauer", "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", 
  "Vila Guaíra", "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", 
  "Ahú (Alto da Glória)", "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", 
  "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho (Champagnat)", 
  "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", 
  "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia", 
  "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", 
  "Cidade Industrial de Curitiba (CIC)", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", 
  "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", 
  "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", 
  "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", 
  "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", 
  "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", 
  "Vila Pantanal", "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", 
  "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim", "Santa Quitéria Velha", 
  "Portão Velho", "Guaíra Velho", "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", 
  "Cidade Industrial (CIC)", "Vila Verde", "Vila Barigui", "Vila Sabará", "Augusta", 
  "São Miguel", "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho", 
  "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro (Uberaba)", 
  "Vila Osternack (Sítio Cercado)", "Conjunto Caiuá (CIC)", "Conjunto Parigot de Souza (CIC)", 
  "Vila Nossa Senhora da Luz (CIC)", "Vila Torres", "Vila Barigui (CIC)", "Vila Reno (CIC)", 
  "Vila Audi (CIC)", "Vila Vitória Régia", "Vila Santa Helena", "Vila Conquista", 
  "Vila Osvaldo Cruz I e II", "Vila Itatiaia", "Vila Atenas", "Vila Sandra", "Jardim Gabineto", 
  "Belo Ar", "Colina Verde", "Gralha Azul", "Barro Preto"
];

const CITIES = [
  "Abatiá", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Altamira do Paraná", "Alto Paraíso", "Alto Paraná", "Alto Piquiri", "Altônia", "Alvorada do Sul", "Amaporã", "Ampére", "Anahy", "Andirá", "Ângulo", "Antonina", "Antônio Olinto", "Apucarana", "Arapongas", "Arapoti", "Arapuã", "Araruna", "Araucária", "Ariranha do Ivaí", "Assaí", "Assis Chateaubriand", "Astorga", "Atalaia", "Balsa Nova", "Bandeirantes", "Barbosa Ferraz", "Barra do Jacaré", "Barracão", "Bela Vista da Caroba", "Bela Vista do Paraíso", "Bituruna", "Boa Esperança", "Boa Esperança do Iguaçu", "Boa Ventura de São Roque", "Boa Vista da Aparecida", "Bocaiúva do Sul", "Bom Jesus do Sul", "Bom Sucesso", "Bom Sucesso do Sul", "Borrazópolis", "Braganey", "Brasilândia do Sul", "Cafeara", "Cafelândia", "Cafezal do Sul", "Califórnia", "Cambará", "Cambé", "Cambira", "Campina da Lagoa", "Campina do Simão", "Campina Grande do Sul", "Campo Bonito", "Campo do Tenente", "Campo Largo", "Campo Magro", "Campo Mourão", "Cândido de Abreu", "Candói", "Cantagalo", "Capanema", "Capitão Leônidas Marques", "Carambeí", "Carlópolis", "Cascavel", "Castro", "Catanduvas", "Centenário do Sul", "Cerro Azul", "Céu Azul", "Chopinzinho", "Cianorte", "Cidade Gaúcha", "Clevelândia", "Colombo", "Colorado", "Congonhinhas", "Conselheiro Mairinck", "Contenda", "Corbélia", "Cornélio Procópio", "Coronel Domingos Soares", "Coronel Vivida", "Corumbataí do Sul", "Cruz Machado", "Cruzeiro do Iguaçu", "Cruzeiro do Oeste", "Cruzeiro do Sul", "Cruzmaltina", "Curitiba", "Curiúva", "Diamante do Norte", "Diamante do Sul", "Diamante d'Oeste", "Dois Vizinhos", "Douradina", "Doutor Camargo", "Doutor Ulysses", "Enéas Marques", "Engenheiro Beltrão", "Entre Rios do Oeste", "Esperança Nova", "Espigão Alto do Iguaçu", "Farol", "Faxinal", "Fazenda Rio Grande", "Fênix", "Fernandes Pinheiro", "Figueira", "Flor da Serra do Sul", "Floraí", "Floresta", "Florestópolis", "Flórida", "Formosa do Oeste", "Foz do Iguaçu", "Foz do Jordão", "Francisco Alves", "Francisco Beltrão", "General Carneiro", "Godoy Moreira", "Goioerê", "Goioxim", "Grandes Rios", "Guaíra", "Guairaçá", "Guamiranga", "Guapirama", "Guaporema", "Guaraci", "Guaraniaçu", "Guarapuava", "Guaraqueçaba", "Guaratuba", "Honório Serpa", "Ibaiti", "Ibema", "Ibiporã", "Icaraíma", "Iguaraçu", "Iguatu", "Imbaú", "Imbituva", "Inácio Martins", "Inajá", "Indianópolis", "Ipiranga", "Iporã", "Iracema do Oeste", "Irati", "Iretama", "Itaguajé", "Itaipulândia", "Itambaracá", "Itambé", "Itapejara d'Oeste", "Itaperuçu", "Itáuna do Sul", "Ivaí", "Ivaiporã", "Ivaté", "Ivatuba", "Jaboti", "Jacarezinho", "Jaguapitã", "Jaguariaíva", "Jandaia do Sul", "Janiópolis", "Japira", "Japurá", "Jardim Alegre", "Jardim Olinda", "Jataizinho", "Jesuítas", "Joaquim Távora", "Jundiaí do Sul", "Juranda", "Jussara", "Kaloré", "Lapa", "Laranjal", "Laranjeiras do Sul", "Leópolis", "Lidianópolis", "Lindoeste", "Loanda", "Lobato", "Londrina", "Luiziana", "Lunardelli", "Lupionópolis", "Mallet", "Mamborê", "Mandaguaçu", "Mandaguari", "Mandirituba", "Manfrinópolis", "Mangueirinha", "Manoel Ribas", "Marechal Cândido Rondon", "Maria Helena", "Marialva", "Marilândia do Sul", "Marilena", "Mariluz", "Maringá", "Mariópolis", "Maripá", "Marmeleiro", "Marquinho", "Marumbi", "Matelândia", "Matinhos", "Mato Rico", "Mauá da Serra", "Medianeira", "Mercedes", "Mirador", "Miraselva", "Missal", "Moreira Sales", "Morretes", "Munhoz de Mello", "Nossa Senhora das Graças", "Nova Aliança do Ivaí", "Nova América da Colina", "Nova Aurora", "Nova Cantu", "Nova Esperança do Sudoeste", "Nova Esperança", "Nova Fátima", "Nova Laranjeiras", "Nova Londrina", "Nova Olímpia", "Nova Prata do Iguaçu", "Nova Santa Bárbara", "Nova Santa Rosa", "Nova Tebas", "Novo Itacolomi", "Ortigueira", "Ourizona", "Ouro Verde do Oeste", "Paiçandu", "Palmas", "Palmeira", "Palmital", "Palotina", "Paraíso do Norte", "Paranacity", "Paranaguá", "Paranapoema", "Paranavaí", "Pato Bragado", "Pato Branco", "Paula Freitas", "Paulo Frontin", "Peabiru", "Perobal", "Pérola", "Pérola d'Oeste", "Piên", "Pinhais", "Pinhal de São Bento", "Pinhalão", "Pinhão", "Piraí do Sul", "Piraquara", "Pitanga", "Pitangueiras", "Planaltina do Paraná", "Planalto", "Ponta Grossa", "Pontal do Paraná", "Porecatu", "Porto Amazonas", "Porto Barreiro", "Porto Rico", "Porto Vitória", "Prado Ferreira", "Pranchita", "Presidente Castelo Branco", "Primeiro de Maio", "Prudentópolis", "Quarto Centenário", "Quatiguá", "Quatro Barras", "Quatro Pontes", "Quedas do Iguaçu", "Querência do Norte", "Quinta do Sol", "Quitandinha", "Ramilândia", "Rancho Alegre", "Rancho Alegre d'Oeste", "Realiza", "Rebouças", "Renascença", "Reserva", "Reserva do Iguaçu", "Ribeirão Claro", "Ribeirão do Pinhal", "Rio Azul", "Rio Bom", "Rio Bonito do Iguaçu", "Rio Branco do Ivaí", "Rio Branco do Sul", "Rio Negro", "Rolândia", "Roncador", "Rondon", "Rosário do Ivaí", "Sabáudia", "Salgado Filho", "Salto do Itararé", "Salto do Lontra", "Santa Amélia", "Santa Cecília do Pavão", "Santa Cruz de Monte Castelo", "Santa Fé", "Santa Helena", "Santa Inês", "Santa Isabel do Ivaí", "Santa Izabel do Oeste", "Santa Lúcia", "Santa Maria do Oeste", "Santa Mariana", "Santa Mônica", "Santa Tereza do Oeste", "Santa Terezinha de Itaipu", "Santana do Itararé", "Santo Antônio da Platina", "Santo Antônio do Caiuá", "Santo Antônio do Paraíso", "Santo Antônio do Sudoeste", "Santo Inácio", "São Carlos do Ivaí", "São Jerônimo da Serra", "São João", "São João do Caiuá", "São João do Ivaí", "São João do Triunfo", "São Jorge do Ivaí", "São Jorge do Patrocínio", "São Jorge d'Oeste", "São José da Boa Vista", "São José das Palmeiras", "São José dos Pinhais", "São Manoel do Paraná", "São Mateus do Sul", "São Miguel do Iguaçu", "São Pedro do Iguaçu", "São Pedro do Ivaí", "São Pedro do Paraná", "São Sebastião da Amoreira", "São Tomé", "Sapopema", "Sarandi", "Saudade do Iguaçu", "Sengés", "Serranópolis do Iguaçu", "Sertaneja", "Sertanópolis", "Siqueira Campos", "Sulina", "Tamarana", "Tamboara", "Tapejara", "Tapira", "Teixeira Soares", "Telêmaco Borba", "Terra Boa", "Terra Rica", "Terra Roxa", "Tibagi", "Tijucas do Sul", "Toledo", "Tomazina", "Três Barras do Paraná", "Tunas do Paraná", "Tuneiras do Oeste", "Tupãssi", "Turvo", "Ubiratã", "Umuarama", "União da Vitória", "Uniflor", "Uraí", "Ventania", "Vera Cruz do Oeste", "Verê", "Virmond", "Vitorino", "Wenceslau Braz", "Xambrê"
];

const ALL_LOCATIONS = [
  ...NEIGHBORHOODS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""), name, type: 'bairro' })),
  ...CITIES.map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""), name, type: 'cidade' }))
];

function getMetadata(urlPath: string) {
  if (urlPath === "/" || urlPath === "") {
    return {
      title: "Amarração Amorosa em Curitiba e Paraná - Filha de Ogum",
      description: "Especialista em Amarração Amorosa, Reconciliação de Casais e Alta Magia em Curitiba e todo o Paraná. Resultados garantidos e sigilo total. Fale com Filha de Ogum."
    };
  }

  if (urlPath.startsWith("/local/")) {
    const id = urlPath.replace("/local/", "");
    const location = ALL_LOCATIONS.find(l => l.id === id);
    if (location) {
      return {
        title: `Amarração Amorosa em ${location.name} - Filha de Ogum`,
        description: `Precisa de Amarração Amorosa em ${location.name}? Filha de Ogum é especialista em união de casais e alta magia em ${location.name} e todo o Paraná. Sigilo absoluto e resultados.`
      };
    }
  }

  return {
    title: "Filha de Ogum - Alta Magia e Amarração Amorosa",
    description: "Trabalhos espirituais para o amor, limpeza espiritual e búzios."
  };
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Changed to custom to handle HTML manually
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist"), { index: false }));
  }

  app.get("*", async (req, res) => {
    const url = req.originalUrl;
    const metadata = getMetadata(url);
    const canonical = `https://www.amarracaoamorosacuritiba.shop${url}`;

    try {
      let template: string;
      if (process.env.NODE_ENV !== "production") {
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(__dirname, "dist", "index.html"), "utf-8");
      }

      // Inject Meta Tags for SEO (Pre-rendering)
      const metaTags = `
        <title>${metadata.title} | Filha de Ogum</title>
        <meta name="description" content="${metadata.description}">
        <link rel="canonical" href="${canonical}">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta property="og:title" content="${metadata.title} | Filha de Ogum">
        <meta property="og:description" content="${metadata.description}">
        <meta property="og:url" content="${canonical}">
        <meta property="og:type" content="website">
        <meta property="og:image" content="https://img.supremamidia.com/suprema-img.png">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${metadata.title} | Filha de Ogum">
        <meta name="twitter:description" content="${metadata.description}">
        <meta name="twitter:image" content="https://img.supremamidia.com/suprema-img.png">
        <meta name="robots" content="index, follow">
      `;

      const html = template.replace(`<!-- SEO_PLACEHOLDER -->`, metaTags);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite?.ssrFixStacktrace(e);
      console.log(e);
      res.status(500).end(e instanceof Error ? e.stack : String(e));
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
