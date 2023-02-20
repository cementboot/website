import type { Feature, verticalFeature } from "$lib/types/feature";
import { terminalSource, linuxSource } from "../terminal";
// @ts-ignore
import Workspaces from "$lib/components/workspaces.svelte";
import type { Card } from "$lib/types/card";

export const multiTrackDevelopmentFeature: Feature = {
  title: "Multi track development with ease",
  paragraph:
    "You can have multiple workspaces with different contexts open at once - one for your feature, one for a bug or one for your code review directly in Gitpod.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const reduceDeveloperToil: Feature = {
  title: "Reduce developer toil",
  paragraph:
    "Cut the number of support requests in half and decrease the time spent on them to mere minutes. </br></br>Platform engineering teams enable developer self-service by configuring environments once and letting Gitpod take care of the rest.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const worksOnAnyMachineFeature: Feature = {
  title: `Works on <t style="text-decoration-line: line-through; color: #999795;">my</t> any machine`,
  paragraph:
    "Say goodbye to compatibility issues and configuration drift. Create a joyful developer experience on any machine. </br></br> With a single click, spin up a fresh development environment in a container in the cloud.",
  image: {
    src: "/images/features/works-on-any-machine.webp",
    alt: "Works on any machine",
    width: "100%",
    height: "100%",
  },
};

export const collaborationFeature: Feature = {
  title: "Collaborate with ease",
  paragraph:
    "Engineers, designers, product managers. With Gitpod, anyone on the team can run code with ease. Yes, your CTO as well 🫶</br></br>Share running workspaces for pair programming, use port forwarding or share a snapshot of your CDE.",
  // image: {
  //   src: "/images/features/collaboration.png",
  //   alt: "Collaboration",
  //   classNames: "shadow-medium",
  //   styles: "border-radius: 7px",
  // },
  lottie: {
    src: "/lottie/share_workspace.json",
    id: "share-workspace",
  },
};

export const secureYourSoftwareSupplyChainFeature: Feature = {
  title: "Secure your software supply chain",
  paragraph:
    "<a href='/cde'>CDEs</a> are ephemeral, short-lived, and isolated from other work. With Gitpod, there’s no need to download any code to your machine. </br></br>Gitpod builds artefacts from a central place enabling you to fix vulnerabilities instantly across your team.",
  previewComponent: Workspaces,
};

export const codeAnywhereFeature: Feature = {
  title: "Code anywhere, on any device",
  paragraph:
    "You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. ",
  image: {
    src: "/images/features/ipad.webp",
    alt: "Gitpod Workspace on an iPad.",
    width: "100%",
    height: "100%",
  },
};

export const features: Feature[] = [
  worksOnAnyMachineFeature,
  secureYourSoftwareSupplyChainFeature,
  // {
  //   title: "Works on my machine - and yours",
  //   paragraph:
  //     "Spin up pre-configured, standardized dev environments from any git context when you need them and close them when you're done. You won’t go back to the friction of long-living stateful environments. ",
  //   previewComponent: Workspaces,
  // },
];

export const otherFeatures: Feature[] = [
  reduceDeveloperToil,
  // {
  //   title: "Bringing dev closer to prod",
  //   paragraph:
  //     "Gitpod provisions powerful Linux containers under the hood. A Linux shell with root/sudo, a file system, Docker and all other tools and binaries that run on Linux. One OS for both dev and prod.",
  //   moreButton: {
  //     href: "https://gitpod.io/workspaces/",
  //     text: "Try now",
  //   },
  //   terminal: {
  //     source: linuxSource,
  //     dark: true,
  //     shadow: false,
  //     narrow: true,
  //     skipToEnd: true,
  //   },
  // },
  {
    ...collaborationFeature,
    // moreButton: {
    //   href: "/docs/configure/workspaces/collaboration",
    //   text: "More on collaboration",
    // },
  },
  {
    title: "Work at datacenter performance",
    paragraph:
      "Downloads all your tools and packages at datacenter internet and networking speed.</br></br>Prebuilds speed you up by building your branches in the background and large workspaces give you the power for heavy-lifting tasks. Meanwhile, your laptop battery lasts.",
    terminal: {
      source: terminalSource,
    },
  },
];

export const carbonNeutralFeature: verticalFeature = {
  title: "Code in a carbon-neutral workspace",
  paragraph:
    "Not only is Gitpod more resource-efficient but it also runs on 100% carbon-neutral cloud servers (GCP). All the power, with a lower cost to our planet.",
  moreButton: {
    href: "https://cloud.google.com/sustainability",
    text: "More on GCP carbon neutral",
    type: "secondary",
  },
};

export const secondaryFeatures: Card[] = [
  {
    icon: {
      src: "/svg/icons/up-arrow.svg",
    },
    title: "Onboard faster",
    text: "Get new hires or contractors to commit their first PR on day 1 without shipping a company laptop.</br></br>Gitpod reduces complexity by providing a plug & play experience for software development.",
  },
  {
    icon: {
      src: "/svg/icons/gear-play.svg",
    },
    title: "Remove friction",
    text: "Give your developers full control over what device they use, wherever they are in the world.</br></br>Gitpod creates an identical developer experience for everyone, on every machine.",
  },
  {
    icon: {
      src: "/svg/icons/secure.svg",
    },
    title: "Increase security",
    text: "Remove your team’s local machines as an attack vector in your software supply chain.</br></br>Gitpod helps you retain control over your resources and protect your company source code from malicious attacks.",
  },
  {
    icon: {
      src: "/svg/icons/team.svg",
    },
    title: "Collaborate easily",
    text: "Enable faster collaboration across all team members, in realtime.</br></br>With Gitpod, teams can work on several workspaces in parallel and share them in seconds.",
  },
];

/**Dedicated Features
 * Using on /self-hosted page
 *
 */

export const maximizeControl: Feature = {
  title: "Maximize control",
  paragraph:
    "Gitpod Dedicated is a single-tenant installation that runs your Cloud accounts or ours.</br></br>Maximize control, minimize overhead and create frictionless developer experiences.",
  previewComponent: Workspaces,
};

export const devsDontCareAboutMachines: Feature = {
  title: "Dev environments that don't care about machines",
  paragraph:
    "Gitpod Dedicated is a single-tenant installation that runs your Cloud accounts or ours.</br></br>Maximize control, minimize overhead and create frictionless developer experiences.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const dedicatedFeatures: Feature[] = [
  maximizeControl,
  devsDontCareAboutMachines,
];
