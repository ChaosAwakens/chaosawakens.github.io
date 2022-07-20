<script>
    import Nav from './Nav.svelte';
    let img = 'images/logo.png';
</script>

<header>
    <img src={img} alt='ChaosAwakens logo'/>
    <Nav items=
        {
            [
                {
                    link: "/downloads",
                    name: "Downloads",
                },
                {
                    link: "/about",
                    name: "About",
                },
                {
                    link: "/discord",
                    name: "Discord",
                    target: "_blank"
                },
                {
                    link: "https://github.com/chaosawakens",
                    name: "GitHub",
                    target: "_blank"
                },
            ]
        }
    />
</header>

<style lang="scss">
    header {
        background-color: rgb(0, 0, 0);
        img {
            height: 15vh;
            margin-right: auto;
            margin-left: auto;
            display: block;
        }
    }
</style>