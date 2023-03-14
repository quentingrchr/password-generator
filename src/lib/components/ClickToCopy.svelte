<script lang="ts">
  export let label: string;

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = label;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
	}
</script>

<div class="container" on:click={copyToClipboard}>
  <p class="text">{label}</p>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Clipboard</title><path d="M420 48h-68V28a12 12 0 00-12-12H172a12 12 0 00-12 12v20H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V60a12 12 0 00-12-12zm-84.13 64H176.13V80h159.74z"/></svg>
  </span>
</div>

<style lang="scss">
	@import "$styles/theme.scss";
  .container {
    background-color: $color-grey-900;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: 100%;
    max-width: 100%;
    
    &:hover{
      .icon{
        svg, path, rect{
          fill: $color-green;
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
    flex: 1;
  }

  .icon{
    width: 24px;
    height: 24px;
    svg, path, rect{
      fill: var(--color-text);
    }
  }
</style>
