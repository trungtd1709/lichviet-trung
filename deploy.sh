#!/bin/bash
# Shell script to build and start a Next.js project

echo "Pull new code"
git pull

echo "Building the Next.js project"
npm run build

echo "Starting the Next.js project"
pm2 start ecosystem.config.js
