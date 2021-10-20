"use strict";

module.exports = {
	rules: {
		"at-rule-no-unknown": true,
		"block-no-empty": true,
		"color-no-invalid-hex": true,
		"comment-no-empty": true,
		"declaration-block-no-duplicate-properties": [
			true,
			{
				ignore: ["consecutive-duplicates-with-different-values"]
			}
		],
		"declaration-block-no-shorthand-property-overrides": true,
		"declaration-block-trailing-semicolon": "always",
		"font-family-no-duplicate-names": true,
		"font-family-no-missing-generic-family-keyword": true,
		"function-calc-no-invalid": true,
		"function-calc-no-unspaced-operator": true,
		"function-linear-gradient-no-nonstandard-direction": true,
		"keyframe-declaration-no-important": true,
		"media-feature-name-no-unknown": true,
		"no-descending-specificity": true,
		"no-duplicate-at-import-rules": true,
		"no-duplicate-selectors": true,
		"no-empty-source": true,
		"no-extra-semicolons": true,
		"no-invalid-double-slash-comments": true,
		"property-no-unknown": true,
		"selector-pseudo-class-no-unknown": true,
		"selector-pseudo-element-no-unknown": true,
		"selector-type-no-unknown": true,
		"string-no-newline": true,
		"unit-no-unknown": true,
		"declaration-bang-space-after": "never",
		"declaration-bang-space-before": "always",
		"declaration-block-semicolon-newline-after": "always-multi-line",
		"declaration-block-semicolon-space-after": "always-single-line",
		"declaration-block-semicolon-space-before": "never",
		"declaration-block-single-line-max-declarations": 1,
		"declaration-block-trailing-semicolon": "always",
		"declaration-colon-newline-after": "always-multi-line",
		"declaration-colon-space-after": "always-single-line",
	}
};
