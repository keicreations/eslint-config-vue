module.exports = {
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "project": "./tsconfig.json",
        "extraFileExtensions": [
            ".vue",
            ".json"
        ]
    },
    "extends": ["hardcore", "hardcore/ts", "hardcore/vue",],
    "rules": {
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
        "no-plusplus": ["error", {"allowForLoopAfterthoughts": true}],
        "no-magic-numbers": ["error", {"ignore": [-1, 0, 1]}],
        "@typescript-eslint/no-magic-numbers": ["error", {"ignore": [-1, 0, 1]}],
        "vue/v-on-handler-style": ["error", ["method", "inline"]],
        "@shopify/prefer-early-return": "error",

        "vue/no-v-html": "warn",
        "vue/no-console": "warn",
        "@typescript-eslint/naming-convention": ["warn",
            {
                "selector": "default",
                "format": ["strictCamelCase"]
            },
            {
                "selector": "variable",
                "format": ["strictCamelCase", "UPPER_CASE"],
            },
            {
                "selector": ["function", "import"],
                "format": ["strictCamelCase", "StrictPascalCase"]
            },
            {
                "selector": ["enumMember"],
                "format": ["StrictPascalCase"]
            },
            {
                "selector": ["typeLike"],
                "format": ["PascalCase"]
            },
            {
                "selector": ["variable", "parameter", "accessor"],
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "has", "are", "can", "should", "did", "will"]
            },
            {
                "selector": ["objectLiteralProperty"],
                "format": null,
                "modifiers": ["requiresQuotes"]
            },
            {
                "selector": ["property"],
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "has", "are", "can", "should", "did", "will"],
                "filter": {
                    "regex": "^(allowfullscreen|allowFullScreen|async|autofocus|autoFocus|autoplay|autoPlay|checked|defaultChecked|contenteditable|contentEditable|controls|default|defer|disabled|draggable|formnovalidate|formNoValidate|hidden|inert|ismap|itemscope|itemScope|loop|multiple|muted|nomodule|noModule|novalidate|noValidate|open|playsinline|playsInline|readonly|readOnly|required|reversed|selected|spellcheck|spellCheck)$",
                    "match": false
                }
            }
        ],
        "camelcase": "warn",
        "default-case": "warn",
        "import/no-extraneous-dependencies": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "import/no-unresolved": "warn",
        "sonarjs/elseif-without-else": "warn",
        "require-atomic-updates": "warn",
        "sonarjs/no-clear-text-protocols": "warn",

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
        "perfectionist/sort-modules": "off",
        "perfectionist/sort-switch-case": "off",
        "sonarjs/no-one-iteration-loop": "off"
    },
    "overrides": [
        {
            "files": [
                "**/*.js",
                "**/*.json"
            ],
            "parserOptions": {
                "project": null
            }
        },
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
                "consistent-return": "off",
                "no-param-reassign": "off"
            }
        },
        {
            "files": [
                "**/server/**/*.ts",
                "**/server/**/.*.ts",
                "**/server/**/*.tsx",
                "**/server/**/*.mts",
                "**/server/**/.*.mts",
                "**/server/**/*.cts",
                "**/server/**/.*.cts"
            ],
            "parserOptions": {
                "project": "tsconfig.json",
                "tsconfigRootDir": process.cwd() + "/server/"
            }
        },
    ]
}