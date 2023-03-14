<script lang="ts">
  export let label: string;
  export let type: 'button' | 'submit' = 'button';
  

  
</script>

<button class="button" type={type}>
  <p>{label}</p> <span class="icon" aria-hidden="true">→</span>
</button>

<style lang="scss">
	@import "$styles/theme.scss";
  .button {
    background-color: $color-green;
    color: var(--color-background);
    border: none;
    outline: none;
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-size: 18px;
    text-transform: uppercase;
    padding: 16px 20px;
    letter-spacing: 1.3px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    align-items: center;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    .icon{
      transition: transform 0.2s ease-in-out;
    }

    &:hover{
      background-color: var(--color-background);
      border: 2px solid $color-green;
      color: var(--color-text);
    } 

    &:focus {
      .icon {
        transform: translateX(4px);
      }
    }
  }
</style>
