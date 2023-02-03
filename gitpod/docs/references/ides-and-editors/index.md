---
section: ides-and-editors
title: IDEs & Editors
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
    import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
data={{
    description:
      "Connect and integrate Gitpod workspaces with your favourite IDE or editor. VS Code Browser and Desktop. JetBrains. IntelliJ. GoLand. PhpStorm. PyCharm. Vim. Emacs. SSH.",
    title: "Gitpod integrates with VS Code, JetBrains and SSH.",
    keywords: "online IDEs, JetBrains, VS Code, IntelliJ, PHPStorm, PyCharm, Rider, RubyMine, WebStorm, CLion etc.",
  }}
/>

# IDEs & Editors

In line with [our ambition to "remove all friction from the developer experience"](https://www.notion.so/gitpod/Values-Attributes-2ed4c2f93c84499b98e3b5389980992e), Gitpod currently supports many popular IDE/editors e.g. JetBrains and VS Code through both the browser and on desktop. You can even use the command-line directly for editors like Vim (via SSH). There are many ways to configure your IDE/editor in Gitpod to match your preferred workflow or setup.

## Connecting an IDE/editor to Gitpod

The three main ways to edit code or access a Gitpod workspace:

1. **Browser** - Using [VS Code Browser](/docs/references/ides-and-editors/vscode-browser).
2. **SSH** - Using an [SSH key](/docs/references/ides-and-editors/command-line#ssh-key-access) or an [Access Token](/docs/references/ides-and-editors/command-line#access-token-ssh).
3. **Desktop** - Using [VS Code Desktop](ides-and-editors/vscode) or [JetBrains Gateway](/docs/integrations/jetbrains-gateway).

### Supported IDE/editors

- [VS Code Browser](ides-and-editors/vscode-browser)
- [VS Code Desktop](ides-and-editors/vscode)
- [IntelliJ](ides-and-editors/intellij)
- [GoLand](ides-and-editors/goland)
- [PhpStorm](ides-and-editors/phpstorm)
- [PyCharm](ides-and-editors/pycharm)
- [RubyMine](ides-and-editors/rubymine)
- [WebStorm](ides-and-editors/webstorm)
- [Rider](ides-and-editors/rider)
- [CLion](ides-and-editors/clion)
- [Command Line (e.g. Vim)](ides-and-editors/command-line)

### Start a workspace with an IDE/editor

You can start a workspace with your favourite IDE/editor directly from [Gitpod Dashboard](https://gitpod.io/workspaces). You can do that from by clicking on the `New Workspace` button. Then, you can select the [context url](/docs/introduction/learn-gitpod/context-url), Editor and custom [workspace class](/docs/configure/workspaces/workspace-classes).

<figure>
<video onloadstart="this.playbackRate = 1.5;" controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-2xl mt-x-small" alt="Start Gitpod new workspace with options" src="/images/docs/new-workspace-start-with-options.webm" type="video/webm"></video>
    <figcaption>Open New Gitpod Workspace with your favourite IDE • <a href="https://gitpod.io/workspaces">Gitpod Dashboard</a></figcaption>
</figure>
