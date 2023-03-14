<script lang="ts">
  import { onMount } from "svelte";
  import type { StrengthStatus } from "../../types";
  import Button from "./Button.svelte";
  import InputCheckbox from "./InputCheckbox.svelte";
  import InputSlider from "./InputSlider.svelte";
  import StrengthMeter from "./StrengthMeter.svelte";

  export let onSubmit: (event: SubmitEvent) => void;
  export let strength: StrengthStatus | undefined;
</script>

<form class="form" on:submit={onSubmit} >
  <InputSlider label="Character Length" name="length" focusOnMount={true} />
  <div class="checkboxes">
    <input  type="hidden" name="focus-input" />
    <InputCheckbox label="Include uppercased letters" name="with-uppercase" />
    <InputCheckbox label="Include lowercased letters" name="with-lowercase" />
    <InputCheckbox label="Include numbers" name="with-numbers" />
    <InputCheckbox label="Include symbols" name="with-symbols"/>
  </div>
  <StrengthMeter status={strength} />
  <Button label="Generate" type="submit"/>
</form>

<style lang="scss">
	@import "$styles/theme.scss";
  
	.form{
    background-color: var(--color-background-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 36px;
    padding: 16px;
    width: 100%;
  }

  .checkboxes {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
</style>
