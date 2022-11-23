<script>
    import Nav from './Nav.svelte';
    let img = 'images/logo.png';
</script>

<header>
    <a href="/">
        <img src={img} alt='ChaosAwakens logo'/>
    </a>
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
                    link: "https://discord.gg/hnCKD4M87R",
                    name: "Discord",
                    target: "_blank"
                },
                {
                    link: "https://chaos-awakens.fandom.com/wiki/Chaos_Awakens_Wiki",
                    name: "Wiki",
                    target: "_blank"
                },
                {
                    link: "https://github.com/chaosawakens",
                    name: "GitHub",
                    target: "_blank"
                },
                {
                    link: "https://www.curseforge.com/minecraft/mc-mods/chaos-awakens",
                    name: "Curseforge",
                    target: "_blank"
                },
                {
                    link: "https://modrinth.com/mod/chaos-awakens",
                    name: "Modrinth",
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
