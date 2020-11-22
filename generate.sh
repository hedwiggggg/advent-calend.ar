#!/bin/bash
for i in $(seq -f "%02g" 1 24)
do
  echo y | yarn hygen day new --dev --name "Day$i" --imagesPath "./src/assets/day_$i"
done