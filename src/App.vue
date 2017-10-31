<template>
  <div id="app">
    <Button type="primary" v-on:click="greet2">问候</Button>
    <router-view></router-view>
    <router-link to="/table/1">表格</router-link>
    <router-link to="/form">表单</router-link>
    {{message}}
    <div v-html="testHtml"></div>
    <button v-bind:disabled="isButtonDisabled">Button</button></br>
    <input v-model="inputValue"></input>值:{{inputValue}}</br>
    <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <h1 v-if="ok">Yes</h1>
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <h1 v-show="ok">Hello!</h1>
    <div id="example-1">
        <button v-on:click="counter += 1">增加 1</button>
        <p>这个按钮被点击了 {{ counter }} 次。</p>
    </div>
    <div>
      <button v-on:click="greet">Greet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        message: 'hello world',
        testHtml: '<span>测试插入html</span>',
        isButtonDisabled: true,
        inputValue: '',
        selected: '',
        ok: true,
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        isActive: true,
        hasError: false,
        counter: 0
    }
  },
  methods: {
    greet: function (event) {
      alert(this.message + '!')
      if (event) {
        alert(event.target.tagName)
      }
    },
    greet2: function () {
        this.$Message.success('Hello World');
    }
  }
}
</script>
