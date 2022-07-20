<script>
    export let items = [];
</script>

<nav>
    {#each items as item}
        <a href="{item.link}" target="{item.target}" class="nav-link">
            <span>{item.name}</span>
        </a>
    {/each}
</nav>

<style lang="scss">
    a {
        text-decoration: none;
        align-items: center;
        font-size: large;
        display: inline-block;
        color: gray;
        padding: 10px;
        transition: 0.1s ease-in-out;
    }

    a:hover {
        color: white;
        transform: translateY(-5px);
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>