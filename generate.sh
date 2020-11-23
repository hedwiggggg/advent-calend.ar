#!/bin/bash
for i in $(seq -f "%02g" 1 24)
do
  echo y | yarn hygen day new --name "Day$i" --imagesPath "frames/day_$i"
done

# echo y | yarn hygen day new --dev --name "Day01" --imagesPath "./src/assets/day_01"
