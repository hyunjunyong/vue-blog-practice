<template>
  <div id="name">
    <div v-for="(product, index) in productList" :key="index">
      <p>{{ index }}</p>
      <p>카태고리 : {{ product.category }}</p>
      <p>제품가격 : {{ product.price }}</p>
      <p>제품명 : {{ product.product_name }}</p>
      <p>배송료 : {{ product.delivery_price }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'name',
  data() {
    return {
      productList: [],
    };
  },
  created() {
    axios
      .get(
        'https://37603f60-d4c5-4142-9505-179ee2fe5cb2.mock.pstmn.io/mockData'
      )
      .then((res) => {
        this.productList = res.data;
        console.log(this.productList);
      });
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
