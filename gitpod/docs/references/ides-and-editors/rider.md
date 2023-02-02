---
section: ides-and-editors
title: Rider
---

<!--
  This document is auto generated from generators/ide/jb-product.md
  Edit this file instead and run `yarn generate:jb`to apply.
-->

<script context="module">
  export const prerender = true;
</script>

<!-- prettier-ignore -->
# Rider

> {title} is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

## Getting started

1. **Install [JetBrains Gateway](https://www.jetbrains.com/help/rider/Remote_development-a.html#gateway#gateway)** - With the [JetBrains Gateway and Gitpod](/docs/integrations/jetbrains-gateway) plugin you can create and manage your latest 20 Gitpod workspaces.
2. **Install the Gitpod plugin** - Open JetBrains Gateway and you'll see the Gitpod logo on the main page. Click "install" to install the [Gitpod plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway) for JetBrains Gateway.
3. **Update your Gitpod preferences** - Select {title} on the [Gitpod preferences page](https://gitpod.io/preferences) which will set {title} as your default IDE for future workspace starts.
4. **Start (or restart) your workspace** - Either start a workspace directly from within the [JetBrains Gateway](/docs/integrations/jetbrains-gateway) via the Gitpod plugin **OR** open a new workspace directly in Gitpod where on workspace start you will be prompted to open {title} for that workspace.

<figure>
  <video controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" src="/images/editors/select-jetbrains-ide.webm" type="video/webm"></video>
  <figcaption>Updating Gitpod IDE preferences to {title}</figcaption>
</figure>

<figure>
<video controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Opening a JetBrains IDE from Gitpod" src="/images/editors/opening-the-thin-jetbrains-client.webm" type="video/webm"></video>
    <figcaption>Opening a JetBrains IDE from Gitpod</figcaption>
</figure>

<figure>
<video controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Updating the Gitpod plugin in JetBrains Gateway" src="/images/editors/update-jetbrains-gateway-settings.webm" type="video/webm"></video>
    <figcaption>Updating the Gitpod plugin in JetBrains Gateway</figcaption>
</figure>

<figure>
<video controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Opening a JetBrains IDE from Gateway" src="/images/editors/open-from-jetbrains-gateway.webm" type="video/webm"></video>
    <figcaption>Opening a JetBrains IDE from Gateway</figcaption>
</figure>

**Important:** You must restart any started workspaces for your IDE preferences to take effect.

## Prerequisites

To successfully use Rider and load a .NET project, your workspace needs the .NET Framework or a compatible alternative, to be installed. The [default workspace image](/docs/configure/workspaces/workspace-image#use-a-public-docker-image) does not come with .NET pre-installed, so you have two options:

**Using the .NET workspace image (Recommended)**

1. Create a `.gitpod.yml` file
2. Set the `image` property to `image: gitpod/workspace-dotnet:latest` or alternatively, [use a custom Dockerfile](https://www.gitpod.io/docs/configure/workspaces/workspace-image#use-a-custom-dockerfile)

If you need a specific version of .NET, check out our [Dockerfile](https://github.com/gitpod-io/workspace-images/blob/main/chunks/tool-dotnet/Dockerfile) so you can create your own, specifying the version you need.

For additional examples, check out [.NET in Gitpod](/docs/introduction/languages/dotnet).

**Manually install .NET**

1. Using a workspace terminal, install `dotnet` or a compatible alternative
2. Restart the IDE

Note: manually installed dependencies are only available in the current workspace, when you start a new workspace dotnet will not be pre-installed, for this reason we recommend the first option.

## Install Plugins

> This section relates to plugin management when using JetBrains IDEs in a remote development context. For information on regular plugin management, refer to <a href="https://www.jetbrains.com/help/rider/Managing_Plugins.html" target="_blank">{title} docs</a>.

Unlike with regular development, JetBrains [Remote development](https://www.jetbrains.com/help/rider/Remote_development_overview.html#defs) with {title} allows users to install plugins in different locations:

- [**{title} backend plugins**](#install-on-title-backend) - The JetBrains {title} backend runs within the remote Gitpod workspace. Backend plugins contribute functionality for IDE experiences relating to the filesystem, tools or languages and frameworks. When installed, **a backend plugin only applies to the currently running Gitpod workspace** and is not associated with a user. However, a plugin can be [preconfigured for all users of a repository](#preconfigure-for-repository) so that the plugin is enabled with every workspace start. It is not currently possible to install a backend plugin that applies to all workspaces of a Gitpod user or organization.
- [**JetBrains Client plugins**](#install-on-jetbrains-client) - The JetBrains client runs on the users local machine and can be thought of as the user interface to the remote {title} backend. Client plugins are different to backend plugins as they contribute to the user interface aspect of the IDE experience (e.g. keyboard shortcuts and themes). Once installed, **a client plugin is enabled for all Gitpod workspaces the user opens** (if the workspace is running the exact same version of the {title} backend where the plugin was initially installed).
- [**JetBrains Gateway plugins**](/docs/integrations/jetbrains-gateway#getting-started) - The JetBrains Gateway is an application downloaded onto a users local machine which allows users to start JetBrains Clients that are compatible with the {title} backend, running in a Gitpod workspace. JetBrains Gateway plugins are installed directly in JetBrains Gateway and contribute to remote development connection experiences (e.g. the [Gitpod JetBrains Gateway](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway) plugin).

### Install on JetBrains Client

The JetBrains client runs on the users local machine and can be thought of as the user interface to the remote {title} backend. Client plugins contribute to the user interface aspect of the IDE experience (e.g. keyboard shortcuts and themes).

Once installed, **a client plugin is enabled for all Gitpod workspaces the user opens** (if the workspace is running the exact same version of the {title} backend where the plugin was initially installed).

To install a plugin on **JetBrains Client** follow these steps:

- In **JetBrains Client** open the IDE settings and select **Plugins**.
- Find the plugin in the **Marketplace** and click **Install**.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Install a plugin on JetBrains Client" src="/images/editors/install-local-jb-plugin.png">
    <figcaption>Install a plugin on JetBrains Client</figcaption>
</figure>

### Install on {title} backend

The JetBrains {title} backend runs within the remote Gitpod workspace. Backend plugins contribute functionality requiring access to IDE experiences such as the remote filesystem (e.g. contributing support of languages and frameworks).

When installed, **a backend plugin only applies to the currently running Gitpod workspace** and is not associated with a user. However, a plugin can be [preconfigured for all users of a repository](#preconfigure-for-repository) so that the plugin is enabled with every workspace start.

It is not currently possible to install a backend plugin that applies to all workspaces of a Gitpod user or organization.

#### Install for your current workspace

You can install a plugin only for **your current workspace** following these steps:

- In **JetBrains Client** open the IDE settings and select **Plugins On Host**.
- Find the plugin in the **Marketplace** and click **Install**.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Install a plugin on {title} backend" src="/images/editors/install-remote-jb-plugin.png">
    <figcaption>Install a plugin on {title} backend</figcaption>
</figure>

#### Preconfigure for repository

> JetBrains plugin support is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

You can share a plugin on **{title} backend** with everybody working on the repository by adding it to [.gitpod.yml](/docs/references/gitpod-yml) and pushing to your Git repository.
Each workspace is preconfigured with plugins from the `gitpod.yml` configuration file. For example:

```yaml
jetbrains:
  rider:
    plugins:
      - zielu.gittoolbox
      - izhangzhihao.rainbow.brackets
```

You can find the **pluginId** on the [JetBrains Marketplace](https://plugins.jetbrains.com) page:

- Find a page of the required plugin.
- Select the **Versions** tab.
- Click any version to copy the **pluginId** (short name such as `org.rust.lang`) of the plugin you want to install.

#### Install for your user

It is not yet possible to install plugins on **{title} backend** for your user to share across all your Gitpod workspaces.

## Configure JVM options

> Configuration of JVM options is currently in [Alpha](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/8704).

You can adjust JVM options for {title} backend, especially if you want to increase the `-Xmx` memory size. For example:

```yaml
jetbrains:
  rider:
    vmoptions: "-Xmx4g"
```

For more detailed information on JVM options, refer to [Common JVM Options](https://www.jetbrains.com/help/rider/Tuning_the_IDE.html#common-jvm-options) from JetBrains documentation.

## Configure IDE settings

> **Feedback needed:** The JetBrains Gitpod integration is currently beta. Gitpod [continues to collaborate with JetBrains](https://www.gitpod.io/blog/gitpod-jetbrains). The below shows how you can configure global settings with JetBrains. To leave feedback on the approach, please see this GitHub issue: [#6576](https://github.com/gitpod-io/gitpod/issues/6576). Also note that JetBrains is working on [comprehensive settings sync functionality](https://youtrack.jetbrains.com/issue/RDCT-1/Settings-synchronization).

When running {title} locally, the JetBrains IDE applies [global settings](https://www.jetbrains.com/help/rider/Rider_Settings.html) to all projects on your machine. However when running in a remote context using [JetBrains Gateway](/docs/integrations/jetbrains-gateway), it's important to note that some IDE settings are configured on the [JetBrains Client](#on-jetbrains-client) and others in the [{title} backend](#on-title-backend) running in your Gitpod [Workspace](/docs/configure/workspaces). See below instructions for more.

### On JetBrains Client

IDE Settings that are configured on the JetBrains Client are stored on your local machine and don't have `On Host` label in the IDE settings. These IDE settings are reused if the workspace is running the exact same version of the {title} backend where the settings were initially configured.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Configure IDE settings on JetBrains client" src="/images/editors/jb-client-configure-settings-client.webp">
    <figcaption>JetBrains client settings don't have <code>On Host</code> label.</figcaption>
</figure>

### On {title} backend

Settings configured on {title} backend are stored in a Gitpod workspace and have `On Host` label in the IDE settings.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Configure IDE settings on JetBrains client" src="/images/editors/jb-backend-configure-settings.webp">
    <figcaption>{title} backend settings have `On Host` label.</figcaption>
</figure>

### Configure IDE settings per project

Some IDE settings cannot be configured via [environment variables](/docs/configure/projects/environment-variables#environment-variables) or through setting [vm options](#configure-jvm-options). These settings can only be set via the UI of JetBrains client, and must be manually copied to be syned between workspaces. The below steps detail how to configure your IDE settings for all the users of a given Gitpod project:

**Step 1: Manually use JetBrains UI to configure settings** - Set your IDE settings as you normally would, using the JetBrains UI.

**Step 2: Find generated IDE settings** - You will need to manually find any global settings generated by JetBrains backend within the following path: `/workspace/.config/JetBrains<-latest>/RemoteDev-/<your-project-name>/options`

**Step 3:** Move any relevant settings manually to a persistent location within your Gitpod project. Either via a [Workspace Image](/docs/configure/workspaces/workspace-image), or persisted in the version control of your project, for example by committing settings data to GitHub.

**Include relevant IDE settings in your Workspace Image**

- `/home/gitpod/.gitpod/jetbrains/options` - This location applies settings to all JetBrains products (IntelliJ IDEA, GoLang, etc).
- `/home/gitpod/.gitpod/jetbrains/rider/options` - This location will apply settings only to the given IDE, e.g. {title}.

**Commit relevant IDE settings to source control**

- `/workspace/<your-project-name>/.gitpod/jetbrains/options` - This location applies settings to all JetBrains products (IntelliJ IDEA, GoLang, etc).
- `/workspace/<your-project-name>/.gitpod/jetbrains/rider/options` - This location will apply settings only to the given IDE, e.g. {title}.

For any further changes to your IDE settings, you will need to follow the above steps again.

> **Note:** When locating and applying IDE settings, Gitpod will read the locations specified above in priority order. The locations specified first are overriden by the locations specified later.

### Configure IDE settings per user

To configure IDE settings for your user only, and not all those using a project.

Follow the instructions for [configuring IDE settings per project](#configure-ide-settings-per-project), but instead use [.dotfiles](/docs/configure/user-settings/dotfiles#dotfiles) rather than a workspace image or source control to store your IDE settings.

## Indexing using Prebuilds

Currently, prebuilds for Rider are not supported. To leave feedback or check for updates, see [gitpod/issues/6740](https://github.com/gitpod-io/gitpod/issues/6740).

## Workspace performance

When using a Gitpod workspace you might experience performance issues caused by:

- An application using more resources than expected
- Resource consumption in adjacent containers running on the workspace node.

In your JetBrains IDE within the JetBrains Gateway [Backend Control Center](https://www.jetbrains.com/help/idea/work-inside-remote-project.html#control_center) you can find two metrics relating to your running workspace: `Workspace CPU` and `Workspace Memory`.

The remaining metrics you can find in the Backend Control Center regarding the node that your workspace is running on, and not the workspace itself.

> **Note:** Performance information shown in the Backend Control Center is the same as the information that is shown when running the command [`gp top`](/docs/references/gitpod-cli#top) in your workspace, see the [Command Line Interface](/docs/references/gitpod-cli) documentation for more.

![jetbrains performance](/images/jetbrains-gateway/jetbrains-performance-center.png)

## FAQs

- For the questions about supported IDEs and Editors in Gitpod, refer to [FAQs](/docs/references/ides-and-editors/faqs).

- For the general questions about JetBrains Remote Development, refer to refer to the general IDE <a href="https://www.jetbrains.com/help/rider/FAQ_about_remote_development.html" target="_blank">{title} FAQ</a>.

### Are there any JetBrains optimizations I can make if my workspace is slow?

Debugging performance can be challenging, as performance issues can depend on many factors such as how Gitpod is configured (if you're operating Gitpod on Self-Hosted). However, there are some ways you can gather performance information and optimise your JetBrains IDE setup with Gitpod:

1. Firstly, to gather information on performance, you can [view workspace performance metrics from within the IDE](/docs/references/ides-and-editors/intellij#workspace-performance) in the Backend Control Center, or by using [`gp top`](/docs/references/gitpod-cli#top).
2. You may also want to try adjusting the Max Heap Size allocated to the JetBrains Backend in the Settings tab of the Backend Control Center. If updating this setting helps your performance, you can set the `vmoptions` value for your JetBrains IDE in your `.gitpod.yml`.

> **Note:** If the performance metrics show that your workspace is hitting its resource limits, and you are using Gitpod Self-Hosted, it might make sense to consider changing the resource configuration for your workspaces. This can be done via a [config-patch](/docs/configure/self-hosted/latest/config-patches). Configuring workspace resources is not yet available on SaaS.

## Troubleshooting

- [What should I do if JetBrains Gateway and Gitpod aren’t working?](/docs/help/troubleshooting#what-should-i-do-if-jetbrains-gateway-and-gitpod-arent-working)
- [Gitpod logs in JetBrains Client](/docs/help/troubleshooting#gitpod-logs-in-jetbrains-client)
- [Gitpod logs in JetBrains Gateway](/docs/help/troubleshooting#gitpod-logs-in-jetbrains-gateway)
