import { createApp, watch } from "vue";

import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Server } from "miragejs";
import { useGetData } from "./store/useGetData";
const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount("#app");

new Server({
  routes() {
    this.get("/api/cities", () => {
      return [
        {
          id: 1,
          name: "Florianópolis",
          locals: {
            total: 98,
            turism: 67,
            food: 20,
            event: 11,
          },
          localList: [
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
          ],
          description:
            "Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.",
          shortDescription:
            "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",

          imgUrl:
            "http://queropassagem.com.br/blog/wp-content/uploads/2019/10/floripa-noite-610x407.jpg",
          bannerUrl:
            "https://static.whow.com.br/wp-content/uploads/2019/11/2BFoto-Flickr-Pexels_Santa-Catarina-capa.jpg",
        },
        {
          id: 2,
          name: "Blumenau",
          locals: {
            total: 29,
            turism: 67,
            food: 20,
            event: 11,
          },
          localList: [
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
          ],
          description:
            "Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.",
          shortDescription:
            "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",

          imgUrl:
            "https://www.dicasdeviagem.com/wp-content/uploads/2019/04/hoteis-blumenau.jpg",
          bannerUrl:
            "https://content.r9cdn.net/rimg/dimg/69/75/a01e31f9-city-41485-17d058160fb.jpg?width=1200&height=630&crop=true",
        },
        {
          id: 3,
          name: "Bombinhas",
          locals: {
            total: 43,
            turism: 20,
            food: 20,
            event: 3,
          },
          localList: [
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
          ],
          description:
            "Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.",
          shortDescription:
            "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",

          imgUrl:
            "https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/bombinhas%20foto%20divulgacao_1.jpg?Z83MiKSJplbxHRuIuQin60Txrbsir_TG",
          bannerUrl:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b1/d6/a5/fotos-aereas-da-praia.jpg?w=1200&h=-1&s=1",
        },
        {
          id: 4,
          name: "Águas Mornas",
          locals: {
            total: 13,
            turism: 7,
            food: 2,
            event: 3,
          },
          localList: [
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
          ],
          description:
            "Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.",
          shortDescription:
            "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",

          imgUrl:
            "https://www.temporadalivre.com/uploads/editor/pictures/8424919ea822/content_waterfall-950343_1920.jpg",
          bannerUrl:
            "https://www.temporadalivre.com/uploads/editor/pictures/8424919ea822/content_waterfall-950343_1920.jpg",
        },
        {
          id: 5,
          name: "Imbituba",
          locals: {
            total: 61,
            turism: 30,
            food: 20,
            event: 11,
          },
          localList: [
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
          ],
          description:
            "Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.",
          shortDescription:
            "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",

          imgUrl:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d7/f2/b9/img-20170226-165029-484.jpg?w=700&h=500&s=1",
          bannerUrl:
            "https://3.bp.blogspot.com/-_fnKyZbaYs8/UpcJ3QNzyuI/AAAAAAAA7nc/zFemb3HRDpI/s1600/Imbituba-SC.jpg",
        },
        {
          id: 6,
          name: "Jaraguá do Sul",
          locals: {
            total: 31,
            turism: 10,
            food: 10,
            event: 11,
          },
          localList: [
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
          ],
          description:
            "Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.",
          shortDescription:
            "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",

          imgUrl:
            "https://www.rkmotors.com.br/Assets/Imagens/2021/07/28//4b0a6901b2-o-que-fazer-e-conhecer-em-jaragua-do-sul.jpg",
          bannerUrl:
            "https://www.jdv.com.br/wp-content/uploads/2021/01/jaragua-do-sul-melhores-cidades-pra-fazer-negocio.jpg",
        },
        {
          id: 7,
          name: "Lages",
          locals: {
            total: 19,
            turism: 7,
            food: 2,
            event: 10,
          },
          localList: [
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
          ],
          description:
            "Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.",
          shortDescription:
            "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",

          imgUrl:
            "https://media-cdn.tripadvisor.com/media/photo-s/15/cf/9f/ea/centro-lages.jpg",
          bannerUrl:
            "https://www.lages.sc.gov.br/imagens_noticias/1579205243163.png",
        },
        {
          id: 8,
          name: "Rio do Sul",
          locals: {
            total: 27,
            turism: 15,
            food: 12,
            event: 0,
          },
          localList: [
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
            {
              name: "Doce & Compainha",
              imgUrl:
                "https://www.sucessosa.com.br/uploads/imagens/439cb8f97563c46e27ea47475ab2cb91.jpg",
              type: "Comida e Bebida",
              typeId: 1,
              ratting: 4.7,
            },
            {
              name: "Lago da Conceição",
              imgUrl:
                "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2014/12/margem-lagoa-da-conceicao-florianopolis-sc_640.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 5.0,
            },
            {
              name: "Praia do Campeche",
              imgUrl:
                "https://www.temporadalivre.com/blog-media/ilhadocampeche2.jpg",
              type: "Pontos Turísticos",
              typeId: 2,
              ratting: 4.9,
            },
            {
              name: "Expo Tatto Floripa",
              imgUrl: "https://cdn.ocp.news/2018/08/EXPOTATTOO-2.jpg",
              type: "Eventos Organizados",
              typeId: 3,
              ratting: 5.0,
            },
          ],
          description:
            "Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.",
          shortDescription:
            "É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.",

          imgUrl:
            "https://static.fecam.net.br/thumbs/1991/2602189_resize_1100_.JPG",
          bannerUrl:
            "https://www.viagensecaminhos.com/wp-content/uploads/2020/12/catedral-rio-do-sul.jpg",
        },
      ];
    });
  },
});

const store = useGetData();

store.fetchCities();
