<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { dedicatedFeatures } from "$lib/contents/home/features";
  import Testimonials from "$lib/components/index/testimonials.svelte";
  import { testimonials } from "$lib/contents/home/index";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Section from "$lib/components/section.svelte";
  import Features from "$lib/components/features.svelte";
  import Signup from "$lib/components/dedicated/signup.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Deploy and operate Gitpod yourself. Install Gitpod Self-Hosted on GKE, EKS, AKS or Kubernetes. Made for teams. Free for up to 10 users.",
    title: "Gitpod Self-Hosted - Run Gitpod on your infrastructure",
    keywords:
      "self-hosted, self-managed, download, installation, infrastructure, kubernetes, deploy, teams",
  }}
/>

<Section class="text-center">
  <h2 class="text-5xl font-bold">Gitpod self-hosted alternative</h2>
  <p class="text-lg sm:text-2xl mt-micro mb-x-small mx-auto max-w-4xl">
    Run Gitpod in your own Cloud account with Gitpod Dedicated, our self-hosted
    alternative great for large teams.
  </p>
  <LinkButton
    href="/dedicated"
    text="Request early access"
    variant="primary"
    size="large"
    data-analytics={`{"context":"self-hosted"}`}
  />
</Section>

<Section>
  <Features features={dedicatedFeatures} />
</Section>

<Section>
  <Testimonials
    title="Trusted by the best developer teams"
    text=" "
    class="-mb-20"
    {testimonials}
  />
</Section>

<Section class="flex" id="dedicated-request-access">
  <div
    class="max-w-4xl flex lgx:items-start flex-col items-center text-center lgx:text-left lgx:pt-xx-small m-auto"
  >
    <h2 class="h3 !mb-micro md:!mb-x-small align-middle">
      Get started with Gitpod Dedicated
    </h2>
    <div class="max-w-[460px] text-p-large align-middle">
      <p class="">
        Gitpod Dedicate is best for engineering teams of 50 - 500 developers.
        Get Early Access today.
      </p>
      <br />
    </div>
  </div>
  <div class="max-w-2xl justify-center ">
    <Signup class="lgx:hidden mx-auto" toType="dedicated-signup" />
  </div>
  <Signup toType="dedicated-signup" class="hidden lgx:block" />
</Section>
