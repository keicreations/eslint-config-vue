module.exports = {
    "extends": ["hardcore", "hardcore/ts", "hardcore/vue"],
    "plugins": ["tailwindcss"],
    "rules": {
        "vue/no-v-html": "off",
        "tailwindcss/classnames-order": "error",
        "tailwindcss/enforces-negative-arbitrary-values": "error",
        "tailwindcss/enforces-shorthand": "error",
        "tailwindcss/migration-from-tailwind-2": "error",
        "tailwindcss/no-contradicting-classname": "error",
        "tailwindcss/no-unnecessary-arbitrary-value": "error",
        "tailwindcss/no-custom-classname": "warn",
        "tailwindcss/no-arbitrary-value": "warn",
        "func-style": ["error", "expression"],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "vue/block-order": [
            "error",
            {
                "order": ["template", "script"]
            }
        ],
        "vue/block-lang": [
            "error",
            {
                "script": {
                    "lang": "ts"
                }
            }
        ],
        "vue/no-console": "warn",
        "vue/require-macro-variable-name": "off",
        "vue/require-typed-ref": "off",
        "@typescript-eslint/naming-convention": "off",
        "camelcase": "off",
        "vue/v-on-handler-style": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "vue/static-class-names-order": "off",
        "@typescript-eslint/prefer-destructuring": "off",
        "import/no-duplicates": "off",
        "no-duplicate-imports": "off",
        "putout/putout": "off"
    },
    "overrides": [
        {
            "files": ["plugins/*.ts"],
            "rules": {
                "total-functions/no-unsafe-readonly-mutable-assignment": "off",
                "no-param-reassign": "off"
            }
        }
    ]
}