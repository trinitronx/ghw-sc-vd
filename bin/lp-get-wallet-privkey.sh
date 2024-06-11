#!/bin/bash

# Take input as Lastpass item ID
lp_item="$1"

# Output the "Secret Key" field from a "Cryptocurrency Wallet"
# LastPass Custom Item
# such a kludge, but it works ¯\_(ツ)_/¯
lpass show --json  "$lp_item" | \
jq -r '.[].note' | \
perl -ne 'BEGIN{
     print "{\n";
     my @arr;
   }
   if (  s/^(.+):(.*)/"\1": "\2"/m  ) {
     chomp($_);
     push(@arr, $_);
   }
   $lines = join(",\n", @arr);
   END{
     print $lines ;
     print "\n}"
   }' | \
  jq -r '."Secret Key"'
