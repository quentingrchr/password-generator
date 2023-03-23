<script lang="ts">
  import InputCheckbox from "./InputCheckbox.svelte";
  import InputSlider from "./InputSlider.svelte";
  import StrengthMeter from "./StrengthMeter.svelte";

  export let score : number; 
  export let timeToCrack: string | undefined;
</script>

<form class="form" >
  <InputSlider label="Character Length" name="length" focusOnMount={true} />
  <div class="checkboxes">
    <input  type="hidden" name="focus-input" />
    <InputCheckbox label="Include uppercased letters" name="with-uppercase" />
    <InputCheckbox label="Include lowercased letters" name="with-lowercase" />
    <InputCheckbox label="Include numbers" name="with-numbers" />
    <InputCheckbox label="Include symbols" name="with-symbols"/>
  </div>
  <StrengthMeter score={score} />
  <dl  class="time-to-crack">
    <dt>Time to crack:</dt>
    <dd>{timeToCrack}</dd>
  </dl>
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

  .time-to-crack{
    color: var(--color-text);
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    align-self: flex-start;
    padding-bottom: 12px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 100%;
    @include respond-below(sm){
      flex-direction: column;
      align-items: center;
      font-size: 12px;
    } 
    dt{
      opacity: 0.5;
    }
  }
</style>
