module.exports = function(hljs) {
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var FUNCTION = {
    className: 'function',
    begin: IDENT_RE + '\\(', end: '\\)',
    contains: ['self', hljs.NUMBER_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
  };
  var HEXCOLOR = {
    className: 'hexcolor', begin: '#[0-9A-Fa-f]+'
  };
  return {
    case_insensitive: true,
    illegal: '[=/|\']',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'function',
        begin: IDENT_RE + '\\(',
        end: '\\)',
        contains: [
          'self',
          hljs.NUMBER_MODE,
          hljs.APOS_STRING_MODE,
          {
            className: 'js-string',
            begin: '[a-zA-Z-][\\s\\w\\d"\\/,_-]*'
          }
        ]
      },
      {
        className: 'id', begin: '\\#[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'class', begin: '\\.[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'attr_selector',
        begin: '\\[', end: '\\]',
        illegal: '$'
      },
      {
        className: 'tag',
        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
        relevance: 0
      },
      {
        className: 'pseudo',
        begin: ':(active|after|before|checked|default|disabled|empty|enabled|first-child|first-letter|first-line|first-of-type|first|focus|hover|in-range|indeterminate|invalid|lang|last-child|last-of-type|left|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|optional|out-range|read-only|read-write|required|right|root|valid|visited)'
      },
      {
        className: 'pseudo',
        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
      },
      {
        className: 'prefix',
        begin: '-(webkit|moz|ms|o)-'
      },
      {
        className: 'attribute',
        begin: '\\b(align-content|align-items|align-self|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|animation|appearance|auto|backface-visibility|background-attachment|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|background|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-bottom|border-collapse|border-color|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-image|border-left-color|border-left-style|border-left-width|border-left|border-radius|border-right-color|border-right-style|border-right-width|border-right|border-spacing|border-style|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-top|border-width|border|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|clear|clip-path|clip|color|column-count|column-fill|column-gap|column-rule-color|column-rule-style|column-rule-width|column-rule|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|flex|float|font-family|font-feature-settings|font-kerning|font-language-override|font-size-adjust|font-size|font-stretch|font-style|font-variant-ligatures|font-variant|font-weight|font|height|hyphens|icon|image-orientation|image-rendering|image-resolution|ime-mode|inherit|initial|justify-content|left|letter-spacing|line-height|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|margin|marks|mask|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|none|normal|object-fit|object-position|opacity|order|orphans|outline-color|outline-offset|outline-style|outline-width|outline|overflow-wrap|overflow-x|overflow-y|overflow|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|perspective-origin|perspective|pointer-events|position|quotes|resize|right|tab-size|table-layout|text-align-last|text-align|text-decoration-color|text-decoration-line|text-decoration-style|text-decoration|text-indent|text-overflow|text-rendering|text-shadow|text-transform|text-underline-position|top|transform-origin|transform-style|transform|transition-delay|transition-duration|transition-property|transition-timing-function|transition|unicode-bidi|user-select|vertical-align|visibility|white-space|widows|width|word-break|word-spacing|word-wrap|z-index)\\b',
        illegal: '[^\\s]'
      },
      {
        className: 'value',
        begin: '\\b(absolute|all-scroll|always|auto|baseline|below|bidi-override|block|bolder|bold|both|bottom|break-all|break-word|capitalize|center|char|circle|col-resize|collapse|crosshair|dashed|decimal|default|disabled|disc|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ellipsis|fixed|groove|hand|help|hidden|horizontal|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|inactive|inherit|inline-block|inline|inset|inside|inter-ideograph|inter-word|italic|justify|keep-all|left|lighter|line-edge|line-through|line|list-item|loose|lower-alpha|lower-roman|lowercase|lr-tb|ltr|medium|middle|move|n-resize|ne-resize|newspaper|no-drop|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|outset|outside|overline|pointer|progress|relative|repeat-x|repeat-y|repeat|ridge|right|row-resize|rtl|s-resize|scroll|se-resize|separate|small-caps|solid|square|static|strict|super|sw-resize|table-cell|table-footer-group|table-header-group|table|tb-rl|text-bottom|text-top|text|thick|thin|top|transparent|underline|upper-alpha|upper-roman|uppercase|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace)\\b'
      },
      {
        className: 'value',
        begin: ':', end: '[\\n;]',
        contains: [
          FUNCTION,
          hljs.NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          {
            className: 'important', begin: '!important'
          },
          {
            className: 'var',
            begin: '\\$\\S+'
          }
        ]
      },
      {
        className: 'at_rule',
        begin: '@', end: '[{;]',
        keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
        contains: [
          FUNCTION,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          HEXCOLOR,
          hljs.NUMBER_MODE,
          {
            className: 'preprocessor',
            begin: '\\s[A-Za-z0-9_.-]+',
            relevance: 0
          }
        ]
      },
      {
        className: 'br-open',
        begin: '{'
      },
      {
        className: 'br-close',
        begin: '}'
      }
    ]
  };
};
