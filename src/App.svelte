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
</script>

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

  .title{
    font-size: 20px;
    font-weight: 500;
    color: var(--color-text);
    opacity: .5;
  }

  .error{
    font-size: 20px;
    font-weight: 500;
    color: $color-red;
    opacity: .5;
    position: absolute;
    bottom: -36px;
  }
</style>