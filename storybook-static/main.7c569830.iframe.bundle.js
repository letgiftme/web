;(self.webpackChunkletgiftme = self.webpackChunkletgiftme || []).push([
  [179],
  {
    './.storybook/preview.js-generated-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      var preview_namespaceObject = {}
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          __namedExportsOrder: () => __namedExportsOrder,
          parameters: () => parameters
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptor.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.for-each.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptors.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-properties.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js'
        )
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        style = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./styles/style.scss'
        ),
        options = { insert: 'head', singleton: !1 }
      injectStylesIntoStyleTag_default()(style.Z, options)
      style.Z.locals
      var parameters = { actions: { argTypesRegex: '^on[A-Z].*' } },
        __namedExportsOrder = ['parameters']
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        )
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key]
        switch (key) {
          case 'args':
            return (0, ClientApi.uc)(value)
          case 'argTypes':
            return (0, ClientApi.v9)(value)
          case 'decorators':
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1)
            })
          case 'loaders':
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1)
            })
          case 'parameters':
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {}
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        )
                      })
                }
                return target
              })({}, value),
              !1
            )
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer)
            })
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer)
            })
          case 'render':
            return (0, ClientApi.$P)(value)
          case 'globals':
          case 'globalTypes':
            var v = {}
            return (v[key] = value), (0, ClientApi.h1)(v, !1)
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null
          default:
            return console.log(key + ' was not supported :( !')
        }
      })
    },
    './components/buttons/primary/index.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        PrimaryButton = function PrimaryButton(_ref) {
          var label = _ref.label,
            onClick = _ref.onClick
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            'button',
            { className: 'button primary-button', onClick, children: label }
          )
        }
      PrimaryButton.displayName = 'PrimaryButton'
      const __WEBPACK_DEFAULT_EXPORT__ = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.memo)(PrimaryButton)
      try {
        ;(primary.displayName = 'primary'),
          (primary.__docgenInfo = {
            description: '',
            displayName: 'primary',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string | number' }
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '() => void' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/buttons/primary/index.tsx#primary'
            ] = {
              docgenInfo: primary.__docgenInfo,
              name: 'primary',
              path: 'components/buttons/primary/index.tsx#primary'
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/buttons/secondary/index.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        SecondaryButton = function SecondaryButton(_ref) {
          var label = _ref.label,
            onClick = _ref.onClick
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            'button',
            { className: 'button secondary-button', onClick, children: label }
          )
        }
      SecondaryButton.displayName = 'SecondaryButton'
      const __WEBPACK_DEFAULT_EXPORT__ = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.memo)(SecondaryButton)
      try {
        ;(secondary.displayName = 'secondary'),
          (secondary.__docgenInfo = {
            description: '',
            displayName: 'secondary',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string | number' }
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '() => void' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'components/buttons/secondary/index.tsx#secondary'
            ] = {
              docgenInfo: secondary.__docgenInfo,
              name: 'secondary',
              path: 'components/buttons/secondary/index.tsx#secondary'
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/heros/index.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        dK: () => AboutHero,
        Xl: () => ActionHero,
        xb: () => HeaderHero
      })
      var primary = __webpack_require__(
          './components/buttons/primary/index.tsx'
        ),
        secondary = __webpack_require__(
          './components/buttons/secondary/index.tsx'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        HeaderHero = function HeaderHero() {
          return (0, jsx_runtime.jsxs)('section', {
            className: 'hero header-hero',
            children: [
              (0, jsx_runtime.jsx)('h2', {
                children: "Let's share your gift lists!"
              }),
              (0, jsx_runtime.jsx)('p', {
                children:
                  'Answer some questions and create your gift list. The rest is easy, share it!'
              }),
              (0, jsx_runtime.jsx)(primary.Z, {
                label: 'Choose your gifts',
                onClick: function onClick() {
                  return alert(11)
                }
              })
            ]
          })
        }
      HeaderHero.displayName = 'HeaderHero'
      var ActionHero = function ActionHero() {
        return (0, jsx_runtime.jsxs)('section', {
          className: 'hero action-hero',
          children: [
            (0, jsx_runtime.jsx)('span', {
              children: 'Good way to find a gift!'
            }),
            (0, jsx_runtime.jsx)(secondary.Z, {
              label: 'Start to select your gifts!',
              onClick: function onClick() {
                return alert(11)
              }
            })
          ]
        })
      }
      ActionHero.displayName = 'ActionHero'
      var AboutHero = function AboutHero() {
        return (0, jsx_runtime.jsx)('section', {
          className: 'hero about-hero',
          children: (0, jsx_runtime.jsxs)('div', {
            className: 'container',
            children: [
              'We are here to solve the problems experienced in',
              (0, jsx_runtime.jsx)('strong', { children: ' choosing a gift' }),
              '. Invite the friend you want to gift here and choose the gift list. Surprise the friend and send the gift!'
            ]
          })
        })
      }
      AboutHero.displayName = 'AboutHero'
    },
    './components/items/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { G: () => items_work })
      __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js'
        )
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        HowWorks = function HowWorks(_ref) {
          var data = _ref.data
          return (0, jsx_runtime.jsx)('div', {
            className: 'container',
            children: (0, jsx_runtime.jsx)('ul', {
              id: 'about-item',
              children: data.map(function (item) {
                return (0,
                jsx_runtime.jsxs)('li', { children: [(0, jsx_runtime.jsx)('span', { children: item.order }), (0, jsx_runtime.jsx)('h4', { children: item.title }), (0, jsx_runtime.jsx)('p', { children: item.description })] }, item.order)
              })
            })
          })
        }
      HowWorks.displayName = 'HowWorks'
      const items_work = HowWorks
      try {
        ;(work.displayName = 'work'),
          (work.__docgenInfo = {
            description: '',
            displayName: 'work',
            props: {
              data: {
                defaultValue: null,
                description: '',
                name: 'data',
                required: !0,
                type: { name: 'WorkProps[]' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/items/work.tsx#work'] = {
              docgenInfo: work.__docgenInfo,
              name: 'work',
              path: 'components/items/work.tsx#work'
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/logo/index.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__
      })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Logo = function Logo() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            'h1',
            {
              id: 'logo',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  'strong',
                  { children: 'Letgift' }
                ),
                '.me'
              ]
            }
          )
        }
      Logo.displayName = 'Logo'
      const __WEBPACK_DEFAULT_EXPORT__ = Logo
    },
    './components/navigation/index.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { Z: () => navigation })
      __webpack_require__('./node_modules/core-js/modules/es.array.map.js')
      var next_link = __webpack_require__('./node_modules/next/link.js')
      const menu = [
        { key: 'home', label: 'Homepage' },
        { key: 'about', label: 'About us' },
        { key: 'how-it-works', label: 'How it works?' },
        { key: 'register', label: "Let's start!" }
      ]
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        NavigationWrapper = function NavigationWrapper() {
          return (0, jsx_runtime.jsx)('nav', {
            id: 'navigation',
            children: menu.map(function (_ref) {
              var key = _ref.key,
                label = _ref.label
              return (0,
              jsx_runtime.jsx)('li', { children: (0, jsx_runtime.jsx)(next_link.default, { href: key, children: (0, jsx_runtime.jsx)('a', { children: label }) }) }, key)
            })
          })
        }
      NavigationWrapper.displayName = 'NavigationWrapper'
      const navigation = NavigationWrapper
    },
    './components/buttons/index.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          Secondary: () => Secondary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var _primary_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/buttons/primary/index.tsx'
        ),
        _secondary_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/buttons/secondary/index.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Components/Buttons' }
      var Primary = function Primary() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          _primary_index__WEBPACK_IMPORTED_MODULE_1__.Z,
          {
            onClick: function onClick() {
              return alert('clicked')
            },
            label: 'Primary Button'
          }
        )
      }
      Primary.displayName = 'Primary'
      var Secondary = function Secondary() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          _secondary_index__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            onClick: function onClick() {
              return alert('clicked')
            },
            label: 'Secondary Button'
          }
        )
      }
      ;(Secondary.displayName = 'Secondary'),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <PrimaryButton onClick={() => alert('clicked')} label={'Primary Button'} />\n)"
            }
          },
          Primary.parameters
        )),
        (Secondary.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <SecondaryButton\n    onClick={() => alert('clicked')}\n    label={'Secondary Button'}\n  />\n)"
            }
          },
          Secondary.parameters
        ))
      var __namedExportsOrder = ['Primary', 'Secondary']
      ;(Primary.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Primary'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/buttons/index.stories.js'] = {
            name: 'Primary',
            docgenInfo: Primary.__docgenInfo,
            path: 'components/buttons/index.stories.js'
          }),
        (Secondary.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Secondary'
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/buttons/index.stories.js'] = {
            name: 'Secondary',
            docgenInfo: Secondary.__docgenInfo,
            path: 'components/buttons/index.stories.js'
          })
    },
    './components/constants.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Colors: () => Colors,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Constants/Colors',
        component: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          'div',
          {}
        )
      }
      var Colors = function Colors() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('ul', {
          id: 'colors',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('li', {
              className: 'primary'
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('li', {
              className: 'gray'
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('li', {
              className: 'secondary'
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('li', {
              className: 'white'
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('li', {
              className: 'dark-red'
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('li', {
              className: 'red'
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('li', {
              className: 'yellow'
            })
          ]
        })
      }
      ;(Colors.displayName = 'Colors'),
        (Colors.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => {\n  return (\n    <ul id="colors">\n      <li className="primary"></li>\n      <li className="gray"></li>\n      <li className="secondary"></li>\n      <li className="white"></li>\n      <li className="dark-red"></li>\n      <li className="red"></li>\n      <li className="yellow"></li>\n    </ul>\n  )\n}'
            }
          },
          Colors.parameters
        ))
      var __namedExportsOrder = ['Colors']
      ;(Colors.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Colors'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/constants.stories.js'] = {
            name: 'Colors',
            docgenInfo: Colors.__docgenInfo,
            path: 'components/constants.stories.js'
          })
    },
    './components/hello.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: () => Large,
          Primary: () => Primary,
          Secondary: () => Secondary,
          Small: () => Small,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        )
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Example/Button',
        component: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          'h2',
          {}
        ),
        argTypes: { backgroundColor: { control: 'color' } }
      }
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          'h2',
          Object.assign({}, args, { children: args.label })
        )
      }
      Template.displayName = 'Template'
      var Primary = Template.bind({})
      Primary.args = { primary: !0, label: 'Button' }
      var Secondary = Template.bind({})
      Secondary.args = { label: 'Button' }
      var Large = Template.bind({})
      Large.args = { size: 'large', label: 'Button' }
      var Small = Template.bind({})
      ;(Small.args = { size: 'small', label: 'Button' }),
        (Primary.parameters = Object.assign(
          {
            storySource: { source: 'args => <h2 {...args}>{args.label}</h2>' }
          },
          Primary.parameters
        )),
        (Secondary.parameters = Object.assign(
          {
            storySource: { source: 'args => <h2 {...args}>{args.label}</h2>' }
          },
          Secondary.parameters
        )),
        (Large.parameters = Object.assign(
          {
            storySource: { source: 'args => <h2 {...args}>{args.label}</h2>' }
          },
          Large.parameters
        )),
        (Small.parameters = Object.assign(
          {
            storySource: { source: 'args => <h2 {...args}>{args.label}</h2>' }
          },
          Small.parameters
        ))
      var __namedExportsOrder = ['Primary', 'Secondary', 'Large', 'Small']
    },
    './components/heros/index.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          About: () => About,
          Action: () => Action,
          Header: () => Header,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/heros/index.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Components/Heros' }
      var Header = function Header() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
          style: { background: 'black', padding: 30 },
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _index__WEBPACK_IMPORTED_MODULE_1__.xb,
            {}
          )
        })
      }
      Header.displayName = 'Header'
      var Action = function Action() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _index__WEBPACK_IMPORTED_MODULE_1__.Xl,
          {}
        )
      }
      Action.displayName = 'Action'
      var About = function About() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _index__WEBPACK_IMPORTED_MODULE_1__.dK,
          {}
        )
      }
      ;(About.displayName = 'About'),
        (Header.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <div style={{ background: 'black', padding: 30 }}>\n    <HeaderHero />\n  </div>\n)"
            }
          },
          Header.parameters
        )),
        (Action.parameters = Object.assign(
          { storySource: { source: '() => <ActionHero />' } },
          Action.parameters
        )),
        (About.parameters = Object.assign(
          { storySource: { source: '() => <AboutHero />' } },
          About.parameters
        ))
      var __namedExportsOrder = ['Header', 'Action', 'About']
      ;(Header.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Header'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/heros/index.stories.js'] = {
            name: 'Header',
            docgenInfo: Header.__docgenInfo,
            path: 'components/heros/index.stories.js'
          }),
        (Action.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Action'
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/heros/index.stories.js'] = {
            name: 'Action',
            docgenInfo: Action.__docgenInfo,
            path: 'components/heros/index.stories.js'
          }),
        (About.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'About'
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/heros/index.stories.js'] = {
            name: 'About',
            docgenInfo: About.__docgenInfo,
            path: 'components/heros/index.stories.js'
          })
    },
    './components/items/index.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Works: () => Works,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/items/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Components/Items' }
      var data = [
          {
            key: 1,
            order: 1,
            title: 'Create Account!',
            description:
              "Create an account to get started. It's free and only takes a minute."
          }
        ],
        Works = function Works() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _index__WEBPACK_IMPORTED_MODULE_1__.G,
            { data }
          )
        }
      ;(Works.displayName = 'Works'),
        (Works.parameters = Object.assign(
          { storySource: { source: '() => <HowWorks data={data} />' } },
          Works.parameters
        ))
      var __namedExportsOrder = ['Works']
      ;(Works.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Works'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/items/index.stories.js'] = {
            name: 'Works',
            docgenInfo: Works.__docgenInfo,
            path: 'components/items/index.stories.js'
          })
    },
    './components/logo/index.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Logo',
        component: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          'h1',
          {}
        )
      }
      var Default = function Default() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
          style: { background: 'black', padding: 30 },
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            'h1',
            {
              id: 'logo',
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  'strong',
                  { children: 'Letgift' }
                ),
                '.me'
              ]
            }
          )
        })
      }
      ;(Default.displayName = 'Default'),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <div style={{ background: \'black\', padding: 30 }}>\n    <h1 id="logo">\n      <strong>Letgift</strong>.me\n    </h1>\n  </div>\n)'
            }
          },
          Default.parameters
        ))
      var __namedExportsOrder = ['Default']
      ;(Default.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Default'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/logo/index.stories.js'] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'components/logo/index.stories.js'
          })
    },
    './components/navigation/index.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './components/navigation/index.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Navigations',
        component: _index__WEBPACK_IMPORTED_MODULE_1__.Z
      }
      var Default = function Default() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
          style: { background: 'black', padding: 30 },
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _index__WEBPACK_IMPORTED_MODULE_1__.Z,
            {}
          )
        })
      }
      ;(Default.displayName = 'Default'),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <div style={{ background: 'black', padding: 30 }}>\n    <NavigationWrapper />\n  </div>\n)"
            }
          },
          Default.parameters
        ))
      var __namedExportsOrder = ['Default']
      ;(Default.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Default'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components/navigation/index.stories.js'] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'components/navigation/index.stories.js'
          })
    },
    './components/sections/footer/index.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Footer: () => index_stories_Footer,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => index_stories
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var logo = __webpack_require__('./components/logo/index.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Footer = function Footer() {
          return (0, jsx_runtime.jsx)('footer', {
            children: (0, jsx_runtime.jsx)(logo.Z, {})
          })
        }
      Footer.displayName = 'Footer'
      const footer = Footer
      const index_stories = { title: 'Sections/Footer', component: footer }
      var index_stories_Footer = function Footer() {
        return (0, jsx_runtime.jsx)(footer, {})
      }
      ;(index_stories_Footer.displayName = 'Footer'),
        (index_stories_Footer.parameters = Object.assign(
          { storySource: { source: '() => <F />' } },
          index_stories_Footer.parameters
        ))
      var __namedExportsOrder = ['Footer']
      ;(index_stories_Footer.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Footer'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components/sections/footer/index.stories.js'
          ] = {
            name: 'Footer',
            docgenInfo: index_stories_Footer.__docgenInfo,
            path: 'components/sections/footer/index.stories.js'
          })
    },
    './components/sections/header/index.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Header: () => index_stories_Header,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => index_stories
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var navigation = __webpack_require__('./components/navigation/index.tsx'),
        logo = __webpack_require__('./components/logo/index.tsx'),
        heros = __webpack_require__('./components/heros/index.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Header = function Header() {
          return (0, jsx_runtime.jsx)('header', {
            id: 'header',
            children: (0, jsx_runtime.jsx)('div', {
              id: 'header',
              children: (0, jsx_runtime.jsxs)('div', {
                className: 'container',
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'header',
                    children: [
                      (0, jsx_runtime.jsx)(logo.Z, {}),
                      (0, jsx_runtime.jsx)(navigation.Z, {})
                    ]
                  }),
                  (0, jsx_runtime.jsx)(heros.xb, {})
                ]
              })
            })
          })
        }
      Header.displayName = 'Header'
      const header = Header
      const index_stories = { title: 'Sections/Header', component: header }
      var index_stories_Header = function Header() {
        return (0, jsx_runtime.jsx)(header, {})
      }
      ;(index_stories_Header.displayName = 'Header'),
        (index_stories_Header.parameters = Object.assign(
          { storySource: { source: '() => <HD />' } },
          index_stories_Header.parameters
        ))
      var __namedExportsOrder = ['Header']
      ;(index_stories_Header.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Header'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components/sections/header/index.stories.js'
          ] = {
            name: 'Header',
            docgenInfo: index_stories_Header.__docgenInfo,
            path: 'components/sections/header/index.stories.js'
          })
    },
    './components/sections/works/index.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Works: () => Works,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => index_stories
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js')
      var items = __webpack_require__('./components/items/index.ts'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        data = [
          {
            key: 1,
            order: 1,
            title: 'Create Account!',
            description:
              "Create an account to get started. It's free and only takes a minute."
          },
          {
            key: 2,
            order: 2,
            title: 'Answer The Questions!',
            description: 'Let us to decide which products are best for you.'
          },
          {
            key: 3,
            order: 3,
            title: 'Share Your List!',
            description:
              "Time to share your list with your friend! And don't forget to hope to receive the gifts."
          }
        ],
        HowWorks = function HowWorks() {
          return (0, jsx_runtime.jsx)(items.G, { data })
        }
      HowWorks.displayName = 'HowWorks'
      const works = HowWorks
      const index_stories = { title: 'Sections/Works', component: works }
      var Works = function Works() {
        return (0, jsx_runtime.jsx)(works, {})
      }
      ;(Works.displayName = 'Works'),
        (Works.parameters = Object.assign(
          { storySource: { source: '() => <HW />' } },
          Works.parameters
        ))
      var __namedExportsOrder = ['Works']
      ;(Works.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Works'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components/sections/works/index.stories.js'
          ] = {
            name: 'Works',
            docgenInfo: Works.__docgenInfo,
            path: 'components/sections/works/index.stories.js'
          })
    },
    './storybook-init-framework-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js'
      )
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./styles/style.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__
        })
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js'
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '@import"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Source+Serif+4:wght@400;600&display=swap";article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{background:#fff;color:#000;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html,button,input,select,textarea{font-family:sans-serif}body{margin:0}a{background:rgba(0,0,0,0)}a:focus{outline:thin dotted}a:hover,a:active{outline:0}h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em;margin:.83em 0}h3{font-size:1.17em;margin:1em 0}h4{font-size:1em;margin:1.33em 0}h5{font-size:.83em;margin:1.67em 0}h6{font-size:.75em;margin:2.33em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}q{quotes:"“" "”" "‘" "’"}q:before,q:after{content:"";content:none}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}h1,h2,h3,h4,h5,h6{margin:0;line-height:1.4;font-family:"Source Serif 4",serif}h1,h2,h3{font-weight:500;text-rendering:optimizeLegibility}h1{font-size:1.9rem}h2{font-size:1.7rem}h3{font-size:1.4rem}p{margin:0}a{text-decoration:none;color:#001427;transition:.2s}a:hover{color:#708d81;transition:.2s;cursor:pointer}a.active{transition:.2s;color:#708d81}a::selection{color:#708d81}.heading-font{font-family:"Source Serif 4",serif;font-variant-numeric:lining-nums;font-feature-settings:"lnum"}html{box-sizing:border-box;overflow-y:scroll;font-size:100%}@media only screen and (max-width: 767px){html{font-size:90%}}body{color:#001427;font-family:"Inter",sans-serif;font-size:1rem;line-height:1.62;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}ol,ul,li{padding:0;margin:0;list-style:none}button{border:0;background-color:rgba(0,0,0,0)}*,:after,:before{box-sizing:inherit;letter-spacing:.3px;transition:.15s}h1#logo{color:#fff}h1#logo strong{font-weight:600}footer h1#logo{color:#001427;text-align:center;padding:50px}body{overflow-x:hidden;transition:color .15s,background-color .15s}body .container{width:1140px;margin:0px auto}header{background:url(/images/header.jpg) no-repeat center center;background-size:cover;height:700px;width:100%;display:flex;position:relative;align-items:center}header #header{background:rgba(0,0,0,.6);width:100%;height:700px;position:absolute;top:0;left:0}header #header .container{width:1140px;display:flex;flex-wrap:wrap;margin:0px auto;align-items:flex-start;height:100%}header #header .container .header{width:1140px;display:flex;justify-content:space-between;padding:30px 50px}header #header .container section{margin-top:-70px}#colors{display:flex;gap:20px}#colors li{width:200px;height:200px;border:1px solid rgba(0,0,0,.2)}#colors li.primary{background-color:#001427}#colors li.secondary{background-color:#708d81}#colors li.white{background-color:#fff}#colors li.dark-red{background-color:#8d0801}#colors li.red{background-color:#bf0603}#colors li.yellow{background-color:#f4d58d}#colors li.gray{background-color:#f9fafb}nav#navigation{display:flex;gap:25px;position:relative;align-items:center}nav#navigation:after{content:"";position:absolute;right:0;bottom:-10px;display:block;width:66px;height:2px;background-color:#f4d58d}nav#navigation li{font-size:1.2rem}nav#navigation li a{color:#fff;font-weight:300}nav#navigation li a:hover{color:#f4d58d}button.button{padding:10px 18px;border-radius:5px}button.button.primary-button{background-color:#f4d58d;color:#001427;font-weight:600;font-size:1.1rem}button.button.primary-button:hover{opacity:.9}button.button.secondary-button{border:1px solid #001427;color:#001427;font-weight:400;font-size:1.1rem}button.button.secondary-button:hover{opacity:.8}section.hero.header-hero{padding-left:50px;color:#fff;display:flex;flex-direction:column;align-items:flex-start;gap:20px;width:540px}section.hero.header-hero h2{font-size:2.4rem}section.hero.header-hero p{font-size:1.2rem}section.hero.action-hero{padding:70px 0;background-color:#f4d58d;display:flex;justify-content:center;align-items:center;gap:40px}section.hero.action-hero span{font-weight:200;font-size:1.7rem}section.hero.about-hero{background-color:#f9fafb;padding:70px 80px;box-sizing:border-box;text-align:center;font-weight:200;font-size:1.7rem}section.hero.about-hero strong{font-weight:300}ul#about-item{display:flex;align-items:flex-start;justify-content:space-around;gap:50px;padding:70px 0}ul#about-item li{display:flex;flex-direction:column;align-items:flex-start;color:#001427;position:relative;width:33%}ul#about-item li:after{content:"";display:block;width:25%;height:1px;border:1px dashed #708d81;opacity:.3;background-color:#fff;position:absolute;right:0;top:30%;margin-top:30px}ul#about-item li:last-child:after{display:none}ul#about-item li span{font-size:1.5rem;font-weight:600;color:#001427;background-color:#f4d58d;border-radius:50%;width:3rem;text-align:center;line-height:3rem;height:3rem}ul#about-item li h4{font-size:1.6rem;padding:10px 0 5px}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./styles/style.scss',
              'webpack://./styles/constants/variable.scss',
              'webpack://./styles/base/normalize.scss',
              'webpack://./styles/base/typography.scss',
              'webpack://./styles/base/reboot.scss',
              'webpack://./styles/constants/mixin.scss',
              'webpack://./styles/base/layout.scss',
              'webpack://./styles/components/sections.scss',
              'webpack://./styles/components/constants.scss',
              'webpack://./styles/components/navigation.scss',
              'webpack://./styles/components/buttons.scss',
              'webpack://./styles/components/heros.scss',
              'webpack://./styles/components/items.scss'
            ],
            names: [],
            mappings:
              'AAAA,4HCCQ,CAAA,iFCyCR,aAWE,CAAA,mBAKF,oBAGE,CAAA,sBAUF,YACE,CAAA,QACA,CAAA,kBAQF,YAEE,CAAA,KAYF,eA9Da,CAAA,UACL,CAAA,6BAmEN,CAAA,yBACA,CAAA,kCAKF,sBA5FyB,CAAA,KAsGzB,QACE,CAAA,EAYF,wBAGE,CAAA,QAIA,mBACE,CAAA,iBAKF,SAEE,CAAA,GAYF,aA1Ia,CAAA,cAOH,CAAA,GAwIV,eA9Ia,CAAA,cAOH,CAAA,GA4IV,gBAlJa,CAAA,YAOH,CAAA,GAgJV,aAtJa,CAAA,eAOH,CAAA,GAoJV,eA1Ja,CAAA,eAOH,CAAA,GAwJV,eA9Ja,CAAA,eAOH,CAAA,YA+JZ,wBACE,CAAA,SAKF,gBAEE,CAAA,IAWF,iBACE,CAAA,KAKF,eACE,CAAA,UACA,CAAA,kBAcF,2BAIE,CAAA,aAIA,CAAA,IAKF,eACE,CAAA,oBACA,CAAA,oBACA,CAAA,EAKF,sBACE,CAAA,iBAeA,UAEE,CAAA,YACA,CAAA,MAMJ,aACE,CAAA,QAMF,aAEE,CAAA,aACA,CAAA,iBACA,CAAA,uBACA,CAAA,IAGF,UACE,CAAA,IAGF,cACE,CAAA,IAmDF,QACE,CAAA,eAQF,eACE,CAAA,OASF,QACE,CAAA,SAgBF,uBACE,CAAA,YACA,CAAA,0BACA,CAAA,OAQF,QACE,CAAA,SACA,CAAA,kBACA,CAAA,6BAWF,mBAIE,CAAA,cACA,CAAA,QACA,CAAA,uBACA,CAAA,aAQF,kBAEE,CAAA,cAQF,mBAEE,CAAA,oEAWF,yBAIE,CAAA,cACA,CAAA,iCAQF,cAEE,CAAA,iDAQA,QACE,CAAA,SACA,CAAA,SAOJ,aACE,CAAA,kBACA,CAAA,MASF,wBACE,CAAA,gBACA,CAAA,mBAMA,4BACE,CAAA,2BACA,CAAA,8BACA,CAAA,sBACA,CAAA,+FAIA,uBAEE,CAAA,uCAQJ,qBAEE,CAAA,SACA,CAAA,kBCvgBJ,QAME,CAAA,eACA,CAAA,kCFJa,CAAA,SEQf,eAGE,CAAA,iCACA,CAAA,GAGF,gBACE,CAAA,GAGF,gBACE,CAAA,GAGF,gBACE,CAAA,EAGF,QACE,CAAA,EAGF,oBACE,CAAA,aFzBQ,CAAA,cE2BR,CAAA,QACA,aF3BU,CAAA,cE6BR,CAAA,cACA,CAAA,SAEF,cACE,CAAA,aFjCQ,CAAA,aEoCV,aFpCU,CAAA,cEyCZ,kCFjDe,CAAA,gCEmDb,CAAA,4BACA,CAAA,KCvDF,qBACE,CAAA,iBACA,CAAA,cACA,CAAA,0CCKE,KDRJ,aAKI,CAAA,CAAA,KAIJ,aACE,CAAA,8BHRY,CAAA,cGUZ,CAAA,gBACA,CAAA,yBACA,CAAA,6BACA,CAAA,SAGF,SAGE,CAAA,QACA,CAAA,eACA,CAAA,OAGF,QACE,CAAA,8BACA,CAAA,iBAGF,kBAGE,CAAA,mBACA,CAAA,eACA,CAAA,QAGF,UH3BQ,CAAA,eG6BN,eACE,CAAA,eAGJ,aHnCU,CAAA,iBGqCR,CAAA,YACA,CAAA,KEhDF,iBACE,CAAA,2CACA,CAAA,gBAEA,YLee,CAAA,eKbb,CAAA,OCNJ,0DACE,CAAA,qBACA,CAAA,YACA,CAAA,UACA,CAAA,YACA,CAAA,iBACA,CAAA,kBACA,CAAA,eAEA,yBACE,CAAA,UACA,CAAA,YACA,CAAA,iBACA,CAAA,KACA,CAAA,MACA,CAAA,0BAEA,YNEa,CAAA,YAAA,CAAA,cMCX,CAAA,eACA,CAAA,sBACA,CAAA,WACA,CAAA,kCAEA,YNNW,CAAA,YMQT,CAAA,6BACA,CAAA,iBACA,CAAA,kCAEF,gBACE,CAAA,QChCR,YACE,CAAA,QACA,CAAA,WAEA,WACE,CAAA,YACA,CAAA,+BACA,CAAA,mBAEA,wBACE,CAAA,qBAEF,wBPDQ,CAAA,iBOIR,qBPHI,CAAA,oBOMJ,wBPJO,CAAA,eOOP,wBPRE,CAAA,kBOWF,wBPTK,CAAA,gBOYL,wBPXG,CAAA,eQfL,YACE,CAAA,QACA,CAAA,iBACA,CAAA,kBACA,CAAA,qBAEA,UACE,CAAA,iBACA,CAAA,OACA,CAAA,YACA,CAAA,aACA,CAAA,UACA,CAAA,UACA,CAAA,wBACA,CAAA,kBAGF,gBACE,CAAA,oBACA,URRE,CAAA,eQUA,CAAA,0BACA,aRRC,CAAA,cSfT,iBACE,CAAA,iBACA,CAAA,6BAEA,wBTWO,CAAA,aALC,CAAA,eSHN,CAAA,gBACA,CAAA,mCAEA,UACE,CAAA,+BAIJ,wBACE,CAAA,aTNM,CAAA,eSQN,CAAA,gBACA,CAAA,qCACA,UACE,CAAA,yBCpBJ,iBACE,CAAA,UVUI,CAAA,YURJ,CAAA,qBACA,CAAA,sBACA,CAAA,QACA,CAAA,WACA,CAAA,4BAEA,gBACE,CAAA,2BAGF,gBACE,CAAA,yBAGJ,cACE,CAAA,wBVJK,CAAA,YUML,CAAA,sBACA,CAAA,kBACA,CAAA,QACA,CAAA,8BAEA,eACE,CAAA,gBACA,CAAA,wBAGJ,wBVfK,CAAA,iBUiBH,CAAA,qBACA,CAAA,iBACA,CAAA,eACA,CAAA,gBACA,CAAA,+BAEA,eACE,CAAA,cCxCN,YACE,CAAA,sBACA,CAAA,4BACA,CAAA,QACA,CAAA,cACA,CAAA,iBAEA,YACE,CAAA,qBACA,CAAA,sBACA,CAAA,aXAM,CAAA,iBWEN,CAAA,SACA,CAAA,uBAEA,UACE,CAAA,aACA,CAAA,SACA,CAAA,UACA,CAAA,yBACA,CAAA,UACA,CAAA,qBXTE,CAAA,iBWWF,CAAA,OACA,CAAA,OACA,CAAA,eACA,CAAA,kCAEF,YACE,CAAA,sBAGF,gBACE,CAAA,eACA,CAAA,aXxBI,CAAA,wBAKD,CAAA,iBWsBH,CAAA,UACA,CAAA,iBACA,CAAA,gBACA,CAAA,WACA,CAAA,oBAGF,gBACE,CAAA,kBACA',
            sourcesContent: [
              '@import"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Source+Serif+4:wght@400;600&display=swap";article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{background:#fff;color:#000;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html,button,input,select,textarea{font-family:sans-serif}body{margin:0}a{background:rgba(0,0,0,0)}a:focus{outline:thin dotted}a:hover,a:active{outline:0}h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em;margin:.83em 0}h3{font-size:1.17em;margin:1em 0}h4{font-size:1em;margin:1.33em 0}h5{font-size:.83em;margin:1.67em 0}h6{font-size:.75em;margin:2.33em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}q{quotes:"“" "”" "‘" "’"}q:before,q:after{content:"";content:none}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}h1,h2,h3,h4,h5,h6{margin:0;line-height:1.4;font-family:"Source Serif 4",serif}h1,h2,h3{font-weight:500;text-rendering:optimizeLegibility}h1{font-size:1.9rem}h2{font-size:1.7rem}h3{font-size:1.4rem}p{margin:0}a{text-decoration:none;color:#001427;transition:.2s}a:hover{color:#708d81;transition:.2s;cursor:pointer}a.active{transition:.2s;color:#708d81}a::selection{color:#708d81}.heading-font{font-family:"Source Serif 4",serif;font-variant-numeric:lining-nums;font-feature-settings:"lnum"}html{box-sizing:border-box;overflow-y:scroll;font-size:100%}@media only screen and (max-width: 767px){html{font-size:90%}}body{color:#001427;font-family:"Inter",sans-serif;font-size:1rem;line-height:1.62;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}ol,ul,li{padding:0;margin:0;list-style:none}button{border:0;background-color:rgba(0,0,0,0)}*,:after,:before{box-sizing:inherit;letter-spacing:.3px;transition:.15s}h1#logo{color:#fff}h1#logo strong{font-weight:600}footer h1#logo{color:#001427;text-align:center;padding:50px}body{overflow-x:hidden;transition:color .15s,background-color .15s}body .container{width:1140px;margin:0px auto}header{background:url(/images/header.jpg) no-repeat center center;background-size:cover;height:700px;width:100%;display:flex;position:relative;align-items:center}header #header{background:rgba(0,0,0,.6);width:100%;height:700px;position:absolute;top:0;left:0}header #header .container{width:1140px;display:flex;flex-wrap:wrap;margin:0px auto;align-items:flex-start;height:100%}header #header .container .header{width:1140px;display:flex;justify-content:space-between;padding:30px 50px}header #header .container section{margin-top:-70px}#colors{display:flex;gap:20px}#colors li{width:200px;height:200px;border:1px solid rgba(0,0,0,.2)}#colors li.primary{background-color:#001427}#colors li.secondary{background-color:#708d81}#colors li.white{background-color:#fff}#colors li.dark-red{background-color:#8d0801}#colors li.red{background-color:#bf0603}#colors li.yellow{background-color:#f4d58d}#colors li.gray{background-color:#f9fafb}nav#navigation{display:flex;gap:25px;position:relative;align-items:center}nav#navigation:after{content:"";position:absolute;right:0;bottom:-10px;display:block;width:66px;height:2px;background-color:#f4d58d}nav#navigation li{font-size:1.2rem}nav#navigation li a{color:#fff;font-weight:300}nav#navigation li a:hover{color:#f4d58d}button.button{padding:10px 18px;border-radius:5px}button.button.primary-button{background-color:#f4d58d;color:#001427;font-weight:600;font-size:1.1rem}button.button.primary-button:hover{opacity:.9}button.button.secondary-button{border:1px solid #001427;color:#001427;font-weight:400;font-size:1.1rem}button.button.secondary-button:hover{opacity:.8}section.hero.header-hero{padding-left:50px;color:#fff;display:flex;flex-direction:column;align-items:flex-start;gap:20px;width:540px}section.hero.header-hero h2{font-size:2.4rem}section.hero.header-hero p{font-size:1.2rem}section.hero.action-hero{padding:70px 0;background-color:#f4d58d;display:flex;justify-content:center;align-items:center;gap:40px}section.hero.action-hero span{font-weight:200;font-size:1.7rem}section.hero.about-hero{background-color:#f9fafb;padding:70px 80px;box-sizing:border-box;text-align:center;font-weight:200;font-size:1.7rem}section.hero.about-hero strong{font-weight:300}ul#about-item{display:flex;align-items:flex-start;justify-content:space-around;gap:50px;padding:70px 0}ul#about-item li{display:flex;flex-direction:column;align-items:flex-start;color:#001427;position:relative;width:33%}ul#about-item li:after{content:"";display:block;width:25%;height:1px;border:1px dashed #708d81;opacity:.3;background-color:#fff;position:absolute;right:0;top:30%;margin-top:30px}ul#about-item li:last-child:after{display:none}ul#about-item li span{font-size:1.5rem;font-weight:600;color:#001427;background-color:#f4d58d;border-radius:50%;width:3rem;text-align:center;line-height:3rem;height:3rem}ul#about-item li h4{font-size:1.6rem;padding:10px 0 5px}',
              "// Fonts\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Source+Serif+4:wght@400;600&display=swap');\n$font-normal: 'Inter', sans-serif;\n$font-heading: 'Source Serif 4', serif;\n\n// Weights\n$weight-bold: 600;\n$weight-normal: 400;\n\n// Colors\n$primary: #001427;\n$secondary: #708d81;\n$white: #ffffff;\n$red: #bf0603;\n$dark-red: #8d0801;\n$yellow: #f4d58d;\n$gray: #f9fafb;\n\n// Sizes\n$container-size: 1140px;\n",
              "// =============================================================================\n// Normalize.scss based on Nicolas Gallagher and Jonathan Neal's\n// normalize.css v2.1.3 | MIT License | git.io/normalize\n// =============================================================================\n\n// =============================================================================\n// Normalize.scss settings\n// =============================================================================\n\n// Set to true if you want to add support for IE6 and IE7\n// Notice: setting to true might render some elements\n// slightly differently than when set to false\n$legacy_support_for_ie: false !default; // Used also in Compass\n\n// Set the default font family here so you don't have to override it later\n$normalized_font_family: sans-serif !default;\n\n$normalize_headings: true !default;\n\n$h1_font_size: 2em !default;\n$h2_font_size: 1.5em !default;\n$h3_font_size: 1.17em !default;\n$h4_font_size: 1em !default;\n$h5_font_size: 0.83em !default;\n$h6_font_size: 0.75em !default;\n\n$h1_margin: 0.67em 0 !default;\n$h2_margin: 0.83em 0 !default;\n$h3_margin: 1em 0 !default;\n$h4_margin: 1.33em 0 !default;\n$h5_margin: 1.67em 0 !default;\n$h6_margin: 2.33em 0 !default;\n\n$background: #fff !default;\n$color: #000 !default;\n\n// =============================================================================\n// HTML5 display definitions\n// =============================================================================\n\n// Corrects block display not defined in IE6/7/8/9 & FF3\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n// Corrects inline-block display not defined in IE6/7/8/9 & FF3\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  @if $legacy_support_for_ie {\n    *display: inline;\n    *zoom: 1;\n  }\n}\n\n// 1. Prevents modern browsers from displaying 'audio' without controls\n// 2. Remove excess height in iOS5 devices\n\naudio:not([controls]) {\n  display: none; // 1\n  height: 0; // 2\n}\n\n//\n// Address `[hidden]` styling not present in IE 8/9.\n// Hide the `template` element in IE, Safari, and Firefox < 22.\n//\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n// =============================================================================\n// Base\n// =============================================================================\n\n// 1. Corrects text resizing oddly in IE6/7 when body font-size is set using em units\n//    http://clagnut.com/blog/348/#c790\n// 2. Prevents iOS text size adjust after orientation change, without disabling user zoom\n//    www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/\n\nhtml {\n  @if $legacy_support_for_ie {\n    font-size: 100%; // 1\n  }\n  background: $background;\n  color: $color;\n  -webkit-text-size-adjust: 100%; // 2\n  -ms-text-size-adjust: 100%; // 2\n}\n\n// Addresses font-family inconsistency between 'textarea' and other form elements.\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: $normalized_font_family;\n}\n\n// Addresses margins handled incorrectly in IE6/7\n\nbody {\n  margin: 0;\n}\n\n// =============================================================================\n// Links\n// =============================================================================\n\n// 1. Remove the gray background color from active links in IE 10.\n// 2. Addresses outline displayed oddly in Chrome\n// 3. Improves readability when focused and also mouse hovered in all browsers\n//    people.opera.com/patrickl/experiments/keyboard/test\n\na {\n  // 1\n\n  background: transparent;\n\n  // 2\n\n  &:focus {\n    outline: thin dotted;\n  }\n\n  // 3\n\n  &:hover,\n  &:active {\n    outline: 0;\n  }\n}\n\n// =============================================================================\n// Typography\n// =============================================================================\n\n// Addresses font sizes and margins set differently in IE6/7\n// Addresses font sizes within 'section' and 'article' in FF4+, Chrome, S5\n\n@if $normalize_headings == true {\n  h1 {\n    font-size: $h1_font_size;\n    margin: $h1_margin;\n  }\n\n  h2 {\n    font-size: $h2_font_size;\n    margin: $h2_margin;\n  }\n\n  h3 {\n    font-size: $h3_font_size;\n    margin: $h3_margin;\n  }\n\n  h4 {\n    font-size: $h4_font_size;\n    margin: $h4_margin;\n  }\n\n  h5 {\n    font-size: $h5_font_size;\n    margin: $h5_margin;\n  }\n\n  h6 {\n    font-size: $h6_font_size;\n    margin: $h6_margin;\n  }\n}\n\n// Addresses styling not present in IE 8/9, S5, Chrome\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n// Addresses style set to 'bolder' in FF3+, S4/5, Chrome\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n@if $legacy_support_for_ie {\n  blockquote {\n    margin: 1em 40px;\n  }\n}\n\n// Addresses styling not present in S5, Chrome\n\ndfn {\n  font-style: italic;\n}\n\n// Addresses styling not present in IE6/7/8/9\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n// Addresses margins set differently in IE6/7\n@if $legacy_support_for_ie {\n  p,\n  pre {\n    margin: 1em 0;\n  }\n}\n\n// Corrects font family set oddly in IE6, S4/5, Chrome\n// en.wikipedia.org/wiki/User:Davidgothberg/Test59\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  @if $legacy_support_for_ie {\n    _font-family: 'courier new', monospace;\n  }\n  font-size: 1em;\n}\n\n// Improves readability of pre-formatted text in all browsers\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\n// Set consistent quote types.\n\nq {\n  quotes: '\\201C''\\201D''\\2018''\\2019';\n}\n\n// 1. Addresses CSS quotes not supported in IE6/7\n// 2. Addresses quote property not supported in S4\n\n// 1\n@if $legacy_support_for_ie {\n  q {\n    quotes: none;\n  }\n}\n\n// 2\nq {\n  &:before,\n  &:after {\n    content: '';\n    content: none;\n  }\n}\n\n// Address inconsistent and variable font size in all browsers.\n\nsmall {\n  font-size: 80%;\n}\n\n// Prevents sub and sup affecting line-height in all browsers\n// gist.github.com/413930\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n// =============================================================================\n// Lists\n// =============================================================================\n\n// Addresses margins set differently in IE6/7\n@if $legacy_support_for_ie {\n  dl,\n  menu,\n  ol,\n  ul {\n    margin: 1em 0;\n  }\n}\n\n@if $legacy_support_for_ie {\n  dd {\n    margin: 0 0 0 40px;\n  }\n}\n\n// Addresses paddings set differently in IE6/7\n@if $legacy_support_for_ie {\n  menu,\n  ol,\n  ul {\n    padding: 0 0 0 40px;\n  }\n}\n\n// Corrects list images handled incorrectly in IE7\n\nnav {\n  ul,\n  ol {\n    @if $legacy_support_for_ie {\n      list-style-image: none;\n    }\n  }\n}\n\n// =============================================================================\n// Embedded content\n// =============================================================================\n\n// 1. Removes border when inside 'a' element in IE6/7/8/9, FF3\n// 2. Improves image quality when scaled in IE7\n//    code.flickr.com/blog/2008/11/12/on-ui-quality-the-little-things-client-side-image-resizing/\n\nimg {\n  border: 0; // 1\n  @if $legacy_support_for_ie {\n    -ms-interpolation-mode: bicubic; // 2\n  }\n}\n\n// Corrects overflow displayed oddly in IE9\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n// =============================================================================\n// Figures\n// =============================================================================\n\n// Addresses margin not present in IE6/7/8/9, S5, O11\n\nfigure {\n  margin: 0;\n}\n\n// =============================================================================\n// Forms\n// =============================================================================\n\n// Corrects margin displayed oddly in IE6/7\n@if $legacy_support_for_ie {\n  form {\n    margin: 0;\n  }\n}\n\n// Define consistent border, margin, and padding\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n// 1. Corrects color not being inherited in IE6/7/8/9\n// 2. Remove padding so people aren't caught out if they zero out fieldsets.\n// 3. Corrects text not wrapping in FF3\n// 4. Corrects alignment displayed oddly in IE6/7\n\nlegend {\n  border: 0; // 1\n  padding: 0; // 2\n  white-space: normal; // 3\n  @if $legacy_support_for_ie {\n    *margin-left: -7px; // 4\n  }\n}\n\n// 1. Correct font family not being inherited in all browsers.\n// 2. Corrects font size not being inherited in all browsers\n// 3. Addresses margins set differently in IE6/7, FF3+, S5, Chrome\n// 4. Improves appearance and consistency in all browsers\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit; // 1\n  font-size: 100%; // 2\n  margin: 0; // 3\n  vertical-align: baseline; // 4\n  @if $legacy_support_for_ie {\n    *vertical-align: middle; // 4\n  }\n}\n\n// Addresses FF3/4 setting line-height on 'input' using !important in the UA stylesheet\n\nbutton,\ninput {\n  line-height: normal;\n}\n\n// Address inconsistent `text-transform` inheritance for `button` and `select`.\n// All other form control elements do not inherit `text-transform` values.\n// Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n// Correct `select` style inheritance in Firefox 4+ and Opera.\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n// 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n//    and `video` controls\n// 2. Corrects inability to style clickable 'input' types in iOS\n// 3. Improves usability and consistency of cursor style between image-type\n//    'input' and others\n// 4. Removes inner spacing in IE7 without affecting normal text inputs\n//    Known issue: inner spacing remains in IE6\n\nbutton,\nhtml input[type=\"button\"], // 1\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n  cursor: pointer; // 3\n  @if $legacy_support_for_ie {\n    *overflow: visible; // 4\n  }\n}\n\n// Re-set default cursor for disabled elements\n\nbutton[disabled],\ninput[disabled] {\n  cursor: default;\n}\n\n// Removes inner padding and border in FF3+\n// www.sitepen.com/blog/2008/05/14/the-devils-in-the-details-fixing-dojos-toolbar-buttons/\n\nbutton,\ninput {\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n// 1. Removes default vertical scrollbar in IE6/7/8/9\n// 2. Improves readability and alignment in all browsers\n\ntextarea {\n  overflow: auto; // 1\n  vertical-align: top; // 2\n}\n\n// =============================================================================\n// Tables\n// =============================================================================\n\n// Remove most spacing between table cells\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  // 1. Addresses appearance set to searchfield in S5, Chrome\n  // 2. Addresses box-sizing set to border-box in S5, Chrome (include -moz to future-proof)\n  &[type='search'] {\n    -webkit-appearance: textfield; // 1\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; // 2\n    box-sizing: content-box;\n\n    // Remove inner padding and search cancel button in Safari 5 and Chrome\n    // on OS X.\n    &::-webkit-search-cancel-button,\n    &::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n  }\n\n  // 1. Address box sizing set to `content-box` in IE 8/9/10.\n  // 2. Remove excess padding in IE 8/9/10.\n  // 3. Removes excess padding in IE7\n  //    Known issue: excess padding remains in IE6\n  &[type='checkbox'],\n  &[type='radio'] {\n    box-sizing: border-box; // 1\n    padding: 0; // 2\n    @if $legacy_support_for_ie {\n      *height: 13px; // 3\n      *width: 13px; // 3\n    }\n  }\n}\n",
              "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  line-height: 1.4;\n  font-family: $font-heading;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 500;\n  text-rendering: optimizeLegibility;\n}\n\nh1 {\n  font-size: 1.9rem;\n}\n\nh2 {\n  font-size: 1.7rem;\n}\n\nh3 {\n  font-size: 1.4rem;\n}\n\np {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: $primary;\n  transition: 0.2s;\n  &:hover {\n    color: $secondary;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n  &.active {\n    transition: 0.2s;\n    color: $secondary;\n  }\n  &::selection {\n    color: $secondary;\n  }\n}\n\n.heading-font {\n  font-family: $font-heading;\n  font-variant-numeric: lining-nums;\n  font-feature-settings: 'lnum';\n}\n",
              'html {\n  box-sizing: border-box;\n  overflow-y: scroll;\n  font-size: 100%;\n  @include responsive(xs) {\n    font-size: 90%;\n  }\n}\n\nbody {\n  color: $primary;\n  font-family: $font-normal;\n  font-size: 1rem;\n  line-height: 1.62;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nol,\nul,\nli {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nbutton {\n  border: 0;\n  background-color: transparent;\n}\n\n*,\n:after,\n:before {\n  box-sizing: inherit;\n  letter-spacing: 0.3px;\n  transition: 0.15s;\n}\n\nh1#logo {\n  color: $white;\n  strong {\n    font-weight: 600;\n  }\n}\nfooter h1#logo {\n  color: $primary;\n  text-align: center;\n  padding: 50px;\n}\n',
              '// default border-radius\n@mixin default-radius {\n  border-radius: 4px;\n}\n\n// Responsive\n@mixin responsive($class) {\n  @if $class == xs {\n    @media only screen and (max-width: 767px) {\n      @content;\n    }\n  }\n  @if $class == s {\n    @media only screen and (max-width: 992px) and (min-width: 767px) {\n      @content;\n    }\n  }\n}\n',
              'body {\n  overflow-x: hidden;\n  transition: color 0.15s, background-color 0.15s;\n\n  .container {\n    width: $container-size;\n    margin: 0px auto;\n  }\n}\n',
              'header {\n  background: url(/images/header.jpg) no-repeat center center;\n  background-size: cover;\n  height: 700px;\n  width: 100%;\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  #header {\n    background: rgba($color: #000000, $alpha: 0.6);\n    width: 100%;\n    height: 700px;\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    .container {\n      width: $container-size;\n      display: flex;\n      flex-wrap: wrap;\n      margin: 0px auto;\n      align-items: flex-start;\n      height: 100%;\n\n      .header {\n        width: $container-size;\n        display: flex;\n        justify-content: space-between;\n        padding: 30px 50px;\n      }\n      section {\n        margin-top: -70px;\n      }\n    }\n  }\n}\n',
              '#colors {\n  display: flex;\n  gap: 20px;\n\n  li {\n    width: 200px;\n    height: 200px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n\n    &.primary {\n      background-color: $primary;\n    }\n    &.secondary {\n      background-color: $secondary;\n    }\n    &.white {\n      background-color: $white;\n    }\n    &.dark-red {\n      background-color: $dark-red;\n    }\n    &.red {\n      background-color: $red;\n    }\n    &.yellow {\n      background-color: $yellow;\n    }\n    &.gray {\n      background-color: $gray;\n    }\n  }\n}\n',
              "nav {\n  &#navigation {\n    display: flex;\n    gap: 25px;\n    position: relative;\n    align-items: center;\n\n    &:after {\n      content: '';\n      position: absolute;\n      right: 0;\n      bottom: -10px;\n      display: block;\n      width: 66px;\n      height: 2px;\n      background-color: $yellow;\n    }\n\n    li {\n      font-size: 1.2rem;\n      a {\n        color: $white;\n        font-weight: 300;\n        &:hover {\n          color: $yellow;\n        }\n      }\n    }\n  }\n}\n",
              'button.button {\n  padding: 10px 18px;\n  border-radius: 5px;\n\n  &.primary-button {\n    background-color: $yellow;\n    color: $primary;\n    font-weight: 600;\n    font-size: 1.1rem;\n\n    &:hover {\n      opacity: 0.9;\n    }\n  }\n\n  &.secondary-button {\n    border: 1px solid $primary;\n    color: $primary;\n    font-weight: 400;\n    font-size: 1.1rem;\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n}\n',
              'section.hero {\n  &.header-hero {\n    padding-left: 50px;\n    color: $white;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n    width: 540px;\n\n    h2 {\n      font-size: 2.4rem;\n    }\n\n    p {\n      font-size: 1.2rem;\n    }\n  }\n  &.action-hero {\n    padding: 70px 0;\n    background-color: $yellow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 40px;\n\n    span {\n      font-weight: 200;\n      font-size: 1.7rem;\n    }\n  }\n  &.about-hero {\n    background-color: $gray;\n    padding: 70px 80px;\n    box-sizing: border-box;\n    text-align: center;\n    font-weight: 200;\n    font-size: 1.7rem;\n\n    strong {\n      font-weight: 300;\n    }\n  }\n}\n',
              "ul#about-item {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  gap: 50px;\n  padding: 70px 0;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    color: $primary;\n    position: relative;\n    width: 33%;\n\n    &:after {\n      content: '';\n      display: block;\n      width: 25%;\n      height: 1px;\n      border: 1px dashed $secondary;\n      opacity: 0.3;\n      background-color: $white;\n      position: absolute;\n      right: 0;\n      top: 30%;\n      margin-top: 30px;\n    }\n    &:last-child:after {\n      display: none;\n    }\n\n    span {\n      font-size: 1.5rem;\n      font-weight: 600;\n      color: $primary;\n      background-color: $yellow;\n      border-radius: 50%;\n      width: 3rem;\n      text-align: center;\n      line-height: 3rem;\n      height: 3rem;\n    }\n\n    h4 {\n      font-size: 1.6rem;\n      padding: 10px 0 5px;\n    }\n  }\n}\n"
            ],
            sourceRoot: ''
          }
        ])
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './. sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './components/buttons/index.stories.js':
            './components/buttons/index.stories.js',
          './components/constants.stories.js':
            './components/constants.stories.js',
          './components/hello.stories.js': './components/hello.stories.js',
          './components/heros/index.stories.js':
            './components/heros/index.stories.js',
          './components/items/index.stories.js':
            './components/items/index.stories.js',
          './components/logo/index.stories.js':
            './components/logo/index.stories.js',
          './components/navigation/index.stories.js':
            './components/navigation/index.stories.js',
          './components/sections/footer/index.stories.js':
            './components/sections/footer/index.stories.js',
          './components/sections/header/index.stories.js':
            './components/sections/header/index.stories.js',
          './components/sections/works/index.stories.js':
            './components/sections/works/index.stories.js'
        }
        function webpackContext(req) {
          var id = webpackContextResolve(req)
          return __webpack_require__(id)
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'")
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          }
          return map[req]
        }
        ;(webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map)
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './. sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$')
      },
    './. sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      module => {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        ;(webpackEmptyContext.keys = () => []),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (webpackEmptyContext.id =
            './. sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'),
          (module.exports = webpackEmptyContext)
      },
    '?4f7e': () => {},
    './generated-stories-entry.cjs': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      'use strict'
      ;(module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js'
        ).configure)(
          [
            __webpack_require__(
              './. sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './. sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
            )
          ],
          module,
          !1
        )
    }
  },
  __webpack_require__ => {
    var __webpack_exec__ = moduleId =>
      __webpack_require__((__webpack_require__.s = moduleId))
    __webpack_require__.O(
      0,
      [981],
      () => (
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_exec__('./storybook-init-framework-entry.js'),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-links/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/storybook-addon-next/dist/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
        __webpack_exec__('./generated-stories-entry.cjs')
      )
    )
    __webpack_require__.O()
  }
])
