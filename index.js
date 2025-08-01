module.exports = {
    "extends": ["hardcore", "hardcore/ts", "hardcore/vue"],
    "plugins": ["tailwindcss"],
    "rules": {
        "tailwindcss/classnames-order": "error",
        "tailwindcss/enforces-negative-arbitrary-values": "error",
        "tailwindcss/enforces-shorthand": "error",
        "tailwindcss/migration-from-tailwind-2": "error",
        "tailwindcss/no-contradicting-classname": "error",
        "tailwindcss/no-unnecessary-arbitrary-value": "error",
        "eslint-comments/require-description": "error",
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
        "func-style": ["error", "expression"],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-magic-numbers": ["error", { "ignore": [-1, 0, 1] }],
        "@typescript-eslint/no-magic-numbers": ["error", { "ignore" : [-1, 0, 1] }],
        "vue/v-on-handler-style": ["error", ["method","inline"]],


        "vue/no-v-html": "warn",
        "sonar/no-vue-bypass-sanitization": "warn",
        "tailwindcss/no-arbitrary-value": "warn",
        "vue/no-console": "warn",
        "@typescript-eslint/naming-convention": "warn",
        "camelcase": "warn",
        "default-case": "warn",
        "import/no-extraneous-dependencies": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "import/no-unresolved": "warn",
        "sonarjs/elseif-without-else": "warn",
        "sonar/no-clear-text-protocols": "warn",
        "require-atomic-updates": "warn",
        "tailwindcss/no-custom-classname": [
            "warn",
            {
                "whitelist": [
                    "pi\\-.+",
                    "pi"
                ]
            }
        ],

        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "vue/static-class-names-order": "off",
        "@typescript-eslint/prefer-destructuring": "off",
        "import/no-duplicates": "off",
        "no-duplicate-imports": "off",
        "putout/putout": "off",
        "@stylistic/max-len": "off",
        "no-extra-boolean-cast": "off",
        "etc/no-misused-generics": "off",
        "etc/no-deprecated": "off",
        "etc/no-internal": "off",
        "import/no-cycle": "off",
        "import/namespace": "off",
        "total-functions/no-unsafe-readonly-mutable-assignment": "off",
        "no-continue": "off",
        "no-undef-init": "off",

    },
    "overrides": [
        {
            "files": ["**/plugins/*.ts"],
            "rules": {
                "total-functions/no-unsafe-readonly-mutable-assignment": "off",
                "no-param-reassign": "off"
            }
        },
        {
            "files": ["**/middleware/*.ts"],
            "rules": {
                "consistent-return": "off"
            }
        },
        {
            "files": [
                "*.ts",
                ".*.ts",
                "*.tsx",
                "*.mts",
                ".*.mts",
                "*.cts",
                ".*.cts",
                "*.vue"
            ],
            "parserOptions": {
                "project": "./tsconfig.json"
            }
        },
        {
            "files": [
                "server/**/*.ts",
                "server/**/.*.ts",
                "server/**/*.tsx",
                "server/**/*.mts",
                "server/**/.*.mts",
                "server/**/*.cts",
                "server/**/.*.cts"
            ],
            "parserOptions": {
                "project": "./server/tsconfig.json"
            }
        },
        {
            "files": [
                "*.js",
                "*.json"
            ],
            "parserOptions": {
                "project": null
            }
        },
    ]
}