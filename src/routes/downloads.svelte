<script>
    import semver from 'semver';
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

    function compare(a, b) {
    
        // 1. Split the strings into their parts.
        const a1 = a.version.split('.');
        const b1 = b.version.split('.');    // 2. Contingency in case there's a 4th or 5th version
        const len = Math.min(a1.length, b1.length);    // 3. Look through each version number and compare.
        for (let i = 0; i < len; i++) {
            const a2 = +a1[ i ] || 0;
            const b2 = +b1[ i ] || 0;
            
            if (a2 !== b2) {
                return a2 > b2 ? 1 : -1;        
            }
        }
        
        return b1.length - a1.length;
    };

    downloads.sort(compare);
    downloads.sort((a,b) => (a.branch > b.branch) ? 1 : ((b.branch > a.branch) ? -1 : 0)).reverse();
    
</script>

<Title title='Downloads'/>

<div class="versions">
    {#each downloads as download}
        <details>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <summary>
                {#if download.branch == 'stable'}
                    <a href="downloads/chaosawakens-{download.mcVersion}-{download.version}.jar">
                        <h3>ChaosAwakens - {download.mcVersion} - {download.version}</h3>
                    </a>
                {:else if download.branch == 'alpha'}
                    <a href="downloads/ChaosAwakensAlpha{download.mcVersion}v{download.version}.jar">
                        <h3>ChaosAwakens Alpha - {download.mcVersion} - {download.version}</h3>
                    </a>
                {:else}
                    <a href="downloads/ChaosAwakensBeta{download.mcVersion}v{download.version}.jar">
                        <h3>ChaosAwakens Beta - {download.mcVersion} - {download.version}</h3>
                    </a>
                {/if}
            </summary>
            <p>
                {download.changelog}
            </p>
        </details>
    {/each}
</div>

<style lang="scss">
    details {
        user-select: none;
        width: 50%;
        margin: 30px;
        border-style: solid;
        border-color: white;
        border-radius: 10px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
        background-color: rgb(255, 255, 255);

        summary {
            display: flex;
            cursor: pointer;
            background-color: black;
            padding: 30px;

            h3 {
                font-family: 'IBM Plex Sans', sans-serif;
                color: rgb(255, 255, 255);
            }
        }

        summary::-webkit-details-marker {
            display: none;
        }

        p {
            color: rgb(0, 0, 0);
        }
    }
</style>