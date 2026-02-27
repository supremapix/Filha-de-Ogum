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

const CITIES_PR = [
  "Abatiá", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Altamira do Paraná", "Alto Paraíso", "Alto Paraná", "Alto Piquiri", "Altônia", "Alvorada do Sul", "Amaporã", "Ampére", "Anahy", "Andirá", "Ângulo", "Antonina", "Antônio Olinto", "Apucarana", "Arapongas", "Arapoti", "Arapuã", "Araruna", "Araucária", "Ariranha do Ivaí", "Assaí", "Assis Chateaubriand", "Astorga", "Atalaia", "Balsa Nova", "Bandeirantes", "Barbosa Ferraz", "Barra do Jacaré", "Barracão", "Bela Vista da Caroba", "Bela Vista do Paraíso", "Bituruna", "Boa Esperança", "Boa Esperança do Iguaçu", "Boa Ventura de São Roque", "Boa Vista da Aparecida", "Bocaiúva do Sul", "Bom Jesus do Sul", "Bom Sucesso", "Bom Sucesso do Sul", "Borrazópolis", "Braganey", "Brasilândia do Sul", "Cafeara", "Cafelândia", "Cafezal do Sul", "Califórnia", "Cambará", "Cambé", "Cambira", "Campina da Lagoa", "Campina do Simão", "Campina Grande do Sul", "Campo Bonito", "Campo do Tenente", "Campo Largo", "Campo Magro", "Campo Mourão", "Cândido de Abreu", "Candói", "Cantagalo", "Capanema", "Capitão Leônidas Marques", "Carambeí", "Carlópolis", "Cascavel", "Castro", "Catanduvas", "Centenário do Sul", "Cerro Azul", "Céu Azul", "Chopinzinho", "Cianorte", "Cidade Gaúcha", "Clevelândia", "Colombo", "Colorado", "Congonhinhas", "Conselheiro Mairinck", "Contenda", "Corbélia", "Cornélio Procópio", "Coronel Domingos Soares", "Coronel Vivida", "Corumbataí do Sul", "Cruz Machado", "Cruzeiro do Iguaçu", "Cruzeiro do Oeste", "Cruzeiro do Sul", "Cruzmaltina", "Curitiba", "Curiúva", "Diamante do Norte", "Diamante do Sul", "Diamante d'Oeste", "Dois Vizinhos", "Douradina", "Doutor Camargo", "Doutor Ulysses", "Enéas Marques", "Engenheiro Beltrão", "Entre Rios do Oeste", "Esperança Nova", "Espigão Alto do Iguaçu", "Farol", "Faxinal", "Fazenda Rio Grande", "Fênix", "Fernandes Pinheiro", "Figueira", "Flor da Serra do Sul", "Floraí", "Floresta", "Florestópolis", "Flórida", "Formosa do Oeste", "Foz do Iguaçu", "Foz do Jordão", "Francisco Alves", "Francisco Beltrão", "General Carneiro", "Godoy Moreira", "Goioerê", "Goioxim", "Grandes Rios", "Guaíra", "Guairaçá", "Guamiranga", "Guapirama", "Guaporema", "Guaraci", "Guaraniaçu", "Guarapuava", "Guaraqueçaba", "Guaratuba", "Honório Serpa", "Ibaiti", "Ibema", "Ibiporã", "Icaraíma", "Iguaraçu", "Iguatu", "Imbaú", "Imbituva", "Inácio Martins", "Inajá", "Indianópolis", "Ipiranga", "Iporã", "Iracema do Oeste", "Irati", "Iretama", "Itaguajé", "Itaipulândia", "Itambaracá", "Itambé", "Itapejara d'Oeste", "Itaperuçu", "Itáuna do Sul", "Ivaí", "Ivaiporã", "Ivaté", "Ivatuba", "Jaboti", "Jacarezinho", "Jaguapitã", "Jaguariaíva", "Jandaia do Sul", "Janiópolis", "Japira", "Japurá", "Jardim Alegre", "Jardim Olinda", "Jataizinho", "Jesuítas", "Joaquim Távora", "Jundiaí do Sul", "Juranda", "Jussara", "Kaloré", "Lapa", "Laranjal", "Laranjeiras do Sul", "Leópolis", "Lidianópolis", "Lindoeste", "Loanda", "Lobato", "Londrina", "Luiziana", "Lunardelli", "Lupionópolis", "Mallet", "Mamborê", "Mandaguaçu", "Mandaguari", "Mandirituba", "Manfrinópolis", "Mangueirinha", "Manoel Ribas", "Marechal Cândido Rondon", "Maria Helena", "Marialva", "Marilândia do Sul", "Marilena", "Mariluz", "Maringá", "Mariópolis", "Maripá", "Marmeleiro", "Marquinho", "Marumbi", "Matelândia", "Matinhos", "Mato Rico", "Mauá da Serra", "Medianeira", "Mercedes", "Mirador", "Miraselva", "Missal", "Moreira Sales", "Morretes", "Munhoz de Mello", "Nossa Senhora das Graças", "Nova Aliança do Ivaí", "Nova América da Colina", "Nova Aurora", "Nova Cantu", "Nova Esperança do Sudoeste", "Nova Esperança", "Nova Fátima", "Nova Laranjeiras", "Nova Londrina", "Nova Olímpia", "Nova Prata do Iguaçu", "Nova Santa Bárbara", "Nova Santa Rosa", "Nova Tebas", "Novo Itacolomi", "Ortigueira", "Ourizona", "Ouro Verde do Oeste", "Paiçandu", "Palmas", "Palmeira", "Palmital", "Palotina", "Paraíso do Norte", "Paranacity", "Paranaguá", "Paranapoema", "Paranavaí", "Pato Bragado", "Pato Branco", "Paula Freitas", "Paulo Frontin", "Peabiru", "Perobal", "Pérola", "Pérola d'Oeste", "Piên", "Pinhais", "Pinhal de São Bento", "Pinhalão", "Pinhão", "Piraí do Sul", "Piraquara", "Pitanga", "Pitangueiras", "Planaltina do Paraná", "Planalto", "Ponta Grossa", "Pontal do Paraná", "Porecatu", "Porto Amazonas", "Porto Barreiro", "Porto Rico", "Porto Vitória", "Prado Ferreira", "Pranchita", "Presidente Castelo Branco", "Primeiro de Maio", "Prudentópolis", "Quarto Centenário", "Quatiguá", "Quatro Barras", "Quatro Pontes", "Quedas do Iguaçu", "Querência do Norte", "Quinta do Sol", "Quitandinha", "Ramilândia", "Rancho Alegre", "Rancho Alegre d'Oeste", "Realiza", "Rebouças", "Renascença", "Reserva", "Reserva do Iguaçu", "Ribeirão Claro", "Ribeirão do Pinhal", "Rio Azul", "Rio Bom", "Rio Bonito do Iguaçu", "Rio Branco do Ivaí", "Rio Branco do Sul", "Rio Negro", "Rolândia", "Roncador", "Rondon", "Rosário do Ivaí", "Sabáudia", "Salgado Filho", "Salto do Itararé", "Salto do Lontra", "Santa Amélia", "Santa Cecília do Pavão", "Santa Cruz de Monte Castelo", "Santa Fé", "Santa Helena", "Santa Inês", "Santa Isabel do Ivaí", "Santa Izabel do Oeste", "Santa Lúcia", "Santa Maria do Oeste", "Santa Mariana", "Santa Mônica", "Santa Tereza do Oeste", "Santa Terezinha de Itaipu", "Santana do Itararé", "Santo Antônio da Platina", "Santo Antônio do Caiuá", "Santo Antônio do Paraíso", "Santo Antônio do Sudoeste", "Santo Inácio", "São Carlos do Ivaí", "São Jerônimo da Serra", "São João", "São João do Caiuá", "São João do Ivaí", "São João do Triunfo", "São Jorge do Ivaí", "São Jorge do Patrocínio", "São Jorge d'Oeste", "São José da Boa Vista", "São José das Palmeiras", "São José dos Pinhais", "São Manoel do Paraná", "São Mateus do Sul", "São Miguel do Iguaçu", "São Pedro do Iguaçu", "São Pedro do Ivaí", "São Pedro do Paraná", "São Sebastião da Amoreira", "São Tomé", "Sapopema", "Sarandi", "Saudade do Iguaçu", "Sengés", "Serranópolis do Iguaçu", "Sertaneja", "Sertanópolis", "Siqueira Campos", "Sulina", "Tamarana", "Tamboara", "Tapejara", "Tapira", "Teixeira Soares", "Telêmaco Borba", "Terra Boa", "Terra Rica", "Terra Roxa", "Tibagi", "Tijucas do Sul", "Toledo", "Tomazina", "Três Barras do Paraná", "Tunas do Paraná", "Tuneiras do Oeste", "Tupãssi", "Turvo", "Ubiratã", "Umuarama", "União da Vitória", "Uniflor", "Uraí", "Ventania", "Vera Cruz do Oeste", "Verê", "Virmond", "Vitorino", "Wenceslau Braz", "Xambrê"
];

