#!/bin/bash
set -e

pid=$1
size=$2


path=$(ps -o comm= -p $pid)
app_path=$(echo $path | awk -F'.app' '{print $1}')
icon=$(defaults read ${app_path}.app/Contents/Info CFBundleIconFile|sed -e 's/\.icns$//')

OUTFILE="$TMPDIR/${pid}_icon.png"
sips -s format png \
     --resampleHeightWidthMax "${size}:${size}" \
     "${app_path}.app/Contents/Resources/${icon}.icns" \
     --out "$OUTFILE"
cat $OUTFILE | base64
