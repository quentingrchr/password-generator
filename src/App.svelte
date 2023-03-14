<script lang="ts">
  import form from "./lib/stores/form";
  import ClickToCopy from "./lib/components/ClickToCopy.svelte";
  import Form from "./lib/components/Form.svelte";
  import generatePassword from "./lib/utils/generatePassword";
  import validateForm from "./lib/utils/validateForm";
  import type { PasswordData } from "./types";
  let pwData : PasswordData | undefined = undefined;
  let error: undefined | string = undefined


  function onSubmit(event: SubmitEvent) {
    error = undefined;
    event.preventDefault();
    const validate = validateForm($form);
    if(!validate.valid){
      error = validate.message;
    } else {
      pwData = generatePassword($form.length, {
        withUppercase: $form['with-uppercase'],
        withLowercase: $form['with-lowercase'],
        withNumbers: $form['with-numbers'],
        withSymbols: $form['with-symbols']
      })
      
    }
  }

  function toggleTheme(){
    document.querySelector('body')?.classList.toggle('light');
  }
</script>

<div class="page">
<header class="header">
  <span class="icon" on:click={toggleTheme}>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><title>Contrast</title><path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zM128.72 383.28A180 180 0 01256 76v360a178.82 178.82 0 01-127.28-52.72z"/></svg>
  </span>
</header>
<main class="main">
  <div class="container">
    <h1 class="title">Password Generator</h1>
    <ClickToCopy label={pwData?.password ? pwData?.password : "Password"}/>
    <Form onSubmit={onSubmit} strength={pwData?.strength ? pwData.strength : undefined}/>
    {#if error}
      <p class="error">{error}</p>
    {/if}
  </div>
</main>
</div>


<style lang="scss">
  @import "./styles/global.scss";
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    position: relative;
    max-width: 80vw;
    @include respond-above(sm){
      min-width: 400px;
    }
    
    @include respond-above(md){
      min-width: 600px;
    }

    @include respond-above(lg){
      max-width: 600px;
    }

    
  }

  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-height: 768px) {
      justify-content: center;
      .header{
        display: none;
      }
    }
  }

  .main {
    height: 80vh;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: "Lato", sans-serif;
  }

  .title{
    font-size: 20px;
    font-weight: 500;
    color: var(--color-text);
  }

  .error{
    font-size: 20px;
    font-weight: 500;
    color: $color-red;
    opacity: .5;
    position: absolute;
    bottom: -36px;
  }

  .header{
    flex: 1;
    align-self: flex-end;
    width: 100%;
    display: flex;
    padding: 5vh 10vw;
    justify-content: center;
    align-items: center;

    .icon{
      cursor: pointer;
      height: 36px;
      width: 36px;
      svg{
        fill: var(--color-text);
      }
    }
  }
</style>