const CITIES_SC = [
  "Abdon Batista", "Abelardo Luz", "Agrolândia", "Agronômica", "Água Doce", "Águas de Chapecó", "Águas Frias", "Águas Mornas", "Albano Schmidt", "Alfredo Wagner", "Almirante Tamandaré", "Anchieta", "Angelical", "Anitápolis", "Antônio Carlos", "Apiúna", "Arabutã", "Araquari", "Araranguá", "Armazém", "Arroio Trinta", "Arvoredo", "Ascurra", "Atalanta", "Aurora", "Balneário Arroio do Silva", "Balneário Camboriú", "Balneário Barra do Sul", "Balneário Gaivota", "Bambuí", "Bandeirante", "Barra Bonita", "Barra Velha", "Batalha", "Bayerlândia", "Belmonte", "Benedito Novo", "Benjamin Constant", "Bom Jardim da Serra", "Bom Jesus", "Bom Jesus do Oeste", "Bom Retiro", "Bombinhas", "Botuverá", "Braço do Norte", "Braço do Trombudo", "Brunópolis", "Brusque", "Caçador", "Caibi", "Calmon", "Camboriú", "Campo Alegre", "Campo Belo do Sul", "Campo Erê", "Campos Novos", "Canelinha", "Canoinhas", "Capão Alto", "Capinzal", "Capivari de Baixo", "Catanduvas", "Caxambu do Sul", "Celso Ramos", "Cerros", "Chapadão do Lageado", "Chapecó", "Cocal do Sul", "Concordia", "Cordilheira Alta", "Coronel Freitas", "Coronel Martins", "Corupá", "Correia Pinto", "Criciúma", "Cunha Porã", "Cunhataí", "Curitibanos", "Descanso", "Dionísio Cerqueira", "Dona Emma", "Doutor Pedrinho", "Entre Rios", "Ermo", "Erval Velho", "Esmeralda", "Eunápolis", "Faxinal dos Guedes", "Flor do Sertão", "Florianópolis", "Formosa do Sul", "Forquilhinha", "Fraiburgo", "Frei Rogério", "Galvão", "Garopaba", "Garuva", "Gaspar", "Governador Celso Ramos", "Grão-Pará", "Gravatal", "Guabiruba", "Guaraciaba", "Guarujá do Sul", "Guatambú", "Herval d'Occidente", "Ibiam", "Ibirama", "Içara", "Ilhota", "Imaruí", "Imbuia", "Imbituba", "Indaial", "Iomerê", "Ipira", "Iporã do Oeste", "Ipuaçu", "Ipumirim", "Iraceminha", "Irani", "Irati", "Irapé", "Itá", "Itaiópolis", "Itajaí", "Itapema", "Itapiranga", "Itapoá", "Ituporanga", "Jaborá", "Jacinto Machado", "Jaguaruna", "Jaraguá do Sul", "Jardinópolis", "Joaçaba", "Joinville", "José Boiteux", "Jupiá", "Lacerdópolis", "Lages", "Laguna", "Lajeado Grande", "Laurentino", "Lauro Muller", "Lebon Régis", "Leoberto Leal", "Lindóia do Sul", "Longitudinal", "Luiz Alves", "Luzerna", "Macieira", "Mafra", "Major Gercino", "Major Vieira", "Maracajá", "Maravilha", "Marema", "Massaranduba", "Matos Costa", "Meleiro", "Mirim Doce", "Modelo", "Mondaí", "Monte Carlo", "Monte Castelo", "Morro da Fumaça", "Morro Grande", "Navegantes", "Nova Erechim", "Nova Itaberaba", "Nova Trento", "Nova Veneza", "Novo Horizonte", "Orleães", "Ouro", "Ouro Verde", "Paial", "Painel", "Palhoça", "Palmeira", "Palmitos", "Papanduva", "Paraíso", "Passo de Torres", "Passos Maia", "Paulo Lopes", "Pedras Grandes", "Penha", "Peritiba", "Petrolândia", "Balneário Piçarras", "Pinhalzinho", "Pinheiro Preto", "Piratuba", "Planalto Alegre", "Pomerode", "Ponte Alta", "Ponte Alta do Norte", "Ponte Serrada", "Porto Belo", "Porto União", "Pouso Redondo", "Praias", "Presidente Castello Branco", "Presidente Getúlio", "Presidente Nereu", "Príncipes", "Quinta do Imbuial", "Quilombo", "Rancho Queimado", "Rio das Antas", "Rio do Campo", "Rio do Oeste", "Rio do Sul", "Rio dos Cedros", "Rio Fortuna", "Rio Negrinho", "Rio Rufino", "Riqueza", "Rodeio", "Romelândia", "Salete", "Saltinho", "Salto Veloso", "Sangão", "Santa Cecília", "Santa Helena", "Santa Rosa de Lima", "Santa Rosa do Sul", "Santa Terezinha", "Santa Terezinha do Progresso", "Santiago do Sul", "Santo Amaro da Imperatriz", "São Bento do Sul", "São Bernardino", "São Bonifácio", "São Carlos", "São Cristóvão do Sul", "São Domingos", "São Francisco do Sul", "São João Batista", "São João do Itaperiú", "São João do Oeste", "São João do Sul", "São Joaquim", "São José", "São José do Cedro", "São José do Cerrito", "São Lourenço do Oeste", "São Ludgero", "São Martinho", "São Miguel da Boa Vista", "São Miguel do Oeste", "São Pedro de Alcântara", "Saudades", "Schroeder", "Seara", "Sede Alvorada", "Serra Alta", "Siderópolis", "Sombrio", "Sul Brasil", "Taió", "Tangará", "Tigrinhos", "Tijucas", "Timor", "Treviso", "Treze de Maio", "Treze Tílias", "Trombudo Central", "Tubarão", "Tunápolis", "Turvo", "União do Oeste", "Urubici", "Urupema", "Urussanga", "Vargeão", "Vargem", "Vargem Bonita", "Vélez", "Videira", "Vitor Meireles", "Witmarsum", "Xanxerê", "Xavantina", "Xaxim", "Zortéa"
];

