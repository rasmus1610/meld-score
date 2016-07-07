<template lang="html">
  <div class="container">
    <h1>Meld<span>score</span></h1>
      <router-view></router-view>
  </div>
</template>

<script>

import store from './store'

export default {

}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Raleway:100,400,300);

  $primary: #34495E;
  $accent: #e67e22;
  $grey: #b3b3b3;

  body {
    display: flex;
    justify-content: center;
    background-color: #7f8c8d;
  }

  .container {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 20px auto;
    padding: 50px;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    font-size: 18px;
    max-width: 400px;
    height: 441px;
    background: $primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      color: white;
      font-size: 18px;
    }
  }

  h1 {
    margin-top: 0;
    color: white;
    text-transform: uppercase;
    font-weight: 100;
    span {
      font-weight: 400;
      color: $accent;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 30px auto;
  }

  input[type="text"] {
    font-weight: 300;
    margin-top: 15px;
    font-size: 18px;
    border: none;
    background: transparent;
    border-bottom: 1px solid white;
    color: white;
    transition: all 0.3s;
    &:focus {
      outline: none;
      border-bottom: 1px solid $accent;
      margin-top: 15px;
    }
  }

  label {
    color: white;
    span {
      color: #9b9b9b;
      font-size: 14px;
    }
  }

  input[type="submit"],
  button {
    text-transform: uppercase;
    color: white;
    background: $primary;
    border: 2px solid white;
    border-radius: 50px;
    font-size: 18px;
    padding: 10px 15px;
    transition: all 0.5s;
    &:hover {
      color: $primary;
      background: $accent;
      cursor: pointer;
      border: 2px solid $accent;
    }
    &:disabled {
      color: $grey;
      border-color: $grey;
      &:hover {
        color: $grey;
        background: $primary;
        border-color: $grey;
      }
    }
  }

  .score {
    font-weight: 400;
    font-size: 100px;
  }


</style>
