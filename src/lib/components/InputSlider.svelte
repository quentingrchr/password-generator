<script lang="ts">
  import form from "../stores/form";
  import { get } from "svelte/store";
  import { onMount } from "svelte";
  export let label: string;
  export let name: string;
  export let focusOnMount: boolean = false;
  let inputElement: HTMLInputElement;
  onMount(() => {
    inputElement.focus();
  });
</script>

<fieldset class="fieldset">
  <div class="infos">
    <label class="label" for={name}>{label}</label>
    <span class="value">{$form[name]}</span>
  </div>
  <input class="input" type="range" id={name} bind:this={inputElement} bind:value={form[name]} on:input={(e) => {
    form.update((values) => {
      values[name] = e.target.value;
      return values;
    });
  }} min="1" max="25" step="1" />
</fieldset>

<style lang="scss">
	@import "$styles/theme.scss";

  .fieldset{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
  }
  .label{
    font-weight: 400;
    font-size: 18px;
    @include respond-below(sm){
      font-size: 12px;
    }
  }

  .input{
  }

  .infos{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .value{
    color: var(--color-brand);
    font-size: 20px;
    font-weight: 700;
    @include respond-below(sm){
      font-size: 14px;
    }
    
  }

  input[type="range"] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px var(--color-background), 0px 0px 1px var(--color-background);
  background: var(--color-background);
  border-radius: 1.3px;
  border: 0.2px solid var(--color-background);
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px var(--color-background), 0px 0px 1px var(--color-background);
  border: 1px solid var(--color-background);
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: var(--color-background);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: var(--color-background);
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px var(--color-background), 0px 0px 1px var(--color-background);
  background: var(--color-background);
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 1px 1px 1px var(--color-background), 0px 0px 1px var(--color-background);
  border: 1px solid var(--color-background);
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: var(--color-background);
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}

input[type="range"]::-ms-fill-lower {
  background: var(--color-background);
  border: 0.2px solid var(--color-background);
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px var(--color-background), 0px 0px 1px var(--color-background);
}
input[type="range"]::-ms-fill-upper {
  background: var(--color-background);
  border: 0.2px solid var(--color-background);
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px var(--color-background), 0px 0px 1px var(--color-background);
}
input[type="range"]::-ms-thumb {
  box-shadow: 1px 1px 1px var(--color-background), 0px 0px 1px var(--color-background);
  border: 1px solid var(--color-background);
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: var(--color-background);
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: var(--color-background);
}
input[type="range"]:focus::-ms-fill-upper {
  background: var(--color-background);
}


  
</style>
