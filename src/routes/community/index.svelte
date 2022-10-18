<script context="module">
  export const prerender = true;
</script>

<script>
  import CommunityLove from "$lib/components/community/community-love.svelte";
  import Contribute from "$lib/components/community/contribute.svelte";

  import OpenGraph from "$lib/components/open-graph.svelte";
  import FeatureBox from "$lib/components/feature-box.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import Resources from "$lib/components/resources.svelte";
  import { letsCollaborateActions as resources } from "$lib/contents/community";
  import Header from "$lib/components/header.svelte";
  import { primaryCtas as cards } from "$lib/contents/community/index";
</script>

<OpenGraph
  data={{
    title: "Gitpod Community - Come and hang out with us",
    description:
      "Join the Gitpod community. Browse categories, post your questions, or just chat with other members. On Discord, Twitter, GitHub, YouTube or Reddit.",
    keywords: "community hangout. discord, social",
  }}
/>

<Header
  title="Welcome to our community"
  text="Our community is at the centre of everything at Gitpod. We're
  excited to have you join us 🧡"
  fullWidth={true}
  textClassNames="max-w-3xl text-large mx-auto md:px-x-small"
>
  <Resources slot="content" {cards} />
</Header>

<Contribute />

<CommunityLove />

<SectionCommon
  title="Let’s collaborate"
  text="Would you like to collaborate? We’re excited to hear your ideas. Get in
  contact."
>
  <Resources cards={resources} slot="content" />
</SectionCommon>

<FeatureBox
  feature={{
    title: "Gitpod Community Heroes",
    paragraph:
      "Join us empowering developers to make engineering collaborative and joyful again. Are you our next community hero?",
    moreButton: {
      text: "View Community Heroes Program",
      href: "/community/heroes",
    },
    image: {
      src: "/images/heroes/heart-of-gitpod.webp",
      alt: "Community Heroes",
    },
  }}
/>
