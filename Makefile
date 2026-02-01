.PHONY: lint test

lint:
	npm run lint

test:
	npm run typecheck
	npm run build
