#!/bin/sh
SELF_DIR=$(cd $(dirname $0) && pwd)

set -e # Drop-out from execution if error occurs

if [ -z "$LP_WALLET_CUSTOM_ITEM_ID" ]; then
  read -r -s -p 'Enter ETH Wallet LastPass ID: ' LP_WALLET_CUSTOM_ITEM_ID
  [ -z "$LP_WALLET_CUSTOM_ITEM_ID" ] && echo "No LastPass ID provided" && exit 1
  export LP_WALLET_CUSTOM_ITEM_ID
fi

npx  dotenvx run --env-file=.env.dev -- hardhat $@