const CITIES_RS = [
  "Aceguá", "Água Santa", "Agudo", "Ajuricaba", "Alecrim", "Alegrete", "Alegria", "Almirante Tamandaré do Sul", "Alpestre", "Altahona", "Alto Alegre", "Alto Feliz", "Altores", "Amambai", "Amaral Ferrador", "Ametista do Sul", "André da Rocha", "Anta Gorda", "Antônio Prado", "Arambaré", "Araricá", "Aratiba", "Arroio do Meio", "Arroio do Padre", "Arroio do Sal", "Arroio do Tigre", "Arroio dos Ratos", "Arroio Grande", "Arvorezinha", "Assentamento Agrário Castelhanos", "Augustus de Souza", "Áurea", "Bagé", "Balneário Pinhal", "Barra do Guarita", "Barra do Quaraí", "Barra do Ribeiro", "Barra do Rio Azul", "Barra Funda", "Barracão", "Barão", "Barão de Cotegipe", "Barão do Triunfo", "Barros Cassal", "Benjamin Constant do Sul", "Bento Gonçalves", "Bozano", "Bom Jesus", "Bom Princípio", "Bom Progresso", "Bom Retiro do Sul", "Boqueirão do Leão", "Bossoroca", "Botucatu", "Braga", "Broto Preto", "Cacequi", "Cacique Doble", "Caibaté", "Caiçara", "Camaquã", "Camargo", "Cambará do Sul", "Campestre da Lama", "Campina das Missões", "Campinas do Sul", "Campo Bom", "Campo Novo", "Campos Borges", "Canoas", "Canudos do Vale", "Capão Bonito do Sul", "Capão da Canoa", "Capão do Cipó", "Capão do Leão", "Capivari do Sul", "Caraá", "Carazinho", "Carlos Barbosa", "Casca", "Caseiros", "Catuípe", "Caxias do Sul", "Centenário do Sul", "Cerdeira", "Cerrito", "Cerrito de São Francisco", "Cerro Branco", "Cerro Grande", "Cerro Grande do Sul", "Chapada", "Charqueadas", "Chauí", "Chaves", "Chiapetta", "Chuí", "Chuvisca", "Cidreira", "Ciríaco", "Colinas", "Colorado", "Condor", "Coqueiro Baixo", "Coqueiros do Sul", "Coronel Barros", "Coronel Bicaco", "Coronel João Pessoa", "Coronel Pilar", "Corumbé", "Coxilha", "Crissiumal", "Cristal", "Cristal do Sul", "Cruzaltense", "Cruzeiro do Sul", "David Canabarro", "Derrubadas", "Dezesseis de Novembro", "Dilermando de Aguiar", "Dois Irmãos", "Dois Lajeados", "Dom Feliciano", "Dom Pedrito", "Dom Pedro de Alcântara", "Dona Francisca", "Doutor Maurício Cardoso", "Doutor Ricardo", "Echarpe", "Eckel", "Encruzilhada do Sul", "Engenho Velho", "Entre Rios do Sul", "Entre-Ijuís", "Erebango", "Espumoso", "Esperança do Sul", "Espigão Alto", "Estação", "Estância Velha", "Esteio", "Estrela", "Estrela Velha", "Taquara", "Tavares", "Tenente Portela", "Terra de Areia", "Teutônia", "Tio Hugo", "Tiradentes do Sul", "Torres", "Tramandaí", "Travesseiro", "Três Arroios", "Três Cachoeiras", "Três Coroas", "Três de Maio", "Três Forquilhas", "Três Palmeiras", "Três Passos", "Triunfo", "Tunas", "Tupanciretã", "Tupandi", "Tuparendi", "Turuçu", "Ubiretama", "Unistalda", "Uruguaiana", "Vacaria", "Vale do Sol", "Vale Real", "Vale Verde", "Vanini", "Venâncio Aires", "Vera Cruz", "Veranópolis", "Viamão", "Vicente Dutra", "Victor Graeff", "Vila Flores", "Vila Lângaro", "Vila Maria", "Vila Nova do Sul", "Vista Alegre", "Vista Alegre do Prata", "Vista Gaúcha", "Vitória das Missões", "Westfalia", "Wiota", "Xangri-lá"
];

