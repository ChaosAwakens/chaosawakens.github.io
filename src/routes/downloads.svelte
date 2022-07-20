<script>
    import Title from '$lib/components/Title.svelte';

    let downloads = [
        //STABLE

        {
            version: '0.9.0.0',
            mcVersion: '1.16.5',
            branch: 'stable',
            changelog: 'beta'
        },
        {
            version: '0.9.0.1',
            mcVersion: '1.16.5',
            branch: 'stable',
            changelog: 'beta'
        },
        {
            version: '0.9.0.2',
            mcVersion: '1.16.5',
            branch: 'stable',
            changelog: 'beta'
        },
        {
            version: '0.9.0.3',
            mcVersion: '1.16.5',
            branch: 'stable',
            changelog: 'beta'
        },
        {
            version: '0.9.0.4',
            mcVersion: '1.16.5',
            branch: 'stable',
            changelog: 'beta'
        },
        {
            version: '0.10.0.0',
            mcVersion: '1.16.5',
            branch: 'stable',
            changelog: 'beta'
        },
        {
            version: '0.10.0.1',
            mcVersion: '1.16.5',
            branch: 'stable',
            changelog: 'beta'
        },
        {
            version: '0.10.0.2',
            mcVersion: '1.16.5',
            branch: 'stable',
            changelog: 'beta'
        },

        //ALPHA

        {
            version: '0.1',
            mcVersion: '1.16.5',
            branch: 'alpha',
            changelog: 'beta'
        },
        {
            version: '0.2',
            mcVersion: '1.16.5',
            branch: 'alpha',
            changelog: 'beta'
        },
        {
            version: '0.3',
            mcVersion: '1.16.5',
            branch: 'alpha',
            changelog: 'beta'
        },
        {
            version: '0.4',
            mcVersion: '1.16.5',
            branch: 'alpha',
            changelog: 'beta'
        },

        //BETA

        {
            version: '0.5',
            mcVersion: '1.16.5',
            branch: 'beta',
            changelog: 'beta'
        },
        {
            version: '0.6',
            mcVersion: '1.16.5',
            branch: 'beta',
            changelog: 'beta'
        },
        {
            version: '0.7',
            mcVersion: '1.16.5',
            branch: 'beta',
            changelog: 'beta'
        },
        {
            version: '0.7b',
            mcVersion: '1.16.5',
            branch: 'beta',
            changelog: 'beta'
        },
        {
            version: '0.8',
            mcVersion: '1.16.5',
            branch: 'beta',
            changelog: 'beta'
        },
        {
            version: '0.8b',
            mcVersion: '1.16.5',
            branch: 'beta',
            changelog: 'beta'
        },
        {
            version: '0.8c',
            mcVersion: '1.16.5',
            branch: 'beta',
            changelog: 'beta'
        },
        {
            version: '0.8d',
            mcVersion: '1.16.5',
            branch: 'beta',
            changelog: 'beta'
        },
    ]
</script>

<Title title='Downloads'/>

<div class="versions">
    {#each downloads as download}
        <div class="collapse-wrapper">
            <input type="checkbox">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                {#if download.branch == 'stable'}
                    <a href="downloads/chaosawakens-{download.mcVersion}-{download.version}.jar">
                        ChaosAwakens - {download.mcVersion} - {download.version}
                    </a>
                {:else if download.branch == 'alpha'}
                    <a href="downloads/ChaosAwakensAlpha{download.mcVersion}v{download.version}.jar">
                        ChaosAwakens Alpha - {download.mcVersion} - {download.version}
                    </a>
                {:else}
                    <a href="downloads/ChaosAwakensBeta{download.mcVersion}v{download.version}.jar">
                        ChaosAwakens Beta - {download.mcVersion} - {download.version}
                    </a>
                {/if}
            </label>
            <div class="changelog">
                <p>
                    {download.changelog}
                </p>
            </div>
        </div>
    {/each}
</div>