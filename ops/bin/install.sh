#!/bin/bash
set -euo pipefail

npm install && npm run typecheck && npm run test 
