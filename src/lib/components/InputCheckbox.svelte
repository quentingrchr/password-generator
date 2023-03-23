<script lang="ts">
  import form from "../stores/form";
  export let label: string;
  export let name: string;
</script>

<fieldset class="fieldset">
  <input class="input" type="checkbox" name={name} id={name} bind:checked={$form[name]} />
  <div class="checkbox">
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="64" d="M416 128L192 384l-96-96"/></svg>
  </div>
  <label class="label" for={name}>{label}</label>
</fieldset>

<style lang="scss">
	@import "$styles/theme.scss";
  .fieldset{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
  }
  .label{
    font-weight: 600;
    font-size: 20px;
    @include respond-below(sm){
      font-size: 12px;
    }
  }
  .input{
    display: none;
    &:checked{
      ~ .checkbox{
        border: 2px solid var(--color-brand);
        .checkmark{
          display: block;
        }
      }
    }
  }
  .checkbox {
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: 2px solid var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkmark{
      display: none;
      stroke: var(--color-brand);
    }
</style>
