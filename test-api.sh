#!/bin/bash

echo "Testing welcome endpoint:"
curl http://localhost:3000/

echo -e "\n\nTesting full registry:"
curl http://localhost:3000/registry

echo -e "\n\nTesting specific item (fetch):"
curl http://localhost:3000/registry/fetch

echo -e "\n\nTesting search (memory):"
curl "http://localhost:3000/search?q=memory"
