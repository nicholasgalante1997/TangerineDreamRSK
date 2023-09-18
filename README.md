# Tangerine Dream | JS

> This package is experimental until 1.0.0 is released, meaning any and all utility in versions under 1.0.0 is subject to change at any given moment.

## What is this package?

This is a node command line tool that assists in scaffolding modern frontend applications. The purpose of this package is to reduce the amount of time developers are spending on structuring the foundation of their web applications. Why people loved [create-react-app](https://create-react-app.dev/) was due to the speed with which frontend developers were empowered to spin up and start new react projects. There are some core differences (which we'll outline below) between this package and `create-react-app`, but the heart of the message remains fundamentally the same: **Modern frontend react applications should take seconds to spin up, not sprints.**

## Installation

Global installation with npm:

```bash
> npm install --global @tangerinedream/rsk
> which @tangerinejs
$ // 0.0.61
```

## Basic Usage

After global installation, you can now use this package as you would any other command line tool.

Currently, the only supported command is `webpack-react`, although we shortly intend to be at parity with `esbuild-react`.

As an example:

```bash
> @tangerinejs webpack-react app-name
$ // Creates directory "app-name" in current working directory
> cd app-name
> pnpm install
> pnpm build
> pnpm start
```