const CITIES_GO = [
  "Abadia de Goiás", "Abadiânia", "Acreúna", "Adelandia", "Água Fria de Goiás", "Água Limpa", "Águas Lindas de Goiás", "Alexânia", "Aloândia", "Alô Brasil", "Alto Horizonte", "Alto Paraíso de Goiás", "Alvorada do Norte", "Amaralina", "Americano do Brasil", "Amorinópolis", "Amorrantina", "Anápolis", "Anhanguera", "Anicuns", "Aparecida de Goiânia", "Aparecida do Rio Doc", "Aporé", "Aragarças", "Araguaína", "Araguapaz", "Arenópolis", "Aruanã", "Aurilândia", "Avelinópolis", "Baliza", "Barro Alto", "Barra do Garças", "Barro de Santa Luzia", "Barra do São João", "Barra Longa", "Barreiras do Oeste", "Barro Preto", "Bela Vista de Goiás", "Bom Jardim de Goiás", "Bom Jesus de Goiás", "Bonfinópolis", "Bonópolis", "Brazabrantes", "Britânia", "Buritinópolis", "Buru", "Cachoeira Alta", "Cachoeira de Goiás", "Cachoeira Dourada", "Caçu", "Caiapônia", "Caiçara", "Caldas Novas", "Caldazinha", "Campestre de Goiás", "Campinaçu", "Campinorte", "Campo Alegre de Goiás", "Campo Limpo de Goiás", "Campos Belos", "Campos Verdes", "Carmo do Rio Verde", "Castelândia", "Catalão", "Caturaí", "Cavalcante", "Ceres", "Cezarina", "Chapadão do Céu", "Cidade Ocidental", "Cocalzinho de Goiás", "Colinas do Sul", "Córrego do Ouro", "Corumbá de Goiás", "Corumbaíba", "Cristalina", "Cristianópolis", "Crixás", "Cromínia", "Cumari", "Damianópolis", "Damolândia", "Davinópolis", "Diorama", "Divinópolis de Goiás", "Doverlândia", "Edealina", "Edéia", "Estrela do Norte", "Faina", "Fazenda Nova", "Firminópolis", "Flores de Goiás", "Formosa", "Formoso", "Goiandira", "Goianésia", "Goianésia do Pará", "Goianira", "Goiás", "Goianápolis", "Gombi", "Gouvelândia", "Guapó", "Guarani de Goiás", "Guarinos", "Heitorabai", "Hidrolândia", "Hidrolina", "Iaciara", "Inaciolândia", "Indiara", "Inhumas", "Ipameri", "Ipiranga de Goiás", "Iporá", "Israelândia", "Ithumirim", "Itumbiara", "Ivolândia", "Jandaia", "Jaraguá", "Jataí", "Jaupaci", "Jesúpolis", "Joviânia", "Jussara", "Lagoa Santa", "Leal Moreira", "Luziânia", "Mairipotaba", "Mangaratiba", "Mantena", "Matrinchã", "Maurilândia", "Mimoso de Goiás", "Minaçu", "Mineiros", "Moiporá", "Monte Alegre de Goiás", "Montes Claros de Goiás", "Montividiu", "Montividiu do Norte", "Morrinhos", "Morro Agudo de Goiás", "Mossâmedes", "Mozarlândia", "Mundo Novo", "Mutunópolis", "Nazário", "Nerópolis", "Niquelândia", "Nova América", "Nova Aurora", "Nova Crixás", "Nova Glória", "Nova Iguaçu de Goiás", "Nova Roma", "Nova Veneza", "Novo Brasil", "Novo Gama", "Novo Planalto", "Orizona", "Ouro Verde de Goiás", "Ouvidor", "Padre Bernardo", "Palestina de Goiás", "Palmeiras de Goiás", "Palmelo", "Palmas de Monte Alto", "Paraúna", "Perolândia", "Petrolina de Goiás", "Pilar de Goiás", "Pirenópolis", "Pires do Rio", "Planaltina", "Pontalina", "Porangatu", "Porteirão", "Porto Alegre do Norte", "Porto Nacional", "Porteirinha de Goiás", "Posse", "Professor Jamil", "Quirinópolis", "Rialma", "Rianápolis", "Rio Quente", "Rio Verde", "Rubiataba", "Sanclerlândia", "Santa Bárbara de Goiás", "Santa Cruz de Goiás", "Santa Fé de Goiás", "Santa Helena de Goiás", "Santa Isabel", "Santa Rita do Araguaia", "Santa Rita do Novo Destino", "Santa Rosa de Goiás", "Santa Tereza de Goiás", "Santa Terezinha de Goiás", "Santo Antônio da Barra", "Santo Antônio de Goiás", "Santo Antônio do Descoberto", "São Domingos", "São Francisco de Goiás", "São João da Paraúna", "São João d'Aliança", "São Luís de Montes Belos", "São Miguel do Araguaia", "São Miguel do Passa Quatro", "São Patrício", "São Simão", "Senador Canedo", "Serranópolis", "Silvânia", "Simolândia", "Sítio d'Abadia", "Taquaral de Goiás", "Teresina de Goiás", "Terezópolis de Goiás", "Três Ranchos", "Trindade", "Trombas", "Turvânia", "Turvelândia", "Uirapuru", "Uruaçu", "Uruana", "Urutaí", "Valparaíso de Goiás", "Varjão", "Vianópolis", "Vicentinópolis", "Vila Boa", "Vila Propício"
];

