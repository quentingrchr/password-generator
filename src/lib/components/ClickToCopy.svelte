<script lang="ts">
  export let label: string;
  let buttonElement: HTMLDivElement;

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = label;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    buttonElement.classList.add("copied");
    setTimeout(() => {
      buttonElement.classList.remove("copied");
    }, 2000);
	}
</script>

<div class="container" on:click={copyToClipboard}>
  <p class="text">{label}</p>
  <div bind:this={buttonElement} class="clipboard" aria-hidden="true">
    <p class=clipboard-text>Copied!</p>
    <span class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Clipboard</title><path d="M420 48h-68V28a12 12 0 00-12-12H172a12 12 0 00-12 12v20H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V60a12 12 0 00-12-12zm-84.13 64H176.13V80h159.74z"/></svg>
    </span>
  </div>
</div>

<style lang="scss">
	@import "$styles/theme.scss";
  .container {
    background-color: var(--color-background-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: 100%;
    max-width: 100%;
    &:hover{
      .icon{
        svg, path{
          fill: var(--color-brand);
        }
      }
    }
  }

  .text{
    color: var(--color-text);
    opacity: .5;
    font-size: 32px;
    font-weight: 700;
    margin-left: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    @include respond-below(sm){
      font-size: 20px;
    }
  }

  :global(.clipboard){
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
    position: relative;
    width: 24px;
    height: 24px;
  }
  :global(.clipboard.copied){
    transition: all .2s ease-in-out;
    background-color: var(--color-brand);
    width: 74px;
    height: 24px;
    .clipboard-text{
      opacity: 1;
    }
    .icon{
      opacity: 0;
    }
  }

  .clipboard-text{
    transition: all .2s ease-in-out;
    opacity: 0;
    color: var(--color-background);
    position: absolute;
  }

  .icon{
    transition: all .2s ease-in-out;
    width: 24px;
    height: 24px;
    display: block;
    svg, path{
      fill: var(--color-text);
    }
  }
</style>
