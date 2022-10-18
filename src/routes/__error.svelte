<script context="module">
  export const prerender = true;

  export function load({ error, status }) {
    return {
      props: { error, status },
    };
  }
</script>

<script lang="ts">
  import { dev } from "$app/env";
  import Header from "$lib/components/header.svelte";
  import ImageLightDark from "$lib/components/image-light-dark.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";

  export let status: number;
  export let error: Error;
</script>

<OpenGraph
  data={{
    description: "404 Oh, no! Something went wrong on our side.",
    title: "Page Not Found",
  }}
/>

<Header title={`${status}`}>
  <div slot="content">
    <ImageLightDark
      image={{
        src: "/images/404.webp",
        darkSrc: "/images/404-dark.webp",
        alt: "404",
      }}
      class="mx-auto w-full max-w-xl mb-xx-small"
    />
    <p class="mb-micro">You just hit a route that doesn't exist</p>
    <LinkButton variant="primary" size="large" href="/"
      >Back to safety</LinkButton
    >
    {#if dev}
      <p class="mt-x-small">{error.message}</p>
    {/if}
  </div>
</Header>

{#if dev && error.stack}
  <article
    class="p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-card"
  >
    <pre>{error.stack}</pre>
  </article>
{/if}
