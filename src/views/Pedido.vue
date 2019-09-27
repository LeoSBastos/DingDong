<template>
  <div class="podido">
    <center class="psdb">
      <h3>Encomendar Produtos Faltantes</h3>
    </center>
    <div>
      <div class="row align-items-center">
        <div class="col-md-3 offset-md-2">
          <label>Selecionar Produto</label>
        </div>
        <div class="col-md-4">
          <b-select class="formulaone" v-model="selected" :options="options"></b-select>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-3 offset-md-2">
          <label>Selecionar Quantidade</label>
        </div>
        <div class="col-md-4">
          <b-input class="formulaone" type="text"></b-input>
        </div>
      </div>
      <center>
        <b-btn class="formulaone" variant="outline-dark">Submeta-se a mim</b-btn>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pedido",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Selecione o Valor desse K7" },
        { value: "a", text: "CD Virgem" },
        { value: "b", text: "DVD +18" }
      ]
    };
  }
};
document.title = "Pedido";
</script>

<style scoped>
.formulaone {
  margin: 10px;
}
.podido {
  background-color: #ff00ff88;
  height: 72vh;
  width: 100%;
}
.psdb {
  margin-bottom: 22vh;
}
</style>
