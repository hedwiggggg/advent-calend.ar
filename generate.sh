#!/bin/bash
for i in $(seq -f "%02g" 1 24)
do
  NUM=$i && echo y | yarn hygen day new --name "Day$NUM" --imagesPath "./src/assets/day_$NUM" --fps "1000 / 20"
done