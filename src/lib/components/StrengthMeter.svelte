<script lang="ts">

  export let score : number; 

  const levels = ["#FF0000", "#FFA500", "#FFFF00", "#7CFC00", "#00FF00"];

  const levelsText = [
    "Use stronger password, pls.", "Step up your password game.", "Wake up, Neo. Try again.", "FBI-proof password. No comment.", "Mr. Robot approved."
  ];

  
</script>

<div class="container" style="--bar-color: {score !== undefined ? levels[score] : "white" }">
  <p class="label">
    Strength
  </p>
  <div class="meter">
    {#if score !== undefined}
      <p class="value">{levelsText[score]}</p>
    {/if}
    <div class="bars">
      {#if score === undefined}
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      {:else}
      {#each levels as level, index}
        <div class:filled={index <= score} class="bar"></div>
      {/each}
      {/if}
    </div>  
  </div>
</div>

<style lang="scss">
	@import "$styles/theme.scss";
  .container{
    --bar-width: 8px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--color-background);
    padding: 18px 16px;
    @include respond-above(2xs){
      justify-content: space-between;
      .label{
        display: block;
      }
    }
    
  }

  .meter{
    display: flex;
    align-items: center;
    gap: 20px;
    
  }

  .value{
    color: var(--color-text);
    display: flex;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    // word-wrap: break-word;
    white-space: nowrap;
    @include respond-below(sm){
      font-size:8px;
    }
  }


  .label{
    color: var(--color-text);
    opacity: .5;
    display: flex;
    font-size: 18px;
    font-weight: 600;
    padding: 4px;
    text-transform: uppercase;
    display: none;
    @include respond-below(sm){
      font-size:8px;
    }
  }

  .bars{
    display: flex;
    gap: var(--bar-width);
    height: 100%;
    @include respond-below(sm){
      display: none;
    }
  }

  .bar{
    display: block;
    border: 1px solid var(--color-text);
    width: var(--bar-width);
    height: 100%;
    &.filled{
      background-color: var(--bar-color);
    }
  }
  

</style>
