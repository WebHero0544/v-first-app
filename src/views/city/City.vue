<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch :cities="cities"></CitySearch>
        <CityList :hotCities="hotCities" :cities="cities" :letter="letter"></CityList>
        <CityAlphabet :cities="cities" @letterChange="onLetterChange"></CityAlphabet>
    </div>
</template>

<script>
import axios from 'axios';

import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphabet from './components/Alphabet';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      letter: '',
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then((res) => {
        if (res.data.ret && res.data.data) {
          this.hotCities = res.data.data.hotCities;
          this.cities = res.data.data.cities;
        }
      });
    },
    onLetterChange(letter) {
      this.letter = letter;
    },
  },
};
</script>
