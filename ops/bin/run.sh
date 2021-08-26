#!/bin/bash
set -euo pipefail

tsc && node dist/src/index.js
