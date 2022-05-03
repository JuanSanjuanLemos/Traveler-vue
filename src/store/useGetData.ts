import { api } from "@/services/api";
import { defineStore } from "pinia";


interface City {
  id: number;
  imgUrl: string;
  name: string;
  locals: {
    total: Number;
    turism: Number;
    event: Number;
  };
  localList:{
    name:String;
    type: String;
    typeId:Number;
    ratting: Number;
    imgUrl: String;
  }
  description: string;
  shortDescription: string;
}

export const useGetData = defineStore("getData", {
  state: () => ({
    cities: <City[]>[],

    citiesFirstColumn: <City[]>[],
    citiesSecondColumn: <City[]>[],

    citiesSearch: <City[]>[],
    listInScreen: <City[]>[],
    isCityFind: true
  }),
  getters: {
    getCities(state) {
      state.cities;
    },
  },
  actions: {
    async fetchCities() {
      try {
        const data = await api.get("/cities");
        const resp = data.data;

        this.cities = resp;
        this.listInScreen = this.cities;

        this.citiesFirstColumn = this.cities.slice(0, 3);
        this.citiesSecondColumn = this.cities.slice(3, 5);
      } catch (error) {
        alert(error);
      }
    },
    filterCities(valueSearch: string) {
      if (!valueSearch) {
        this.isCityFind = true;
        this.listInScreen = this.cities;
        return;
      }
      this.citiesSearch = this.cities.filter(
        (citie) => citie.name === valueSearch
      );
      
      if(this.citiesSearch.length===0 && valueSearch){
        this.isCityFind = false;
        return
      }
      this.listInScreen = this.citiesSearch;
    },
  },
});