const CITIES_DF = [
  "Brasília"
];

const ALL_LOCATIONS = [
  ...NEIGHBORHOODS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""), name, type: 'bairro', state: 'PR' })),
  ...CITIES_PR.map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""), name, type: 'cidade', state: 'PR' })),
  ...CITIES_SC.map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""), name, type: 'cidade', state: 'SC' })),
  ...CITIES_RS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""), name, type: 'cidade', state: 'RS' })),
  ...CITIES_GO.map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""), name, type: 'cidade', state: 'GO' })),
  ...CITIES_DF.map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""), name, type: 'cidade', state: 'DF' }))
];

function getMetadata(urlPath: string) {
  if (urlPath === "/" || urlPath === "") {
    return {
      title: "Amarração Amorosa em Curitiba, Paraná, Santa Catarina, Rio Grande do Sul e Goiás - Filha de Ogum",
      description: "Especialista em Amarração Amorosa, Reconciliação de Casais e Alta Magia no Sul e Centro-Oeste. Resultados garantidos e sigilo total. Fale com Filha de Ogum."
    };
  }

  if (urlPath.startsWith("/local/")) {
    const id = urlPath.replace("/local/", "");
    const location = ALL_LOCATIONS.find(l => l.id === id);
    if (location) {
      const stateNames: Record<string, string> = {
        'PR': 'Paraná',
        'SC': 'Santa Catarina',
        'RS': 'Rio Grande do Sul',
        'GO': 'Goiás',
        'DF': 'Distrito Federal'
      };
      const stateName = stateNames[location.state || 'PR'];
      return {
        title: `Amarração Amorosa em ${location.name} - Filha de Ogum`,
        description: `Precisa de Amarração Amorosa em ${location.name}? Filha de Ogum é especialista em união de casais e alta magia em ${location.name} e todo o estado de ${stateName}. Sigilo absoluto e resultados.`
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

  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://www.amarracaoamorosacuritiba.shop";
    const today = new Date().toISOString().split('T')[0];
    
    const staticPages = [
      { url: "/", priority: "1.0", freq: "daily" },
      { url: "/sobre", priority: "0.7", freq: "monthly" },
      { url: "/servicos", priority: "0.9", freq: "weekly" },
      { url: "/amarracao-amorosa", priority: "0.9", freq: "weekly" },
      { url: "/contato", priority: "0.7", freq: "monthly" },
      { url: "/depoimentos", priority: "0.8", freq: "weekly" },
      { url: "/agendar", priority: "0.8", freq: "weekly" },
      { url: "/sitemap", priority: "0.5", freq: "monthly" },
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    staticPages.forEach(page => {
      xml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    ALL_LOCATIONS.forEach(loc => {
      xml += `
  <url>
    <loc>${baseUrl}/local/${loc.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    xml += "\n</urlset>";
    
    res.header("Content-Type", "application/xml");
    res.send(xml);
  });

  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;
    
    // Ignore asset requests that might have fallen through
    if (url.includes('.') && !url.endsWith('.html')) {
      return next();
    }

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
      const locationMatch = ALL_LOCATIONS.find(l => url.includes(l.id));
      const locationName = locationMatch ? locationMatch.name : "Curitiba";
      const stateCode = locationMatch?.state || "PR";
      
      const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Filha de Ogum - Amarração Amorosa",
        "alternateName": "Suprema Mídia - Consultoria Espiritual",
        "image": "https://img.supremamidia.com/suprema-img.png",
        "@id": "https://www.amarracaoamorosacuritiba.shop",
        "url": "https://www.amarracaoamorosacuritiba.shop",
        "telephone": "+5541997317607",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Centro",
          "addressLocality": locationName,
          "addressRegion": stateCode,
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -25.4290,
          "longitude": -49.2671
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -25.4290,
            "longitude": -49.2671
          },
          "geoRadius": "1000000"
        },
        "areaServed": [
          { "@type": "State", "name": "Paraná" },
          { "@type": "State", "name": "Santa Catarina" },
          { "@type": "State", "name": "Rio Grande do Sul" },
          { "@type": "State", "name": "Goiás" },
          { "@type": "State", "name": "Distrito Federal" },
          {
            "@type": "City",
            "name": locationName
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços Espirituais Suprema Mídia",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Amarração Amorosa",
                "description": "Trabalhos de união de casais e reconciliação amorosa com alta magia."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Limpeza Espiritual",
                "description": "Afastamento de energias negativas e abertura de caminhos."
              }
            }
          ]
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://wa.me/5541997317607"
        ]
      };

      const metaTags = `
        <title>${metadata.title} | Filha de Ogum</title>
        <meta name="description" content="${metadata.description}">
        <link rel="canonical" href="${canonical}">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta name="google-site-verification" content="5XMamsK6WwP7Yfw9IBCR0pdnOtaRh4822VJm5zDg1So" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
        
        <!-- Geolocation -->
        <meta name="geo.region" content="BR-${stateCode}">
        <meta name="geo.placename" content="${locationName}">
        <meta name="geo.position" content="-25.4290;-49.2671">
        <meta name="ICBM" content="-25.4290, -49.2671">

        <!-- Open Graph -->
        <meta property="og:title" content="${metadata.title} | Filha de Ogum">
        <meta property="og:description" content="${metadata.description}">
        <meta property="og:url" content="${canonical}">
        <meta property="og:type" content="website">
        <meta property="og:image" content="https://img.supremamidia.com/suprema-img.png">
        
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${metadata.title} | Filha de Ogum">
        <meta name="twitter:description" content="${metadata.description}">
        <meta name="twitter:image" content="https://img.supremamidia.com/suprema-img.png">
        
        <meta name="robots" content="index, follow">
        
        <!-- Schema Markup -->
        <script type="application/ld+json">
          ${JSON.stringify(schemaMarkup)}
        </script>
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
