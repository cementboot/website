---
section: billing
title: Billing
---

<script context="module">
  export const prerender = true;
</script>

# Billing

Gitpod charges for usage based on how long workspaces run, and the resources consumed by different [workspace classes](/docs/configure/workspaces/workspace-classes). Metered usage also includes [prebuilds](/docs/configure/projects/prebuilds).

As an individual user, you receive a free usage allowance so that you can try Gitpod without a billing account. A personal billing account is required for additional usage beyond that.

Organization billing accounts provide a way to pay for organization members' usage when they run workspaces on organization projects.

## Credits

Gitpod usage is measured in **credits**.

Larger [workspace classes](/docs/configure/workspaces/workspace-classes) use credits at a faster rate. E.g. Standard workspaces use 10 credits per hour, whereas Large workspaces use 20 credits per hour.

Your invoice will show the total amount of credits consumed in a billing period.

## Configure personal billing

The personal billing page is located in your [account settings](https://gitpod.io/account).

> 💡 If you do not see "Billing" in your settings, cancel your existing plan or organization plan first.

The Gitpod Free plan comes with 500 free credits, renewed monthly. These credits can be used for all workspace classes. Unused credits expire at the end of each month.

Configuring a Personal billing plan in your user billing settings will increase your monthly credit allowance from 500 to 1000. Additional usage will be charged at the pay-as-you-go rate.

![Configure Personal billing](../../static/images/docs/billing/configure-personal-billing.png)

You can add a payment method with credit card details in Euros or Dollars.

![Add payment details](../../static/images/docs/billing/add-personal-payment-details.png)

Once billing has been configured, use the "Manage Plan" button to modify your payment details or cancel.

![Active Personal billing](../../static/images/docs/billing/active-personal-billing.png)

If you are a member of an organization with billing, you can select the organization to pay for all your personal usage under "Default Billing Account".

![Select default billing account](../../static/images/docs/billing/select-default-billing-account.png)

## Configure organization billing

Organization owners can configure billing for an organization in their organization settings.

> 💡 You may need to cancel your existing Professional or Unleashed organization-billing plan first.

![Configure Team Billing](../../static/images/docs/billing/configure-team-billing.png)

Once organization billing is configured, Gitpod will charge the organization billing account for usage by organization members, when they start workspaces on organization projects, and for prebuild usage on organization projects.

![Active Team billing](../../static/images/docs/billing/active-team-billing.png)

## Configure a usage limit

The usage limit prevents workspaces from starting once the limit has been reached. It will not stop running workspaces.

To change the usage limit, look for "Update limit" in the BALANCE section of your personal or organization billing settings, after you have configured billing.

![Active Team billing](../../static/images/docs/billing/update-usage-limit-2.png)

## View usage details

You can see the details of your personal usage when you click on "View Usage →" in your personal billing settings. Organization owners can view usage details for their organization.

![Active Team billing](../../static/images/docs/billing/view-team-usage-details.png)

## Old pricing plans

Users with old paid plans, may need to cancel those plans before configuring their personal or organization billing accounts.

- [Organization plans](/docs/configure/billing/org-plans)
- [Organization billing](/docs/configure/billing/org-billing)


## FAQs

### [How can I limit or optimize prebuild costs?](https://discord.com/channels/816244985187008514/1070648758716600371)
<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

There are a few built-in Gitpod features that can optimize your prebuild costs, such as:

- **Skip prebuilds** every X commits and use [last successful prebuild](https://www.gitpod.io/docs/configure/projects/last-successful-prebuild)

- **Stop prebuilds** for all branches, PRs and etc. when on GitHub. See [this page](https://www.gitpod.io/docs/references/gitpod-yml/#github). (might not be necessary)

### With prebuilds enabled, does every push to my repository cost me credits?

It depends on how you configured prebuilds. Prebuilds run on headless Gitpod workspaces and the cost depends on how long they run when triggered.
