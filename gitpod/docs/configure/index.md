---
section:
title: Configure Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Configure Gitpod

You can open any repository in Gitpod by prefixing the full repository URL with `gitpod.io/#`.

**For example:** [https://gitpod.io/#https://github.com/nodejs/node](https://gitpod.io/#https://github.com/nodejs/node)

> **Note:** For [Self-Hosted](/docs/configure/self-hosted/latest), substitute gitpod.io for the domain of your installation.

To get the most out of Gitpod, commit a [`.gitpod.yml`](/docs/references/gitpod-yml) to the root of your project to give instructions to Gitpod about what packages to install, which process to start, and much more.

## Workspaces

[Workspaces](/docs/configure/workspaces) are the developer environments where you code in Gitpod.

Workspaces can be created on their own, or as part of a [Project](/docs/configure/projects).

- [Workspace Image](/docs/configure/workspaces/workspace-image)
- [Tasks](/docs/configure/workspaces/tasks)
- [Ports](/docs/configure/workspaces/ports)
- [Collaboration](/docs/configure/workspaces/collaboration)
- [Multi-repo](/docs/configure/workspaces/multi-repo)
- [Workspace Classes](/docs/configure/workspaces/workspace-classes)

## User Settings

[User settings](/docs/configure/user-settings) allow you to customize your own personal Gitpod experience.

- [Browser Extension](/docs/configure/user-settings/browser-extension)
- [Browser Settings](/docs/configure/user-settings/browser-settings)
- [Browser Bookmarklet](/docs/configure/user-settings/browser-bookmarklet)
- [Dotfiles](/docs/configure/user-settings/dotfiles)
- [SSH](/docs/configure/user-settings/ssh)
- [Access Tokens](/docs/configure/user-settings/access-tokens)

## Projects

[Projects](/docs/configure/projects) are the connection between Gitpod and one or more git repositories and allow you to manage [Prebuilds](/docs/configure/projects/prebuilds). Projects can be associated with your personal account, or associated with [Organizations](/docs/configure/orgs).

- [Prebuilds](/docs/configure/projects/prebuilds)
- [Incremental Prebuilds](/docs/configure/projects/incremental-prebuilds)
- [Last Successful Prebuild](/docs/configure/projects/last-successful-prebuild)
- [Environment Variables](/docs/configure/projects/environment-variables)

## Organizations

[Organizations](/docs/configure/orgs) in Gitpod allow you to share projects and their settings amongst many organization individuals.

## Authentication

- [GitLab](/docs/configure/authentication/gitlab)
- [GitHub](/docs/configure/authentication/github)
- [BitBucket](/docs/configure/authentication/bitbucket)
- [GitHub Enterprise](/docs/configure/authentication/github-enterprise)
- [Bitbucket Server](/docs/configure/authentication/bitbucket-server)
