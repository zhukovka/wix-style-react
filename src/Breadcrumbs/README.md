# Breadcrumbs component


## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| activeId | string, int | - | - | id of current active item |
| items | array of objects (see item)| - | + | Specifies items for breadcrumbs |
| size | string ('medium', 'large') | 'medium' | - | size of items |
| theme | string ('onWhiteBackground', 'onGrayBackground', 'onDarkBackground') | 'onGrayBackground' | - | Specifies breadcrubms background and font colors |
| textAlign | string | 'center' | - | text-align property |
| onClick | func | - | - | callback on item click |

## Item
| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| id | string or number| - | + | Specifies the item id |
| link | string | - | - | Optional link to be called on click |
| value | string or node | - | + | Value to be shown on breadcrumb |
| customElement | element | - | - | A custom item which will be rendered |

## Breadcrumbs Path Factory
```javascript
  /**
  * path: The path of the breadcrumbs - aaa/bbb/ccc will result 3 items of value aaa, bbb, ccc and link of '/aaa', '/aaa/bbb/', '/aaa/bbb/ccc'
  * baseUrlLink: Make the links relative to the new baseUrlLink instead of the current url
  * baseUrlVale: When given, the baseUrlLink will become the first option of the breadcrumbs
  * pathSeparator: allow to pass path with custom separator (i.e. 'aaa-bbb-ccc')
  */
  breadcrumbsPathFactory(path, baseUrlLink = '', baseUrlValue = null, pathSeparator = '/')
```
