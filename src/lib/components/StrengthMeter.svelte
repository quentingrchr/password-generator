<script lang="ts">
  import type { StrengthStatus } from "../../types";

  export let status : StrengthStatus | undefined = undefined;

  const statusMap: Record<StrengthStatus, {
    color: string;
    bars: boolean[];
  }> = {
    weak: {
      color: "red",
      bars: [true, true, false, false],
    },
    medium: {
      color: "orange",
      bars: [true, true, true, false],
    },
    strong: {
      color: "green",
      bars: [true, true, true, true],
    },
  };
</script>

<div class="container" style="--bar-color: {status !== undefined ? statusMap[status].color : "white" }">
  <p class="label">
    Strength
  </p>
  <div class="meter">
    {#if status !== undefined}
      <p class="value">{status}</p>
    {/if}
    <div class="bars">
      {#if status === undefined}
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      {:else}
      {#each statusMap[status].bars as bar}
        <div class:filled={bar} class="bar"></div>
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
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
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
  }

  .bars{
    display: flex;
    gap: var(--bar-width);
    height: 100%;
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
